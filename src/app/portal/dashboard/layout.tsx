'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/lib/auth';
import { PortalHeader } from '@/components/portal/portal-header';
import { PortalSidebar } from '@/components/portal/portal-sidebar';
import { VerificationBanner } from '@/components/portal/verification-banner';
import { Skeleton } from '@/components/ui/skeleton';

function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar skeleton */}
      <div className="hidden md:flex w-64 flex-col border-r bg-background">
        <div className="p-4 space-y-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
      {/* Main content skeleton */}
      <div className="flex-1">
        <div className="h-16 border-b bg-background" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/portal/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (!isAuthenticated) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - hidden on mobile */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-background">
        <div className="flex h-16 items-center border-b px-4">
          {/* Sidebar header if needed */}
        </div>
        <PortalSidebar className="flex-1" />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <PortalHeader />
        <main className="flex-1 p-4 md:p-6">
          <VerificationBanner />
          {children}
        </main>
      </div>
    </div>
  );
}
