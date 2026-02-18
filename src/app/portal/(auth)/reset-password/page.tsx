'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';

import { authApi } from '@/lib/api/auth';
import { resetPasswordSchema, type ResetPasswordFormData } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) {
      toast.error('Token no válido');
      return;
    }

    setIsLoading(true);
    try {
      await authApi.resetPassword({
        token,
        newPassword: data.password,
      });
      setIsSuccess(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al restablecer la contraseña';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-red-100 p-3">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Enlace inválido</h2>
              <p className="text-muted-foreground">
                El enlace para restablecer la contraseña no es válido o ha expirado.
              </p>
            </div>
            <Button asChild className="mt-4">
              <Link href="/portal/forgot-password">Solicitar nuevo enlace</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Contraseña actualizada</h2>
              <p className="text-muted-foreground">
                Tu contraseña ha sido restablecida exitosamente.
              </p>
            </div>
            <Button onClick={() => router.push('/portal/login')} className="mt-4">
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
        <CardTitle className="text-2xl font-bold">Nueva contraseña</CardTitle>
        <CardDescription>
          Ingresa tu nueva contraseña
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Nueva contraseña</Label>
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
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
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Guardando...
              </>
            ) : (
              'Restablecer contraseña'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

function ResetPasswordLoading() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Nueva contraseña</CardTitle>
        <CardDescription>Cargando...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordLoading />}>
      <ResetPasswordContent />
    </Suspense>
  );
}
