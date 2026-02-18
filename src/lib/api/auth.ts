import { api } from './client';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RefreshTokenResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  VerifyEmailRequest,
  ChangePasswordRequest,
} from './types';

const AUTH_BASE = '/doctor-portal/auth';

export const authApi = {
  /**
   * Register a new doctor
   */
  register: (data: RegisterRequest) =>
    api.post<RegisterResponse>(`${AUTH_BASE}/register`, data, { skipAuth: true }),

  /**
   * Login with email and password
   */
  login: (data: LoginRequest) =>
    api.post<LoginResponse>(`${AUTH_BASE}/login`, data, { skipAuth: true }),

  /**
   * Verify email with token
   */
  verifyEmail: (data: VerifyEmailRequest) =>
    api.post<{ message: string }>(`${AUTH_BASE}/verify-email`, data, { skipAuth: true }),

  /**
   * Resend verification email
   */
  resendVerification: (email: string) =>
    api.post<{ message: string }>(`${AUTH_BASE}/resend-verification`, { email }, { skipAuth: true }),

  /**
   * Refresh access token using refresh token (from cookie)
   */
  refresh: () =>
    api.post<RefreshTokenResponse>(`${AUTH_BASE}/refresh`, {}, { skipAuth: true }),

  /**
   * Logout (invalidate refresh token)
   */
  logout: () =>
    api.post<{ message: string }>(`${AUTH_BASE}/logout`),

  /**
   * Request password reset email
   */
  forgotPassword: (data: ForgotPasswordRequest) =>
    api.post<{ message: string }>(`${AUTH_BASE}/forgot-password`, data, { skipAuth: true }),

  /**
   * Reset password with token
   */
  resetPassword: (data: ResetPasswordRequest) =>
    api.post<{ message: string }>(`${AUTH_BASE}/reset-password`, data, { skipAuth: true }),

  /**
   * Get current user info (requires auth)
   */
  me: () =>
    api.get<LoginResponse['user']>(`${AUTH_BASE}/me`),

  /**
   * Change password (requires auth)
   */
  changePassword: (data: ChangePasswordRequest) =>
    api.post<{ message: string }>(`${AUTH_BASE}/change-password`, data),
};

export default authApi;
