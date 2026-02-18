import type { ApiResponse } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/v1';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

// Token storage in memory (for access token)
let accessToken: string | null = null;

export function setAccessToken(token: string | null) {
  accessToken = token;
}

export function getAccessToken(): string | null {
  return accessToken;
}

// Refresh token handler (will be set by auth provider)
let refreshTokenHandler: (() => Promise<string | null>) | null = null;

export function setRefreshTokenHandler(handler: () => Promise<string | null>) {
  refreshTokenHandler = handler;
}

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface FetchOptions extends RequestInit {
  skipAuth?: boolean;
}

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type');
  const isJson = contentType?.includes('application/json');

  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    const message = isJson && data?.message
      ? data.message
      : `HTTP error ${response.status}`;
    throw new ApiError(response.status, message, data);
  }

  return data as T;
}

async function fetchWithAuth<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { skipAuth = false, headers: customHeaders, ...restOptions } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Add API key header if available
  if (API_KEY) {
    (headers as Record<string, string>)['x-api-key'] = API_KEY;
  }

  // Add auth header if we have a token and auth is not skipped
  if (!skipAuth && accessToken) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${accessToken}`;
  }

  const url = `${API_BASE_URL}${endpoint}`;

  let response = await fetch(url, {
    ...restOptions,
    headers,
    credentials: 'include', // Include cookies for refresh token
  });

  // If 401 and we have a refresh handler, try to refresh
  if (response.status === 401 && !skipAuth && refreshTokenHandler) {
    const newToken = await refreshTokenHandler();

    if (newToken) {
      // Retry the request with new token
      (headers as Record<string, string>)['Authorization'] = `Bearer ${newToken}`;
      response = await fetch(url, {
        ...restOptions,
        headers,
        credentials: 'include',
      });
    }
  }

  return handleResponse<T>(response);
}

// API Methods
export const api = {
  get: <T>(endpoint: string, options?: FetchOptions) =>
    fetchWithAuth<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, data?: unknown, options?: FetchOptions) =>
    fetchWithAuth<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    }),

  patch: <T>(endpoint: string, data?: unknown, options?: FetchOptions) =>
    fetchWithAuth<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    }),

  put: <T>(endpoint: string, data?: unknown, options?: FetchOptions) =>
    fetchWithAuth<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    }),

  delete: <T>(endpoint: string, options?: FetchOptions) =>
    fetchWithAuth<T>(endpoint, { ...options, method: 'DELETE' }),

  // Special method for file uploads (multipart/form-data)
  upload: async <T>(endpoint: string, formData: FormData, options?: FetchOptions): Promise<T> => {
    const { skipAuth = false, headers: customHeaders, ...restOptions } = options || {};

    const headers: HeadersInit = {
      // Don't set Content-Type, let browser set it with boundary
      ...customHeaders,
    };

    if (API_KEY) {
      (headers as Record<string, string>)['x-api-key'] = API_KEY;
    }

    if (!skipAuth && accessToken) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${accessToken}`;
    }

    const url = `${API_BASE_URL}${endpoint}`;

    let response = await fetch(url, {
      ...restOptions,
      method: 'POST',
      headers,
      body: formData,
      credentials: 'include',
    });

    // If 401 and we have a refresh handler, try to refresh and retry
    if (response.status === 401 && !skipAuth && refreshTokenHandler) {
      const newToken = await refreshTokenHandler();

      if (newToken) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${newToken}`;
        response = await fetch(url, {
          ...restOptions,
          method: 'POST',
          headers,
          body: formData,
          credentials: 'include',
        });
      }
    }

    return handleResponse<T>(response);
  },
};

export default api;
