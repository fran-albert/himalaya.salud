import { api } from './client';
import type {
  DoctorOfficeResponse,
  DoctorOfficeListResponse,
  CreateInstitutionOfficeRequest,
  CreateIndependentOfficeRequest,
  UpdateOfficeRequest,
  InstitutionSearchResult,
} from './types';

const OFFICES_BASE = '/doctor-portal/offices';

export const officesApi = {
  listOffices: () =>
    api.get<DoctorOfficeListResponse>(OFFICES_BASE),

  createInstitutionOffice: (data: CreateInstitutionOfficeRequest) =>
    api.post<DoctorOfficeResponse>(`${OFFICES_BASE}/institution`, data),

  createIndependentOffice: (data: CreateIndependentOfficeRequest) =>
    api.post<DoctorOfficeResponse>(`${OFFICES_BASE}/independent`, data),

  updateOffice: (id: string, data: UpdateOfficeRequest) =>
    api.patch<DoctorOfficeResponse>(`${OFFICES_BASE}/${id}`, data),

  deleteOffice: (id: string) =>
    api.delete<{ success: boolean; message: string }>(`${OFFICES_BASE}/${id}`),

  searchInstitutions: (query: string) =>
    api.get<InstitutionSearchResult[]>(
      `/institutions?search=${encodeURIComponent(query)}&limit=20`,
    ),
};

export default officesApi;
