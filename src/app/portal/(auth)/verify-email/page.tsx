'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

import { authApi } from '@/lib/api/auth';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Status = 'loading' | 'success' | 'error';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState<Status>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus('error');
        setMessage('Token de verificación no proporcionado');
        return;
      }

      try {
        const response = await authApi.verifyEmail({ token });
        setStatus('success');
        setMessage(response.message || 'Email verificado exitosamente');
      } catch (error) {
        setStatus('error');
        setMessage(
          error instanceof Error
            ? error.message
            : 'Error al verificar el email'
        );
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Verificación de Email</CardTitle>
        <CardDescription>
          {status === 'loading' && 'Verificando tu email...'}
          {status === 'success' && '¡Tu email ha sido verificado!'}
          {status === 'error' && 'No pudimos verificar tu email'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center text-center space-y-4">
          {status === 'loading' && (
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          )}

          {status === 'success' && (
            <>
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-muted-foreground">{message}</p>
              <p className="text-sm text-muted-foreground">
                Ahora puedes iniciar sesión y subir tus documentos de verificación.
              </p>
              <Button onClick={() => router.push('/portal/login')} className="mt-4">
                Ir a iniciar sesión
              </Button>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="rounded-full bg-red-100 p-3">
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-muted-foreground">{message}</p>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/portal/login">Iniciar sesión</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portal/register">Registrarse</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function VerifyEmailLoading() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Verificación de Email</CardTitle>
        <CardDescription>Cargando...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<VerifyEmailLoading />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
