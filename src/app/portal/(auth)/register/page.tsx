import type { Metadata } from 'next';
import Link from 'next/link';
import { UserX, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Registro Deshabilitado',
  description: 'El registro público no está disponible',
};

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
          <UserX className="w-8 h-8 text-muted-foreground" />
        </div>
        <CardTitle className="text-2xl">Registro no disponible</CardTitle>
        <CardDescription className="text-base">
          El registro de nuevos médicos es gestionado únicamente por
          administradores del sistema.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-muted/50 p-4 rounded-lg space-y-3">
          <h3 className="font-medium text-sm">¿Cómo puedo registrarme?</h3>
          <p className="text-sm text-muted-foreground">
            Si eres un profesional médico y deseas formar parte de nuestra red,
            contacta al equipo de Himalaya Salud. Una vez registrado, recibirás
            un email con tus credenciales de acceso.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail className="w-4 h-4" />
          <span>contacto@himalayasalud.com</span>
        </div>

        <div className="pt-4 border-t space-y-3">
          <p className="text-sm text-center text-muted-foreground">
            ¿Ya tienes una cuenta?
          </p>
          <Button asChild className="w-full">
            <Link href="/portal/login">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ir a Iniciar Sesión
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
