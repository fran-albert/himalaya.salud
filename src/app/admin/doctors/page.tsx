import type { Metadata } from 'next';
import { DoctorsManager } from '@/components/admin/doctors-manager';

export const metadata: Metadata = {
  title: 'Gestión de Médicos - Admin',
  description: 'Panel de administración de médicos',
};

export default function AdminDoctorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Gestión de Médicos</h1>
        <p className="text-muted-foreground">
          Administra los médicos registrados en el sistema
        </p>
      </div>
      <DoctorsManager />
    </div>
  );
}
