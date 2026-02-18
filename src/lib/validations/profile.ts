import { z } from 'zod';

// Helper: optional numeric field that handles NaN from empty inputs with valueAsNumber
const optionalNumber = z
  .number()
  .or(z.nan())
  .transform((v) => (Number.isNaN(v) ? undefined : v))
  .pipe(z.number().min(0).optional());

export const contactSchema = z.object({
  phoneNumber: z
    .string()
    .optional(),
  address: z
    .string()
    .max(200, 'La dirección es demasiado larga')
    .optional(),
  neighborhood: z
    .string()
    .max(100, 'El barrio es demasiado largo')
    .optional(),
  city: z
    .string()
    .max(100, 'La ciudad es demasiado larga')
    .optional(),
  province: z
    .string()
    .max(100, 'La provincia es demasiado larga')
    .optional(),
  postalCode: z
    .string()
    .max(20, 'El código postal es demasiado largo')
    .optional(),
});

export const professionalSchema = z.object({
  yearsExperience: z
    .number()
    .or(z.nan())
    .transform((v) => (Number.isNaN(v) ? undefined : v))
    .pipe(z.number().min(0, 'Los años de experiencia no pueden ser negativos').max(70, 'Los años de experiencia son demasiados').optional()),
  languages: z
    .array(z.string())
    .optional(),
  certifications: z
    .array(z.string())
    .optional(),
  tags: z
    .array(z.string())
    .optional(),
});

export const biographySchema = z.object({
  biography: z
    .string()
    .max(2000, 'La biografía es demasiado larga')
    .optional(),
});

export const insuranceItemSchema = z.object({
  insuranceId: z.string().min(1, 'El seguro es requerido'),
  plans: z.array(z.string()).optional(),
  providerNumber: z.string().optional(),
  consultationFee: optionalNumber,
  copayAmount: optionalNumber,
  notes: z.string().max(500).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ProfessionalFormData = z.infer<typeof professionalSchema>;
export type BiographyFormData = z.infer<typeof biographySchema>;
export type InsuranceItemFormData = z.infer<typeof insuranceItemSchema>;
