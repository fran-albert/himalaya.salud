'use client';

import { createContext, useContext } from 'react';
import type { DoctorUserInfo, VerificationStatus, UserRole } from '../api/types';

export interface AuthState {
  user: DoctorUserInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearError: () => void;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
  specialtyId: string;
  phoneNumber?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthContext };

// Helper hooks for common checks
export function useIsVerified(): boolean {
  const { user } = useAuth();
  return user?.verificationStatus === 'verified';
}

export function useVerificationStatus(): VerificationStatus | null {
  const { user } = useAuth();
  return user?.verificationStatus ?? null;
}

export function useRequiresEmailVerification(): boolean {
  const { user } = useAuth();
  return user?.verificationStatus === 'pending_email';
}

export function useRequiresDocuments(): boolean {
  const { user } = useAuth();
  return user?.verificationStatus === 'pending_verification';
}

export function useUserRole(): UserRole | null {
  const { user } = useAuth();
  return user?.role ?? null;
}

export function useIsAdmin(): boolean {
  const { user } = useAuth();
  return user?.role === 'admin';
}

export function useIsStaffOrHigher(): boolean {
  const { user } = useAuth();
  const role = user?.role;
  return role === 'staff' || role === 'manager' || role === 'admin';
}

export function useIsManagerOrHigher(): boolean {
  const { user } = useAuth();
  const role = user?.role;
  return role === 'manager' || role === 'admin';
}
