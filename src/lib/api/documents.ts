import { api } from './client';
import type {
  DoctorDocument,
  DocumentListResponse,
  DocumentType,
} from './types';

const DOCS_BASE = '/doctor-portal/documents';

export const documentsApi = {
  /**
   * List all documents for current doctor
   */
  list: () =>
    api.get<DocumentListResponse>(DOCS_BASE),

  /**
   * Upload a new document
   */
  upload: async (file: File, documentType: DocumentType): Promise<DoctorDocument> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('documentType', documentType);

    return api.upload<DoctorDocument>(`${DOCS_BASE}/upload`, formData);
  },

  /**
   * Delete a pending document
   */
  delete: (documentId: string) =>
    api.delete<{ success: boolean; message: string }>(`${DOCS_BASE}/${documentId}`),

  /**
   * Get signed URL for viewing a document
   */
  getViewUrl: (documentId: string) =>
    api.get<{ url: string }>(`${DOCS_BASE}/${documentId}/url`),
};

export default documentsApi;
