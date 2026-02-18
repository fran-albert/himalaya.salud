import { api } from './client';
import type {
  AdminDoctorListResponse,
  AdminDoctor,
  CreateDoctorRequest,
  ExcelUploadResponse,
  CatalogUploadResponse,
  AdminMessageResponse,
  SpecialtyOption,
} from './types';

export interface GetDoctorsParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export const adminApi = {
  /**
   * Get paginated list of doctors
   */
  getDoctors: async (params: GetDoctorsParams = {}): Promise<AdminDoctorListResponse> => {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set('page', String(params.page));
    if (params.pageSize) searchParams.set('pageSize', String(params.pageSize));
    if (params.search) searchParams.set('search', params.search);

    const queryString = searchParams.toString();
    const endpoint = `/portal-admin/doctors${queryString ? `?${queryString}` : ''}`;

    return api.get<AdminDoctorListResponse>(endpoint);
  },

  /**
   * Create a single doctor
   */
  createDoctor: async (data: CreateDoctorRequest): Promise<AdminDoctor> => {
    return api.post<AdminDoctor>('/portal-admin/doctors', data);
  },

  /**
   * Upload Excel file with doctors
   */
  uploadExcel: async (file: File): Promise<ExcelUploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    return api.upload<ExcelUploadResponse>('/portal-admin/doctors/upload-excel', formData);
  },

  /**
   * Resend temporary password to a doctor
   */
  resendPassword: async (doctorId: string): Promise<AdminMessageResponse> => {
    return api.post<AdminMessageResponse>(`/portal-admin/doctors/${doctorId}/resend-password`);
  },

  /**
   * Delete (suspend) a doctor
   */
  deleteDoctor: async (doctorId: string): Promise<AdminMessageResponse> => {
    return api.delete<AdminMessageResponse>(`/portal-admin/doctors/${doctorId}`);
  },

  /**
   * Upload catalog Excel (no User/email/DoctorProfile)
   */
  uploadCatalog: async (file: File): Promise<CatalogUploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    return api.upload<CatalogUploadResponse>('/portal-admin/doctors/upload-catalog', formData);
  },

  /**
   * Get list of specialties for dropdown
   */
  getSpecialties: async (): Promise<SpecialtyOption[]> => {
    return api.get<SpecialtyOption[]>('/specialties');
  },
};
