import type { Metadata } from 'next';
import { Suspense } from 'react';
import { LoginForm } from '@/components/portal/auth/login-form';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
  description: 'Ingresa al Portal de Médicos de Himalaya Salud',
};

function LoginFormSkeleton() {
  return (
    <div className="space-y-4 p-6 border rounded-lg">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-64" />
      <div className="space-y-2 pt-4">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFormSkeleton />}>
      <LoginForm />
    </Suspense>
  );
}
