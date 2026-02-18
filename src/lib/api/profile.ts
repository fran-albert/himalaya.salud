import { api } from './client';
import type {
  DoctorProfile,
  ProfileStatus,
  UpdateContactRequest,
  UpdateProfessionalRequest,
  UpdateBiographyRequest,
  UpdateInsurancesRequest,
} from './types';

const PROFILE_BASE = '/doctor-portal/profile';

export const profileApi = {
  /**
   * Get full doctor profile
   */
  getProfile: () =>
    api.get<DoctorProfile>(PROFILE_BASE),

  /**
   * Get profile verification status
   */
  getStatus: () =>
    api.get<ProfileStatus>(`${PROFILE_BASE}/status`),

  /**
   * Update contact information
   */
  updateContact: (data: UpdateContactRequest) =>
    api.patch<DoctorProfile>(`${PROFILE_BASE}/contact`, data),

  /**
   * Update professional information
   */
  updateProfessional: (data: UpdateProfessionalRequest) =>
    api.patch<DoctorProfile>(`${PROFILE_BASE}/professional`, data),

  /**
   * Update biography
   */
  updateBiography: (data: UpdateBiographyRequest) =>
    api.patch<DoctorProfile>(`${PROFILE_BASE}/biography`, data),

  /**
   * Update insurances (replace all)
   */
  updateInsurances: (data: UpdateInsurancesRequest) =>
    api.put<DoctorProfile>(`${PROFILE_BASE}/insurances`, data),

  /**
   * Toggle profile visibility
   */
  toggleVisibility: (visible: boolean) =>
    api.patch<DoctorProfile>(`${PROFILE_BASE}/visibility`, { profileVisibility: visible }),
};

export default profileApi;
