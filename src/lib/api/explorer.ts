import { api } from './client';
import type {
  ProvinceItem,
  LocalityItem,
  InstitutionSummaryItem,
  ExplorerInstitutionDetail,
  ExplorerOfficeItem,
} from './types';

// Backend response wrappers
interface ProvincesResponse {
  provinces: ProvinceItem[];
}

interface LocalitiesResponse {
  province: string;
  localities: LocalityItem[];
}

interface InstitutionsByLocalityResponse {
  province: string;
  locality: string;
  institutions: InstitutionSummaryItem[];
  total: number;
}

export const explorerApi = {
  /** Get all provinces with institution counts */
  getProvinces: async (): Promise<ProvinceItem[]> => {
    const res = await api.get<ProvincesResponse>('/institutions/provinces');
    return res.provinces;
  },

  /** Get localities for a province with institution counts */
  getLocalities: async (province: string): Promise<LocalityItem[]> => {
    const res = await api.get<LocalitiesResponse>(
      `/institutions/provinces/${encodeURIComponent(province)}/localities`
    );
    return res.localities;
  },

  /** Get institutions in a specific province + locality */
  getInstitutionsByLocality: async (
    province: string,
    locality: string
  ): Promise<InstitutionSummaryItem[]> => {
    const res = await api.get<InstitutionsByLocalityResponse>(
      `/institutions/provinces/${encodeURIComponent(province)}/localities/${encodeURIComponent(locality)}`
    );
    return res.institutions;
  },

  /** Get full institution detail with associated doctors */
  getInstitutionDetail: async (id: string): Promise<ExplorerInstitutionDetail> => {
    return api.get<ExplorerInstitutionDetail>(`/institutions/${id}`);
  },

  /** Get all offices (admin endpoint) */
  getOffices: async (): Promise<ExplorerOfficeItem[]> => {
    return api.get<ExplorerOfficeItem[]>('/admin/offices');
  },

  /** Get offices filtered by institution */
  getOfficesByInstitution: async (institutionId: string): Promise<ExplorerOfficeItem[]> => {
    return api.get<ExplorerOfficeItem[]>(
      `/admin/offices?institutionId=${encodeURIComponent(institutionId)}`
    );
  },
};
