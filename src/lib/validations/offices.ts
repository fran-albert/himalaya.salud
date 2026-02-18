import { z } from 'zod';

// Helper: optional numeric field that handles NaN from empty inputs with valueAsNumber
const optionalFee = z
  .number()
  .or(z.nan())
  .transform((v) => (Number.isNaN(v) ? undefined : v))
  .pipe(z.number().min(0, 'El valor no puede ser negativo').optional());

export const createInstitutionOfficeSchema = z.object({
  institutionId: z.string().uuid('Seleccione una institución'),
  name: z
    .string()
    .max(200, 'El nombre es demasiado largo')
    .optional(),
  scheduleDays: z.array(z.string()).optional(),
  appointmentPhone: z.string().max(50).optional(),
  consultationFee: optionalFee,
  notes: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

export const createIndependentOfficeSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre es requerido')
    .max(200, 'El nombre es demasiado largo'),
  address: z
    .string()
    .min(1, 'La dirección es requerida')
    .max(300, 'La dirección es demasiado larga'),
  city: z
    .string()
    .min(1, 'La ciudad es requerida')
    .max(100, 'La ciudad es demasiado larga'),
  province: z
    .string()
    .min(1, 'La provincia es requerida')
    .max(100, 'La provincia es demasiado larga'),
  postalCode: z
    .string()
    .max(20, 'El código postal es demasiado largo')
    .optional(),
  scheduleDays: z.array(z.string()).optional(),
  appointmentPhone: z.string().max(50).optional(),
  consultationFee: optionalFee,
  notes: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

export const updateOfficeSchema = z.object({
  scheduleDays: z.array(z.string()).optional(),
  appointmentPhone: z.string().max(50).optional(),
  consultationFee: optionalFee,
  notes: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

export type CreateInstitutionOfficeFormData = z.infer<typeof createInstitutionOfficeSchema>;
export type CreateIndependentOfficeFormData = z.infer<typeof createIndependentOfficeSchema>;
export type UpdateOfficeFormData = z.infer<typeof updateOfficeSchema>;
