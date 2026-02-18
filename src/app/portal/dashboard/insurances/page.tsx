'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Shield,
  Plus,
  Trash2,
  Loader2,
  Save,
  X,
  AlertCircle,
} from 'lucide-react';
import { toast } from 'sonner';

import { profileApi } from '@/lib/api/profile';
import { api } from '@/lib/api/client';
import { useIsVerified } from '@/lib/auth';
import { insuranceItemSchema, type InsuranceItemFormData } from '@/lib/validations/profile';
import type { InsuranceOption, InsuranceInfo } from '@/lib/api/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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

export default function InsurancesPage() {
  const queryClient = useQueryClient();
  const isVerified = useIsVerified();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: profileApi.getProfile,
  });

  const { data: insuranceOptions, isLoading: optionsLoading } = useQuery({
    queryKey: ['insurance-options'],
    queryFn: () => api.get<InsuranceOption[]>('/catalogs/insurances'),
  });

  const form = useForm<InsuranceItemFormData>({
    resolver: zodResolver(insuranceItemSchema),
    defaultValues: {
      insuranceId: '',
      providerNumber: '',
      consultationFee: undefined,
      copayAmount: undefined,
      notes: '',
    },
  });

  const updateMutation = useMutation({
    mutationFn: profileApi.updateInsurances,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      toast.success('Seguros actualizados');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Error al actualizar');
    },
  });

  const handleAddInsurance = (data: InsuranceItemFormData) => {
    const currentInsurances = profile?.insurances || [];

    // Check if already exists
    if (currentInsurances.some((ins) => ins.insuranceId === data.insuranceId)) {
      toast.error('Ya tienes este seguro agregado');
      return;
    }

    const newInsurances = [
      ...currentInsurances.map((ins) => ({
        insuranceId: ins.insuranceId,
        plans: ins.plans,
        providerNumber: ins.providerNumber,
        consultationFee: ins.consultationFee,
        copayAmount: ins.copayAmount,
        notes: ins.notes,
      })),
      {
        insuranceId: data.insuranceId,
        providerNumber: data.providerNumber,
        consultationFee: data.consultationFee,
        copayAmount: data.copayAmount,
        notes: data.notes,
      },
    ];

    updateMutation.mutate({ insurances: newInsurances });
    setIsAddDialogOpen(false);
    form.reset();
  };

  const handleRemoveInsurance = (insuranceId: string) => {
    const currentInsurances = profile?.insurances || [];
    const newInsurances = currentInsurances
      .filter((ins) => ins.insuranceId !== insuranceId)
      .map((ins) => ({
        insuranceId: ins.insuranceId,
        plans: ins.plans,
        providerNumber: ins.providerNumber,
        consultationFee: ins.consultationFee,
        copayAmount: ins.copayAmount,
        notes: ins.notes,
      }));

    updateMutation.mutate({ insurances: newInsurances });
  };

  const isLoading = profileLoading || optionsLoading;
  const insurances = profile?.insurances || [];
  const availableInsurances = insuranceOptions?.filter(
    (opt) => !insurances.some((ins) => ins.insuranceId === opt.id)
  ) || [];

  if (!isVerified) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Mis Seguros</h1>
          <p className="text-muted-foreground">
            Gestiona los seguros médicos que aceptas
          </p>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Cuenta no verificada</AlertTitle>
          <AlertDescription>
            Debes verificar tu cuenta antes de poder gestionar los seguros que aceptas.
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
          <h1 className="text-2xl font-bold tracking-tight">Mis Seguros</h1>
          <p className="text-muted-foreground">
            Gestiona los seguros médicos que aceptas
          </p>
        </div>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button disabled={availableInsurances.length === 0}>
              <Plus className="mr-2 h-4 w-4" />
              Agregar seguro
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar seguro</DialogTitle>
              <DialogDescription>
                Selecciona un seguro médico y completa la información
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(handleAddInsurance)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="insuranceId">Seguro médico</Label>
                <Select
                  value={form.watch('insuranceId')}
                  onValueChange={(v) => form.setValue('insuranceId', v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar seguro" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableInsurances.map((opt) => (
                      <SelectItem key={opt.id} value={opt.id}>
                        {opt.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.insuranceId && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.insuranceId.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="providerNumber">Número de prestador (opcional)</Label>
                <Input
                  id="providerNumber"
                  placeholder="Ej: 12345"
                  {...form.register('providerNumber')}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="consultationFee">Valor consulta ($)</Label>
                  <Input
                    id="consultationFee"
                    type="number"
                    min={0}
                    placeholder="0"
                    {...form.register('consultationFee', { valueAsNumber: true })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="copayAmount">Copago ($)</Label>
                  <Input
                    id="copayAmount"
                    type="number"
                    min={0}
                    placeholder="0"
                    {...form.register('copayAmount', { valueAsNumber: true })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notas (opcional)</Label>
                <Input
                  id="notes"
                  placeholder="Información adicional"
                  {...form.register('notes')}
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddDialogOpen(false);
                    form.reset();
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={updateMutation.isPending}>
                  {updateMutation.isPending ? (
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
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Seguros aceptados
          </CardTitle>
          <CardDescription>
            {insurances.length} seguro{insurances.length !== 1 ? 's' : ''} configurado{insurances.length !== 1 ? 's' : ''}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {insurances.length === 0 ? (
            <div className="text-center py-8">
              <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                No has agregado ningún seguro todavía
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Haz clic en &quot;Agregar seguro&quot; para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {insurances.map((insurance) => (
                <InsuranceCard
                  key={insurance.id}
                  insurance={insurance}
                  onRemove={() => handleRemoveInsurance(insurance.insuranceId)}
                  isRemoving={updateMutation.isPending}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function InsuranceCard({
  insurance,
  onRemove,
  isRemoving,
}: {
  insurance: InsuranceInfo;
  onRemove: () => void;
  isRemoving: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
          <Shield className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">{insurance.insuranceName}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {insurance.providerNumber && (
              <span>Prestador: {insurance.providerNumber}</span>
            )}
            {insurance.consultationFee && (
              <span>Consulta: ${insurance.consultationFee}</span>
            )}
            {insurance.copayAmount !== undefined && insurance.copayAmount !== null && (
              <span>Copago: ${insurance.copayAmount}</span>
            )}
          </div>
          {insurance.notes && (
            <p className="text-sm text-muted-foreground mt-1">{insurance.notes}</p>
          )}
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de que deseas eliminar {insurance.insuranceName} de tu lista de seguros aceptados?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={onRemove}
              className="bg-destructive hover:bg-destructive/90"
            >
              {isRemoving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Eliminar'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
