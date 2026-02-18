'use client';

import Link from 'next/link';
import { AlertCircle, Mail, FileText, CheckCircle2, XCircle, Ban } from 'lucide-react';

import { useAuth, useVerificationStatus } from '@/lib/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export function VerificationBanner() {
  const { user } = useAuth();
  const status = useVerificationStatus();

  if (!status || status === 'verified') return null;

  const banners = {
    pending_email: {
      icon: Mail,
      variant: 'default' as const,
      title: 'Verifica tu email',
      description: 'Te hemos enviado un email de verificación. Por favor revisa tu bandeja de entrada.',
      action: null,
    },
    pending_verification: {
      icon: FileText,
      variant: 'default' as const,
      title: 'Sube tus documentos',
      description: 'Para completar tu verificación, sube los documentos requeridos.',
      action: (
        <Button asChild size="sm">
          <Link href="/portal/dashboard/documents">Subir documentos</Link>
        </Button>
      ),
    },
    rejected: {
      icon: XCircle,
      variant: 'destructive' as const,
      title: 'Verificación rechazada',
      description: user?.verificationStatus === 'rejected'
        ? 'Tu solicitud fue rechazada. Por favor revisa los motivos y vuelve a intentar.'
        : 'Tu solicitud fue rechazada.',
      action: (
        <Button asChild size="sm" variant="outline">
          <Link href="/portal/dashboard/documents">Ver detalles</Link>
        </Button>
      ),
    },
    suspended: {
      icon: Ban,
      variant: 'destructive' as const,
      title: 'Cuenta suspendida',
      description: 'Tu cuenta ha sido suspendida. Por favor contacta a soporte.',
      action: (
        <Button asChild size="sm" variant="outline">
          <Link href="/soporte">Contactar soporte</Link>
        </Button>
      ),
    },
  };

  const banner = banners[status];
  if (!banner) return null;

  const Icon = banner.icon;

  return (
    <Alert variant={banner.variant} className="mb-6">
      <Icon className="h-4 w-4" />
      <AlertTitle>{banner.title}</AlertTitle>
      <AlertDescription className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span>{banner.description}</span>
        {banner.action}
      </AlertDescription>
    </Alert>
  );
}
