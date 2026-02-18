'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

import { useAuth } from '@/lib/auth';
import { registerSchema, type RegisterFormData } from '@/lib/validations/auth';
import { api } from '@/lib/api/client';
import type { SpecialtyOption } from '@/lib/api/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function RegisterForm() {
  const router = useRouter();
  const { register: registerUser, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [specialties, setSpecialties] = useState<SpecialtyOption[]>([]);

  useEffect(() => {
    api.get<SpecialtyOption[]>('/specialties', { skipAuth: true })
      .then(setSpecialties)
      .catch(() => {});
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      licenseNumber: '',
      specialtyId: '',
      phoneNumber: '',
      acceptTerms: false,
    },
  });

  const acceptTerms = watch('acceptTerms');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        licenseNumber: data.licenseNumber,
        specialtyId: data.specialtyId,
        phoneNumber: data.phoneNumber,
      });
      setIsSuccess(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al registrarse';
      toast.error(message);
    }
  };

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">¡Registro exitoso!</h2>
              <p className="text-muted-foreground">
                Te hemos enviado un email de verificación. Por favor revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push('/portal/login')}
              className="mt-4"
            >
              Ir a iniciar sesión
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Crear Cuenta</CardTitle>
        <CardDescription>
          Regístrate para gestionar tu perfil profesional
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Name fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                placeholder="Juan"
                disabled={isLoading}
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-sm text-destructive">{errors.firstName.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                placeholder="Pérez"
                disabled={isLoading}
                {...register('lastName')}
              />
              {errors.lastName && (
                <p className="text-sm text-destructive">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          {/* License and Specialty */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">Matrícula</Label>
              <Input
                id="licenseNumber"
                placeholder="MN 12345"
                disabled={isLoading}
                {...register('licenseNumber')}
              />
              {errors.licenseNumber && (
                <p className="text-sm text-destructive">{errors.licenseNumber.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialtyId">Especialidad</Label>
              <Select
                disabled={isLoading}
                onValueChange={(value) => setValue('specialtyId', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.specialtyId && (
                <p className="text-sm text-destructive">{errors.specialtyId.message}</p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Teléfono (opcional)</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+54 11 1234 5678"
              disabled={isLoading}
              {...register('phoneNumber')}
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                autoComplete="new-password"
                disabled={isLoading}
                {...register('password')}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                autoComplete="new-password"
                disabled={isLoading}
                {...register('confirmPassword')}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="acceptTerms"
              checked={acceptTerms}
              onCheckedChange={(checked) => setValue('acceptTerms', checked as boolean)}
              disabled={isLoading}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="acceptTerms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acepto los{' '}
                <Link href="/terminos" className="text-primary hover:underline" target="_blank">
                  términos y condiciones
                </Link>{' '}
                y la{' '}
                <Link href="/privacidad" className="text-primary hover:underline" target="_blank">
                  política de privacidad
                </Link>
              </label>
              {errors.acceptTerms && (
                <p className="text-sm text-destructive">{errors.acceptTerms.message}</p>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registrando...
              </>
            ) : (
              'Crear Cuenta'
            )}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{' '}
            <Link
              href="/portal/login"
              className="text-primary hover:underline font-medium"
            >
              Inicia sesión
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
