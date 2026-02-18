'use client';

import Link from 'next/link';
import {
  User,
  FileText,
  Shield,
  Building2,
  ArrowRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from 'lucide-react';

import { useAuth, useVerificationStatus, useIsVerified } from '@/lib/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const quickActions = [
  {
    title: 'Completar perfil',
    description: 'Agrega tu información profesional',
    href: '/portal/dashboard/profile',
    icon: User,
    requiresVerified: false,
  },
  {
    title: 'Subir documentos',
    description: 'Sube tus credenciales para verificación',
    href: '/portal/dashboard/documents',
    icon: FileText,
    requiresVerified: false,
    hideWhenVerified: true,
  },
  {
    title: 'Gestionar seguros',
    description: 'Agrega los seguros que aceptas',
    href: '/portal/dashboard/insurances',
    icon: Shield,
    requiresVerified: true,
  },
  {
    title: 'Mis consultorios',
    description: 'Configura tus lugares de atención',
    href: '/portal/dashboard/offices',
    icon: Building2,
    requiresVerified: true,
  },
];

function getStatusInfo(status: string | null) {
  switch (status) {
    case 'pending_email':
      return {
        label: 'Email pendiente',
        color: 'bg-yellow-500',
        icon: Clock,
        progress: 25,
      };
    case 'pending_verification':
      return {
        label: 'Verificación pendiente',
        color: 'bg-blue-500',
        icon: Clock,
        progress: 50,
      };
    case 'verified':
      return {
        label: 'Verificado',
        color: 'bg-green-500',
        icon: CheckCircle2,
        progress: 100,
      };
    case 'rejected':
      return {
        label: 'Rechazado',
        color: 'bg-red-500',
        icon: AlertCircle,
        progress: 50,
      };
    default:
      return {
        label: 'Desconocido',
        color: 'bg-gray-500',
        icon: AlertCircle,
        progress: 0,
      };
  }
}

export default function DashboardPage() {
  const { user } = useAuth();
  const verificationStatus = useVerificationStatus();
  const isVerified = useIsVerified();

  const statusInfo = getStatusInfo(verificationStatus);
  const StatusIcon = statusInfo.icon;

  const filteredActions = quickActions.filter((action) => {
    if (action.requiresVerified && !isVerified) return false;
    if (action.hideWhenVerified && isVerified) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Bienvenido, {user?.firstName}
        </h1>
        <p className="text-muted-foreground">
          Gestiona tu perfil profesional desde aquí.
        </p>
      </div>

      {/* Status card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StatusIcon className="h-5 w-5" />
            Estado de verificación
          </CardTitle>
          <CardDescription>
            {verificationStatus === 'pending_email' &&
              'Verifica tu email para continuar con el proceso.'}
            {verificationStatus === 'pending_verification' &&
              'Sube tus documentos para que podamos verificar tu cuenta.'}
            {verificationStatus === 'verified' &&
              'Tu cuenta está verificada. Puedes gestionar tu perfil completo.'}
            {verificationStatus === 'rejected' &&
              'Tu solicitud fue rechazada. Por favor revisa los documentos y vuelve a intentar.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant={isVerified ? 'default' : 'secondary'}>
                {statusInfo.label}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {statusInfo.progress}% completado
              </span>
            </div>
            <Progress value={statusInfo.progress} className="h-2" />

            {/* Steps */}
            <div className="flex items-center justify-between text-sm pt-2">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    statusInfo.progress >= 25 ? 'bg-green-500' : 'bg-muted'
                  }`}
                />
                <span className={statusInfo.progress >= 25 ? '' : 'text-muted-foreground'}>
                  Registro
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    statusInfo.progress >= 50 ? 'bg-green-500' : 'bg-muted'
                  }`}
                />
                <span className={statusInfo.progress >= 50 ? '' : 'text-muted-foreground'}>
                  Email verificado
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    statusInfo.progress >= 75 ? 'bg-green-500' : 'bg-muted'
                  }`}
                />
                <span className={statusInfo.progress >= 75 ? '' : 'text-muted-foreground'}>
                  Documentos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${
                    statusInfo.progress >= 100 ? 'bg-green-500' : 'bg-muted'
                  }`}
                />
                <span className={statusInfo.progress >= 100 ? '' : 'text-muted-foreground'}>
                  Verificado
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Acciones rápidas</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card key={action.href} className="hover:border-primary/50 transition-colors">
                <Link href={action.href}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className="h-5 w-5 text-primary" />
                      {action.title}
                    </CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Ver más <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
