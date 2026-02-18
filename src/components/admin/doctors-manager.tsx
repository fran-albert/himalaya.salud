'use client';

import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDropzone } from 'react-dropzone';
import {
  Upload,
  Search,
  RefreshCw,
  Mail,
  Trash2,
  FileSpreadsheet,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Plus,
  UserPlus,
  BookOpen,
} from 'lucide-react';
import { toast } from 'sonner';

import { adminApi } from '@/lib/api/admin';
import type {
  AdminDoctor,
  ExcelUploadResponse,
  CatalogUploadResponse,
  SpecialtyOption,
} from '@/lib/api/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

// Zod schema for doctor creation
const createDoctorSchema = z.object({
  email: z.string().email('Email inválido'),
  firstName: z.string().min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
  lastName: z.string().min(2, 'Mínimo 2 caracteres').max(50, 'Máximo 50 caracteres'),
  licenseNumber: z.string().min(1, 'La matrícula es requerida'),
  specialtyId: z.string().uuid('Seleccione una especialidad'),
  phoneNumber: z.string().optional(),
  address: z.string().max(200).optional(),
  city: z.string().max(100).optional(),
  province: z.string().max(100).optional(),
});

type CreateDoctorFormData = z.infer<typeof createDoctorSchema>;

const statusLabels: Record<string, string> = {
  pending_email: 'Pendiente email',
  pending_verification: 'Pendiente verificación',
  verified: 'Verificado',
  rejected: 'Rechazado',
  suspended: 'Suspendido',
};

const statusVariants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  pending_email: 'secondary',
  pending_verification: 'outline',
  verified: 'default',
  rejected: 'destructive',
  suspended: 'destructive',
};

export function DoctorsManager() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [uploadResult, setUploadResult] = useState<ExcelUploadResponse | null>(null);
  const [catalogDialogOpen, setCatalogDialogOpen] = useState(false);
  const [catalogResult, setCatalogResult] = useState<CatalogUploadResponse | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  // React Query: Fetch doctors
  const { data: doctorsData, isLoading, refetch: fetchDoctors } = useQuery({
    queryKey: ['admin-doctors', page, pageSize, search],
    queryFn: () => adminApi.getDoctors({ page, pageSize, search }),
  });

  const doctors = doctorsData?.doctors ?? [];
  const total = doctorsData?.total ?? 0;
  const totalPages = doctorsData?.totalPages ?? 1;

  // React Query: Fetch specialties
  const { data: specialties = [] } = useQuery({
    queryKey: ['specialties'],
    queryFn: adminApi.getSpecialties,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  // React Hook Form
  const form = useForm<CreateDoctorFormData>({
    resolver: zodResolver(createDoctorSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      licenseNumber: '',
      specialtyId: '',
      phoneNumber: '',
      address: '',
      city: '',
      province: '',
    },
  });

  // Mutation: Create doctor
  const createDoctorMutation = useMutation({
    mutationFn: adminApi.createDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-doctors'] });
      setCreateDialogOpen(false);
      form.reset();
      toast.success('Médico creado exitosamente');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al crear médico');
    },
  });

  // Mutation: Upload Excel
  const uploadExcelMutation = useMutation({
    mutationFn: adminApi.uploadExcel,
    onSuccess: (result) => {
      setUploadResult(result);
      if (result.created > 0) {
        queryClient.invalidateQueries({ queryKey: ['admin-doctors'] });
        toast.success(`${result.created} médicos creados exitosamente`);
      }
      if (result.errors.length > 0) {
        toast.warning(`${result.errors.length} errores encontrados`);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al procesar archivo');
    },
  });

  // Mutation: Upload Catalog
  const uploadCatalogMutation = useMutation({
    mutationFn: adminApi.uploadCatalog,
    onSuccess: (result) => {
      setCatalogResult(result);
      if (result.created > 0 || result.updated > 0) {
        queryClient.invalidateQueries({ queryKey: ['admin-doctors'] });
        toast.success(`${result.created} creados, ${result.updated} actualizados`);
      }
      if (result.errors.length > 0) {
        toast.warning(`${result.errors.length} errores encontrados`);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al procesar catálogo');
    },
  });

  const onDropCatalog = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setCatalogResult(null);
    uploadCatalogMutation.mutate(acceptedFiles[0]);
  }, [uploadCatalogMutation]);

  const isCatalogUploading = uploadCatalogMutation.isPending;

  const catalogDropzone = useDropzone({
    onDrop: onDropCatalog,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
    maxFiles: 1,
    disabled: isCatalogUploading,
  });

  const handleSearch = () => {
    setSearch(searchInput);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setUploadResult(null);
    uploadExcelMutation.mutate(acceptedFiles[0]);
  }, [uploadExcelMutation]);

  const onSubmitCreateDoctor = (data: CreateDoctorFormData) => {
    createDoctorMutation.mutate(data);
  };

  const isUploading = uploadExcelMutation.isPending;
  const isCreating = createDoctorMutation.isPending;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
    },
    maxFiles: 1,
    disabled: isUploading,
  });

  // Mutation: Resend password
  const resendPasswordMutation = useMutation({
    mutationFn: adminApi.resendPassword,
    onSuccess: () => {
      toast.success('Contraseña temporal enviada');
      setActionLoading(null);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al enviar contraseña');
      setActionLoading(null);
    },
  });

  // Mutation: Delete doctor
  const deleteDoctorMutation = useMutation({
    mutationFn: adminApi.deleteDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-doctors'] });
      toast.success('Médico suspendido');
      setActionLoading(null);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al suspender médico');
      setActionLoading(null);
    },
  });

  const handleResendPassword = (doctorId: string) => {
    setActionLoading(doctorId);
    resendPasswordMutation.mutate(doctorId);
  };

  const handleDeleteDoctor = (doctorId: string) => {
    setActionLoading(doctorId);
    deleteDoctorMutation.mutate(doctorId);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-4">
      {/* Actions bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-1 gap-2">
          <Input
            placeholder="Buscar por nombre, email o matrícula..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="max-w-sm"
          />
          <Button variant="outline" onClick={handleSearch}>
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => fetchDoctors()} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
          {/* Create Doctor Dialog */}
          <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <UserPlus className="h-4 w-4 mr-2" />
                Agregar Médico
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Agregar nuevo médico</DialogTitle>
                <DialogDescription>
                  Complete los datos del médico. Se enviará un email con contraseña temporal.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={form.handleSubmit(onSubmitCreateDoctor)} className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      {...form.register('firstName')}
                      placeholder="Juan"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-xs text-destructive">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input
                      id="lastName"
                      {...form.register('lastName')}
                      placeholder="Pérez"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-xs text-destructive">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="doctor@ejemplo.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">Matrícula *</Label>
                    <Input
                      id="licenseNumber"
                      {...form.register('licenseNumber')}
                      placeholder="MP 12345"
                    />
                    {form.formState.errors.licenseNumber && (
                      <p className="text-xs text-destructive">{form.formState.errors.licenseNumber.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialtyId">Especialidad *</Label>
                    <Select
                      value={form.watch('specialtyId')}
                      onValueChange={(value) => form.setValue('specialtyId', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar..." />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty.id} value={specialty.id}>
                            {specialty.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.specialtyId && (
                      <p className="text-xs text-destructive">{form.formState.errors.specialtyId.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Teléfono</Label>
                  <Input
                    id="phoneNumber"
                    {...form.register('phoneNumber')}
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    {...form.register('address')}
                    placeholder="Av. Corrientes 1234"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      {...form.register('city')}
                      placeholder="Buenos Aires"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="province">Provincia</Label>
                    <Input
                      id="province"
                      {...form.register('province')}
                      placeholder="Buenos Aires"
                    />
                  </div>
                </div>

                <DialogFooter className="pt-4">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" disabled={isCreating}>
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={isCreating}>
                    {isCreating ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Creando...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Crear Médico
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* Upload Catalog Dialog */}
          <Dialog open={catalogDialogOpen} onOpenChange={setCatalogDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                Cargar Catálogo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Cargar catálogo de médicos</DialogTitle>
                <DialogDescription>
                  Importación liviana: solo crea el registro del médico en el catálogo.
                  No crea cuenta de usuario, no envía email, no crea perfil de portal.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div
                  {...catalogDropzone.getRootProps()}
                  className={`
                    border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                    transition-colors
                    ${catalogDropzone.isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
                    ${isCatalogUploading ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
                  `}
                >
                  <input {...catalogDropzone.getInputProps()} />
                  {isCatalogUploading ? (
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <p className="text-sm text-muted-foreground">Procesando catálogo...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <FileSpreadsheet className="h-8 w-8 text-muted-foreground" />
                      {catalogDropzone.isDragActive ? (
                        <p className="text-sm">Suelta el archivo aquí...</p>
                      ) : (
                        <>
                          <p className="text-sm">
                            Arrastra un archivo Excel o haz clic para seleccionar
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Formatos soportados: .xlsx, .xls
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {catalogResult && (
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm">Resultado de la carga</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Total de filas:</span>
                        <span className="font-medium">{catalogResult.totalRows}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Creados: {catalogResult.created}</span>
                      </div>
                      {catalogResult.updated > 0 && (
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Actualizados: {catalogResult.updated}</span>
                        </div>
                      )}
                      {catalogResult.errors.length > 0 && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-destructive">
                            <XCircle className="h-4 w-4" />
                            <span>Errores: {catalogResult.errors.length}</span>
                          </div>
                          <div className="max-h-32 overflow-y-auto text-xs space-y-1 mt-2">
                            {catalogResult.errors.map((err, i) => (
                              <div key={i} className="text-muted-foreground">
                                Fila {err.row}: {err.error}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-medium">Columnas requeridas:</p>
                  <p>nombre, apellido, matricula, especialidad_id</p>
                  <p className="font-medium mt-2">Columnas opcionales:</p>
                  <p>email, telefono, genero</p>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cerrar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Upload Excel Dialog */}
          <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Cargar Excel
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Cargar médicos desde Excel</DialogTitle>
                <DialogDescription>
                  Sube un archivo Excel (.xlsx) con la información de los médicos.
                  Se enviará un email con contraseña temporal a cada médico.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                {/* Dropzone */}
                <div
                  {...getRootProps()}
                  className={`
                    border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
                    transition-colors
                    ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
                    ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'}
                  `}
                >
                  <input {...getInputProps()} />
                  {isUploading ? (
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <p className="text-sm text-muted-foreground">Procesando archivo...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <FileSpreadsheet className="h-8 w-8 text-muted-foreground" />
                      {isDragActive ? (
                        <p className="text-sm">Suelta el archivo aquí...</p>
                      ) : (
                        <>
                          <p className="text-sm">
                            Arrastra un archivo Excel o haz clic para seleccionar
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Formatos soportados: .xlsx, .xls
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Upload result */}
                {uploadResult && (
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-sm">Resultado de la carga</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Total de filas:</span>
                        <span className="font-medium">{uploadResult.totalRows}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span>Creados: {uploadResult.created}</span>
                      </div>
                      {uploadResult.errors.length > 0 && (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-destructive">
                            <XCircle className="h-4 w-4" />
                            <span>Errores: {uploadResult.errors.length}</span>
                          </div>
                          <div className="max-h-32 overflow-y-auto text-xs space-y-1 mt-2">
                            {uploadResult.errors.map((err, i) => (
                              <div key={i} className="text-muted-foreground">
                                Fila {err.row}: {err.error}
                                {err.email && ` (${err.email})`}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Format info */}
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-medium">Columnas requeridas:</p>
                  <p>email, nombre, apellido, matricula, especialidad_id</p>
                  <p className="font-medium mt-2">Columnas opcionales:</p>
                  <p>telefono, direccion, ciudad, provincia</p>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cerrar</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Médico</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Matrícula</TableHead>
              <TableHead>Especialidad</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Creado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : doctors.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                  No se encontraron médicos
                </TableCell>
              </TableRow>
            ) : (
              doctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">
                    {doctor.firstName} {doctor.lastName}
                  </TableCell>
                  <TableCell>{doctor.email}</TableCell>
                  <TableCell>{doctor.licenseNumber}</TableCell>
                  <TableCell>{doctor.specialty || '-'}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[doctor.verificationStatus] || 'secondary'}>
                      {statusLabels[doctor.verificationStatus] || doctor.verificationStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(doctor.createdAt)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleResendPassword(doctor.id)}
                        disabled={actionLoading === doctor.id}
                        title="Reenviar contraseña"
                      >
                        {actionLoading === doctor.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Mail className="h-4 w-4" />
                        )}
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={actionLoading === doctor.id || doctor.verificationStatus === 'suspended'}
                            title="Suspender"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>¿Suspender médico?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Esta acción suspenderá la cuenta de {doctor.firstName} {doctor.lastName}.
                              El médico no podrá acceder al sistema.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteDoctor(doctor.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Suspender
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <p className="text-sm text-muted-foreground">
              Mostrando {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, total)} de {total}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
