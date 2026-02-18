'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, FileSpreadsheet, ArrowLeft, LogOut, Database } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useAuth, useUserRole } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const navigation = [
  {
    name: 'Médicos',
    href: '/admin/doctors',
    icon: Users,
  },
  {
    name: 'Explorador',
    href: '/admin/explorer',
    icon: Database,
  },
];

interface AdminSidebarProps {
  className?: string;
}

export function AdminSidebar({ className }: AdminSidebarProps) {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const role = useUserRole();

  const roleLabels: Record<string, string> = {
    staff: 'Personal',
    manager: 'Gerente',
    admin: 'Administrador',
  };

  return (
    <div className={cn('flex h-full flex-col', className)}>
      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User info & Actions */}
      <div className="border-t p-4 space-y-3">
        <div>
          <p className="text-sm font-medium truncate">
            {user?.firstName} {user?.lastName}
          </p>
          <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          {role && role !== 'doctor' && (
            <Badge variant="default" className="mt-1 text-xs">
              {roleLabels[role] || role}
            </Badge>
          )}
        </div>

        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link href="/portal/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Portal
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
}
