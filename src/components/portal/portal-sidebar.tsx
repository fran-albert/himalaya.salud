'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  User,
  FileText,
  Shield,
  Building2,
  Settings,
  LogOut,
  ShieldCheck,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { useAuth, useVerificationStatus, useIsStaffOrHigher } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navigation = [
  {
    name: 'Dashboard',
    href: '/portal/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Mi Perfil',
    href: '/portal/dashboard/profile',
    icon: User,
  },
  {
    name: 'Documentos',
    href: '/portal/dashboard/documents',
    icon: FileText,
    requiresUnverified: true,
  },
  {
    name: 'Seguros',
    href: '/portal/dashboard/insurances',
    icon: Shield,
    requiresVerified: true,
  },
  {
    name: 'Consultorios',
    href: '/portal/dashboard/offices',
    icon: Building2,
    requiresVerified: true,
  },
  {
    name: 'Configuración',
    href: '/portal/dashboard/settings',
    icon: Settings,
  },
  {
    name: 'Admin Panel',
    href: '/admin',
    icon: ShieldCheck,
    requiresStaff: true,
  },
];

interface PortalSidebarProps {
  className?: string;
}

export function PortalSidebar({ className }: PortalSidebarProps) {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const verificationStatus = useVerificationStatus();
  const isStaffOrHigher = useIsStaffOrHigher();

  const isVerified = verificationStatus === 'verified';

  const filteredNavigation = navigation.filter((item) => {
    if (item.requiresVerified && !isVerified) return false;
    if (item.requiresUnverified && isVerified) return false;
    if ('requiresStaff' in item && item.requiresStaff && !isStaffOrHigher) return false;
    return true;
  });

  return (
    <TooltipProvider>
      <div className={cn('flex h-full flex-col', className)}>
        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {filteredNavigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
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
                </TooltipTrigger>
                <TooltipContent side="right" className="md:hidden">
                  {item.name}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </nav>

        {/* User info & Logout */}
        <div className="border-t p-4">
          <div className="mb-3">
            <p className="text-sm font-medium truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            <Badge
              variant={isVerified ? 'default' : 'secondary'}
              className="mt-1 text-xs"
            >
              {verificationStatus === 'pending_email' && 'Verificar email'}
              {verificationStatus === 'pending_verification' && 'Pendiente'}
              {verificationStatus === 'verified' && 'Verificado'}
              {verificationStatus === 'rejected' && 'Rechazado'}
              {verificationStatus === 'suspended' && 'Suspendido'}
            </Badge>
          </div>
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
    </TooltipProvider>
  );
}
