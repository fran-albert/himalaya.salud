'use client';

import { useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AuthContext, type AuthState, type RegisterData } from './auth-context';
import { authApi } from '../api/auth';
import { setAccessToken, setRefreshTokenHandler } from '../api/client';
import type { DoctorUserInfo } from '../api/types';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  const pathname = usePathname();
  const hasBootstrapped = useRef(false);
  const needsAuth = pathname.startsWith('/portal/') || pathname.startsWith('/admin');

  // Bootstrap auth when entering protected routes
  useEffect(() => {
    if (!needsAuth) {
      setState((prev) => prev.isLoading ? { ...prev, isLoading: false } : prev);
      return;
    }

    if (hasBootstrapped.current) return;
    hasBootstrapped.current = true;

    const initAuth = async () => {
      try {
        const response = await authApi.refresh();
        setAccessToken(response.accessToken);

        const user = await authApi.me();
        setState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } catch {
        setAccessToken(null);
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      }
    };

    initAuth();
  }, [needsAuth]);

  // Set up refresh token handler for automatic token refresh
  useEffect(() => {
    setRefreshTokenHandler(async () => {
      try {
        const response = await authApi.refresh();
        setAccessToken(response.accessToken);
        return response.accessToken;
      } catch {
        // Refresh failed, logout user
        setAccessToken(null);
        setState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
        return null;
      }
    });
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await authApi.login({ email, password });
      setAccessToken(response.accessToken);

      setState({
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: message,
      }));
      throw err;
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      await authApi.register(data);
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al registrarse';
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: message,
      }));
      throw err;
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // Ignore logout errors
    } finally {
      setAccessToken(null);
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const user = await authApi.me();
      setState((prev) => ({
        ...prev,
        user,
      }));
    } catch {
      // If refresh fails, keep current state
    }
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const value = {
    ...state,
    login,
    register,
    logout,
    refreshUser,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
