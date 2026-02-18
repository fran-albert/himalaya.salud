'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, ArrowLeft, Mail } from 'lucide-react';
import { toast } from 'sonner';

import { authApi } from '@/lib/api/auth';
import { forgotPasswordSchema, type ForgotPasswordFormData } from '@/lib/validations/auth';
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

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      await authApi.forgotPassword(data);
      setIsSuccess(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error al enviar el email';
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-blue-100 p-3">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Revisa tu email</h2>
              <p className="text-muted-foreground">
                Si existe una cuenta con ese email, te hemos enviado instrucciones para restablecer tu contraseña.
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4">
              <Link href="/portal/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al login
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">¿Olvidaste tu contraseña?</CardTitle>
        <CardDescription>
          Ingresa tu email y te enviaremos un enlace para restablecerla
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
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
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar instrucciones'
            )}
          </Button>

          <Button variant="ghost" asChild className="w-full">
            <Link href="/portal/login">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al login
            </Link>
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
