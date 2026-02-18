// API Response Types for Doctor Portal

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
  statusCode?: number;
}

// Auth Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: DoctorUserInfo;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
  specialtyId: string;
  phoneNumber?: string;
}

export interface RegisterResponse {
  message: string;
  userId: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface VerifyEmailRequest {
  token: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

// User Types
export type VerificationStatus =
  | 'pending_email'
  | 'pending_verification'
  | 'verified'
  | 'rejected'
  | 'suspended';

export type UserRole = 'doctor' | 'staff' | 'manager' | 'admin';

export interface DoctorUserInfo {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  verificationStatus: VerificationStatus;
  emailVerified: boolean;
  role: UserRole;
  mustChangePassword?: boolean;
}

// Profile Types
export interface Specialty {
  id: string;
  name: string;
  slug: string;
}

export interface InsuranceInfo {
  id: string;
  insuranceId: string;
  insuranceName: string;
  plans?: string[];
  providerNumber?: string;
  consultationFee?: number;
  copayAmount?: number;
  notes?: string;
}

export interface OfficeInfo {
  id: string;
  officeId: string;
  officeName: string;
  institutionName?: string;
  scheduleDays?: string[];
  scheduleHours?: Record<string, { start: string; end: string }>;
  appointmentPhone?: string;
  consultationFee?: number;
  notes?: string;
}

export interface DoctorProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  licenseNumber?: string;
  phoneNumber?: string;
  biography?: string;
  yearsExperience?: number;
  languages: string[];
  certifications: string[];
  tags: string[];
  address?: string;
  neighborhood?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  profileVisibility: boolean;
  specialty: Specialty | null;
  insurances: InsuranceInfo[];
  offices: OfficeInfo[];
  verificationStatus: VerificationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ProfileStatus {
  verificationStatus: VerificationStatus;
  emailVerified: boolean;
  rejectionReason?: string;
  verifiedAt?: string;
  documentsCount: number;
  pendingDocumentsCount: number;
  profileCompleteness: number;
}

export interface UpdateContactRequest {
  phoneNumber?: string;
  address?: string;
  neighborhood?: string;
  city?: string;
  province?: string;
  postalCode?: string;
}

export interface UpdateProfessionalRequest {
  yearsExperience?: number;
  languages?: string[];
  certifications?: string[];
  tags?: string[];
}

export interface UpdateBiographyRequest {
  biography: string;
}

export interface UpdateInsurancesRequest {
  insurances: Array<{
    insuranceId: string;
    plans?: string[];
    providerNumber?: string;
    consultationFee?: number;
    copayAmount?: number;
    notes?: string;
  }>;
}

// Office CRUD Types (Doctor Portal)
export interface OfficeLocationDto {
  lat: number;
  lng: number;
}

export interface OfficeInstitutionSummary {
  id: string;
  name: string;
  address?: string;
  city?: string;
  province?: string;
}

export type GeocodingStatus = 'none' | 'pending' | 'success' | 'flagged' | 'failed';

export interface DoctorOfficeResponse {
  id: string;
  officeId: string;
  officeName: string;
  officeAddress?: string;
  officeCity?: string;
  officeProvince?: string;
  location?: OfficeLocationDto;
  institution?: OfficeInstitutionSummary;
  scheduleDays?: string[];
  scheduleHours?: Record<string, { start: string; end: string }>;
  appointmentPhone?: string;
  consultationFee?: number;
  notes?: string;
  geocodingStatus: GeocodingStatus;
  active: boolean;
  createdAt: string;
}

export interface DoctorOfficeListResponse {
  offices: DoctorOfficeResponse[];
  total: number;
}

export interface CreateInstitutionOfficeRequest {
  institutionId: string;
  name?: string;
  scheduleDays?: string[];
  scheduleHours?: Record<string, { start: string; end: string }>;
  appointmentPhone?: string;
  consultationFee?: number;
  notes?: string;
}

export interface CreateIndependentOfficeRequest {
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode?: string;
  scheduleDays?: string[];
  scheduleHours?: Record<string, { start: string; end: string }>;
  appointmentPhone?: string;
  consultationFee?: number;
  notes?: string;
}

export interface UpdateOfficeRequest {
  scheduleDays?: string[];
  scheduleHours?: Record<string, { start: string; end: string }>;
  appointmentPhone?: string;
  consultationFee?: number;
  notes?: string;
}

export interface InstitutionSearchResult {
  id: string;
  name: string;
  address?: string;
  city?: string;
  province?: string;
}

// Document Types
export type DocumentType =
  | 'license_photo'
  | 'certificate'
  | 'diploma'
  | 'id_document';

export type DocumentStatus = 'pending' | 'approved' | 'rejected';

export interface DoctorDocument {
  id: string;
  documentType: DocumentType;
  fileName: string;
  status: DocumentStatus;
  reviewNotes?: string;
  reviewedAt?: string;
  createdAt: string;
  url: string;
}

export interface DocumentListResponse {
  documents: DoctorDocument[];
  total: number;
}

// Catalog Types (for dropdowns)
export interface SpecialtyOption {
  id: string;
  name: string;
  slug: string;
}

export interface InsuranceOption {
  id: string;
  name: string;
  shortName: string;
}

// Catalog Upload (Admin)
export interface CatalogUploadResponse {
  success: boolean;
  totalRows: number;
  created: number;
  updated: number;
  errors: Array<{ row: number; error: string }>;
}

// Admin Types
export interface AdminDoctor {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
  specialty?: string;
  verificationStatus: VerificationStatus;
  role: UserRole;
  emailVerified: boolean;
  phoneNumber?: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface AdminDoctorListResponse {
  doctors: AdminDoctor[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface CreateDoctorRequest {
  email: string;
  firstName: string;
  lastName: string;
  licenseNumber: string;
  specialtyId: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  province?: string;
}

export interface ExcelUploadResponse {
  success: boolean;
  totalRows: number;
  created: number;
  errors: Array<{
    row: number;
    email?: string;
    error: string;
  }>;
}

export interface AdminMessageResponse {
  success: boolean;
  message: string;
}

// Explorer Types (Admin Data Explorer)
export interface ProvinceItem {
  name: string;
  institutionCount: number;
}

export interface LocalityItem {
  name: string;
  institutionCount: number;
}

export interface InstitutionSummaryItem {
  id: string;
  name: string;
  address?: string;
}

export interface ExplorerInstitutionDetail {
  id: string;
  name: string;
  address?: string;
  city?: string;
  province?: string;
  phoneNumber?: string;
  refesCode?: string;
  typologyCode?: string;
  typologyName?: string;
  categoryName?: string;
  financingType?: string;
  geoStatus?: string;
  location?: { lng: number; lat: number };
  doctorCount?: number;
  specialties?: string[];
  doctors?: ExplorerInstitutionDoctor[];
}

export interface ExplorerInstitutionDoctor {
  id: string;
  firstName: string;
  lastName: string;
  licenseNumber?: string;
  phoneNumber?: string;
  email?: string;
  specialty?: { id: string; name: string; slug: string };
}

export interface ExplorerOfficeItem {
  id: string;
  institutionId?: string;
  institution?: { id: string; name: string; code?: string };
  name: string;
  address?: string;
  city?: string;
  province?: string;
  location?: { lng: number; lat: number };
  geocodingStatus?: string;
  active: boolean;
  createdAt: string;
}
