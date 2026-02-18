'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, type UseFormRegisterReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Building2,
  Plus,
  Trash2,
  Loader2,
  Save,
  Phone,
  MapPin,
  AlertCircle,
  Pencil,
  ChevronDown,
  Search,
  DollarSign,
  Clock,
  Info,
} from 'lucide-react';
import { toast } from 'sonner';

import { officesApi } from '@/lib/api/offices';
import { useIsVerified } from '@/lib/auth/auth-context';
import {
  createInstitutionOfficeSchema,
  createIndependentOfficeSchema,
  updateOfficeSchema,
  type CreateInstitutionOfficeFormData,
  type CreateIndependentOfficeFormData,
  type UpdateOfficeFormData,
} from '@/lib/validations/offices';
import type { DoctorOfficeResponse, InstitutionSearchResult, GeocodingStatus } from '@/lib/api/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';

const DAYS_OF_WEEK = [
  { value: 'monday', label: 'Lunes', short: 'Lun' },
  { value: 'tuesday', label: 'Martes', short: 'Mar' },
  { value: 'wednesday', label: 'Miércoles', short: 'Mié' },
  { value: 'thursday', label: 'Jueves', short: 'Jue' },
  { value: 'friday', label: 'Viernes', short: 'Vie' },
  { value: 'saturday', label: 'Sábado', short: 'Sáb' },
  { value: 'sunday', label: 'Domingo', short: 'Dom' },
];

const MAX_OFFICES = 10;

const GEOCODING_STATUS_CONFIG: Record<GeocodingStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  none: { label: 'Sin geocodificar', variant: 'secondary' },
  pending: { label: 'Pendiente', variant: 'outline' },
  success: { label: 'Ubicado', variant: 'default' },
  flagged: { label: 'Revisar', variant: 'outline' },
  failed: { label: 'Falló', variant: 'destructive' },
};

export default function OfficesPage() {
  const queryClient = useQueryClient();
  const isVerified = useIsVerified();
  const [createType, setCreateType] = useState<'institution' | 'independent' | null>(null);
  const [editingOffice, setEditingOffice] = useState<DoctorOfficeResponse | null>(null);
  const [deletingOffice, setDeletingOffice] = useState<DoctorOfficeResponse | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['doctor-offices'],
    queryFn: officesApi.listOffices,
  });

  const offices = data?.offices ?? [];

  if (!isVerified) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mis Consultorios</h1>
          <p className="text-muted-foreground">
            Gestiona tus lugares de atención
          </p>
        </div>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Cuenta no verificada</AlertTitle>
          <AlertDescription>
            Debes verificar tu cuenta antes de poder gestionar tus consultorios.
            Sube tus documentos desde la sección de Documentos para comenzar el proceso de verificación.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mis Consultorios</h1>
          <p className="text-muted-foreground">
            Gestiona tus lugares de atención ({offices.length}/{MAX_OFFICES})
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button disabled={offices.length >= MAX_OFFICES}>
              <Plus className="mr-2 h-4 w-4" />
              Agregar consultorio
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setCreateType('institution')}>
              <Building2 className="mr-2 h-4 w-4" />
              En institución
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCreateType('independent')}>
              <MapPin className="mr-2 h-4 w-4" />
              Independiente
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Mis lugares de atención
          </CardTitle>
          <CardDescription>
            {offices.length} consultorio{offices.length !== 1 ? 's' : ''} configurado{offices.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {offices.length === 0 ? (
            <div className="text-center py-8">
              <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No has agregado ningún consultorio todavía
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Haz clic en &quot;Agregar consultorio&quot; para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {offices.map((office) => (
                <OfficeCard
                  key={office.id}
                  office={office}
                  onEdit={() => setEditingOffice(office)}
                  onDelete={() => setDeletingOffice(office)}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create in institution dialog */}
      <CreateInstitutionOfficeDialog
        open={createType === 'institution'}
        onOpenChange={(open) => !open && setCreateType(null)}
      />

      {/* Create independent dialog */}
      <CreateIndependentOfficeDialog
        open={createType === 'independent'}
        onOpenChange={(open) => !open && setCreateType(null)}
      />

      {/* Edit dialog */}
      {editingOffice && (
        <EditOfficeDialog
          office={editingOffice}
          open={!!editingOffice}
          onOpenChange={(open) => !open && setEditingOffice(null)}
        />
      )}

      {/* Delete confirmation */}
      {deletingOffice && (
        <DeleteOfficeDialog
          office={deletingOffice}
          open={!!deletingOffice}
          onOpenChange={(open) => !open && setDeletingOffice(null)}
        />
      )}
    </div>
  );
}

// --- Office Card ---

function OfficeCard({
  office,
  onEdit,
  onDelete,
}: {
  office: DoctorOfficeResponse;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const daysLabel = office.scheduleDays
    ?.map((day) => {
      const found = DAYS_OF_WEEK.find((d) => d.value === day);
      return found?.short ?? day;
    })
    .join(', ');

  const showGeocodingBadge = !office.institution && office.geocodingStatus !== 'none';
  const geoConfig = GEOCODING_STATUS_CONFIG[office.geocodingStatus];

  return (
    <div className="flex items-start justify-between p-4 border rounded-lg">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center mt-1">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="font-medium">{office.officeName}</p>
            {office.institution && (
              <Badge variant="secondary">{office.institution.name}</Badge>
            )}
            {showGeocodingBadge && (
              <Badge variant={geoConfig.variant}>{geoConfig.label}</Badge>
            )}
          </div>
          {office.officeAddress && (
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {office.officeAddress}
              {office.officeCity && `, ${office.officeCity}`}
              {office.officeProvince && `, ${office.officeProvince}`}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {daysLabel && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {daysLabel}
              </span>
            )}
            {office.appointmentPhone && (
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {office.appointmentPhone}
              </span>
            )}
            {office.consultationFee != null && office.consultationFee > 0 && (
              <span className="flex items-center gap-1">
                <DollarSign className="h-3 w-3" />
                ${office.consultationFee}
              </span>
            )}
          </div>
          {office.notes && (
            <p className="text-sm text-muted-foreground mt-1">{office.notes}</p>
          )}
        </div>
      </div>
      <div className="flex gap-1">
        <Button variant="ghost" size="icon" onClick={onEdit} title="Editar">
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive"
          onClick={onDelete}
          title="Eliminar"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

// --- Shared: Days checkboxes ---

function DaysCheckboxes({
  selectedDays,
  onChange,
}: {
  selectedDays: string[];
  onChange: (days: string[]) => void;
}) {
  const toggle = (day: string) => {
    onChange(
      selectedDays.includes(day)
        ? selectedDays.filter((d) => d !== day)
        : [...selectedDays, day],
    );
  };

  return (
    <div className="space-y-2">
      <Label>Días de atención</Label>
      <div className="grid grid-cols-2 gap-2">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day.value} className="flex items-center space-x-2">
            <Checkbox
              id={`day-${day.value}`}
              checked={selectedDays.includes(day.value)}
              onCheckedChange={() => toggle(day.value)}
            />
            <label
              htmlFor={`day-${day.value}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {day.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Shared: Common form fields ---

function CommonOfficeFields({
  fields,
  errors,
}: {
  fields: {
    appointmentPhone: UseFormRegisterReturn;
    consultationFee: UseFormRegisterReturn;
    notes: UseFormRegisterReturn;
  };
  errors: Partial<Record<string, { message?: string }>>;
}) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="appointmentPhone">Teléfono para turnos</Label>
        <Input
          id="appointmentPhone"
          placeholder="+54 11 1234-5678"
          {...fields.appointmentPhone}
        />
        {errors.appointmentPhone && (
          <p className="text-sm text-destructive">{errors.appointmentPhone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="consultationFee">Valor consulta ($)</Label>
        <Input
          id="consultationFee"
          type="number"
          min={0}
          placeholder="0"
          {...fields.consultationFee}
        />
        {errors.consultationFee && (
          <p className="text-sm text-destructive">{errors.consultationFee.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notas (opcional)</Label>
        <Textarea
          id="notes"
          placeholder="Información adicional sobre el consultorio"
          {...fields.notes}
        />
        {errors.notes && (
          <p className="text-sm text-destructive">{errors.notes.message}</p>
        )}
      </div>
    </>
  );
}

// --- Institution Search Combobox ---

function InstitutionCombobox({
  value,
  onSelect,
}: {
  value: InstitutionSearchResult | null;
  onSelect: (institution: InstitutionSearchResult | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: institutions = [], isLoading } = useQuery({
    queryKey: ['institutions-search', searchQuery],
    queryFn: () => officesApi.searchInstitutions(searchQuery),
    enabled: searchQuery.length >= 2,
    staleTime: 30_000,
  });

  return (
    <div className="space-y-2">
      <Label>Institución</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between font-normal"
          >
            {value ? value.name : 'Buscar institución...'}
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Escriba para buscar..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              {searchQuery.length < 2 ? (
                <CommandEmpty>Escriba al menos 2 caracteres</CommandEmpty>
              ) : isLoading ? (
                <CommandEmpty>
                  <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                </CommandEmpty>
              ) : institutions.length === 0 ? (
                <CommandEmpty>No se encontraron instituciones</CommandEmpty>
              ) : (
                <CommandGroup>
                  {institutions.map((inst) => (
                    <CommandItem
                      key={inst.id}
                      value={inst.id}
                      onSelect={() => {
                        onSelect(inst);
                        setOpen(false);
                      }}
                    >
                      <div>
                        <p className="font-medium">{inst.name}</p>
                        {inst.address && (
                          <p className="text-xs text-muted-foreground">
                            {inst.address}
                            {inst.city && `, ${inst.city}`}
                            {inst.province && ` - ${inst.province}`}
                          </p>
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// --- Create Institution Office Dialog ---

function CreateInstitutionOfficeDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const [selectedInstitution, setSelectedInstitution] = useState<InstitutionSearchResult | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const form = useForm<CreateInstitutionOfficeFormData>({
    resolver: zodResolver(createInstitutionOfficeSchema),
    defaultValues: {
      institutionId: '',
      name: '',
      appointmentPhone: '',
      consultationFee: undefined,
      notes: '',
    },
  });

  useEffect(() => {
    if (selectedInstitution) {
      form.setValue('institutionId', selectedInstitution.id);
    }
  }, [selectedInstitution, form]);

  const mutation = useMutation({
    mutationFn: officesApi.createInstitutionOffice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctor-offices'] });
      toast.success('Consultorio agregado correctamente');
      resetAndClose();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al crear consultorio');
    },
  });

  const resetAndClose = () => {
    form.reset();
    setSelectedInstitution(null);
    setSelectedDays([]);
    onOpenChange(false);
  };

  const onSubmit = (data: CreateInstitutionOfficeFormData) => {
    mutation.mutate({
      ...data,
      scheduleDays: selectedDays.length > 0 ? selectedDays : undefined,
      consultationFee: data.consultationFee ?? undefined,
    });
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && resetAndClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar consultorio en institución</DialogTitle>
          <DialogDescription>
            Selecciona una institución existente y configura tus horarios
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InstitutionCombobox
            value={selectedInstitution}
            onSelect={setSelectedInstitution}
          />
          {form.formState.errors.institutionId && (
            <p className="text-sm text-destructive">
              {form.formState.errors.institutionId.message}
            </p>
          )}

          {selectedInstitution && (
            <div className="rounded-md bg-muted p-3 text-sm">
              <p className="font-medium">{selectedInstitution.name}</p>
              {selectedInstitution.address && (
                <p className="text-muted-foreground">
                  {selectedInstitution.address}
                  {selectedInstitution.city && `, ${selectedInstitution.city}`}
                </p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Nombre del consultorio (opcional)</Label>
            <Input
              id="name"
              placeholder={`Ej: Consultorio 3B`}
              {...form.register('name')}
            />
          </div>

          <DaysCheckboxes selectedDays={selectedDays} onChange={setSelectedDays} />

          <CommonOfficeFields
            fields={{
              appointmentPhone: form.register('appointmentPhone'),
              consultationFee: form.register('consultationFee', { valueAsNumber: true }),
              notes: form.register('notes'),
            }}
            errors={form.formState.errors}
          />

          <DialogFooter>
            <Button type="button" variant="outline" onClick={resetAndClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Guardar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// --- Create Independent Office Dialog ---

function CreateIndependentOfficeDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const form = useForm<CreateIndependentOfficeFormData>({
    resolver: zodResolver(createIndependentOfficeSchema),
    defaultValues: {
      name: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      appointmentPhone: '',
      consultationFee: undefined,
      notes: '',
    },
  });

  const mutation = useMutation({
    mutationFn: officesApi.createIndependentOffice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctor-offices'] });
      toast.success('Consultorio agregado correctamente');
      resetAndClose();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al crear consultorio');
    },
  });

  const resetAndClose = () => {
    form.reset();
    setSelectedDays([]);
    onOpenChange(false);
  };

  const onSubmit = (data: CreateIndependentOfficeFormData) => {
    mutation.mutate({
      ...data,
      scheduleDays: selectedDays.length > 0 ? selectedDays : undefined,
      postalCode: data.postalCode || undefined,
      consultationFee: data.consultationFee ?? undefined,
    });
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && resetAndClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar consultorio independiente</DialogTitle>
          <DialogDescription>
            Ingresa la dirección de tu consultorio particular
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ind-name">Nombre *</Label>
            <Input
              id="ind-name"
              placeholder="Ej: Consultorio Dr. Pérez"
              {...form.register('name')}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ind-address">Dirección *</Label>
            <Input
              id="ind-address"
              placeholder="Av. Corrientes 1234, Piso 3, Of. B"
              {...form.register('address')}
            />
            {form.formState.errors.address && (
              <p className="text-sm text-destructive">{form.formState.errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ind-city">Ciudad *</Label>
              <Input
                id="ind-city"
                placeholder="Buenos Aires"
                {...form.register('city')}
              />
              {form.formState.errors.city && (
                <p className="text-sm text-destructive">{form.formState.errors.city.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="ind-province">Provincia *</Label>
              <Input
                id="ind-province"
                placeholder="Buenos Aires"
                {...form.register('province')}
              />
              {form.formState.errors.province && (
                <p className="text-sm text-destructive">{form.formState.errors.province.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ind-postalCode">Código postal</Label>
            <Input
              id="ind-postalCode"
              placeholder="C1043"
              {...form.register('postalCode')}
            />
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              La ubicación será geocodificada automáticamente a partir de la dirección ingresada.
            </AlertDescription>
          </Alert>

          <DaysCheckboxes selectedDays={selectedDays} onChange={setSelectedDays} />

          <CommonOfficeFields
            fields={{
              appointmentPhone: form.register('appointmentPhone'),
              consultationFee: form.register('consultationFee', { valueAsNumber: true }),
              notes: form.register('notes'),
            }}
            errors={form.formState.errors}
          />

          <DialogFooter>
            <Button type="button" variant="outline" onClick={resetAndClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Guardar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// --- Edit Office Dialog ---

function EditOfficeDialog({
  office,
  open,
  onOpenChange,
}: {
  office: DoctorOfficeResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const queryClient = useQueryClient();
  const [selectedDays, setSelectedDays] = useState<string[]>(office.scheduleDays ?? []);

  const form = useForm<UpdateOfficeFormData>({
    resolver: zodResolver(updateOfficeSchema),
    defaultValues: {
      appointmentPhone: office.appointmentPhone ?? '',
      consultationFee: office.consultationFee ?? undefined,
      notes: office.notes ?? '',
    },
  });

  const mutation = useMutation({
    mutationFn: (data: UpdateOfficeFormData) =>
      officesApi.updateOffice(office.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctor-offices'] });
      toast.success('Consultorio actualizado');
      onOpenChange(false);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al actualizar');
    },
  });

  const onSubmit = (data: UpdateOfficeFormData) => {
    mutation.mutate({
      ...data,
      scheduleDays: selectedDays,
      consultationFee: data.consultationFee ?? undefined,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar consultorio</DialogTitle>
          <DialogDescription>
            {office.officeName}
            {office.institution && ` - ${office.institution.name}`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <DaysCheckboxes selectedDays={selectedDays} onChange={setSelectedDays} />

          <CommonOfficeFields
            fields={{
              appointmentPhone: form.register('appointmentPhone'),
              consultationFee: form.register('consultationFee', { valueAsNumber: true }),
              notes: form.register('notes'),
            }}
            errors={form.formState.errors}
          />

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Guardar cambios
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// --- Delete Confirmation ---

function DeleteOfficeDialog({
  office,
  open,
  onOpenChange,
}: {
  office: DoctorOfficeResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => officesApi.deleteOffice(office.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctor-offices'] });
      toast.success('Consultorio eliminado');
      onOpenChange(false);
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al eliminar');
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Eliminar consultorio?</AlertDialogTitle>
          <AlertDialogDescription>
            ¿Estás seguro de que deseas eliminar {office.officeName}
            {office.institution && ` (${office.institution.name})`} de tu lista de consultorios?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => mutation.mutate()}
            className="bg-destructive hover:bg-destructive/90"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Eliminar'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
