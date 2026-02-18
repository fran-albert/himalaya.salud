'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth, useIsStaffOrHigher } from '@/lib/auth';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminHeader } from '@/components/admin/admin-header';
import { Skeleton } from '@/components/ui/skeleton';

function AdminSkeleton() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar skeleton */}
      <div className="hidden md:flex w-64 flex-col border-r bg-background">
        <div className="p-4 space-y-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </div>
      {/* Main content skeleton */}
      <div className="flex-1">
        <div className="h-16 border-b bg-background" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const isStaffOrHigher = useIsStaffOrHigher();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/portal/login?redirect=/admin');
    } else if (!isLoading && isAuthenticated && !isStaffOrHigher) {
      // User is authenticated but doesn't have admin rights
      router.push('/portal/dashboard');
    }
  }, [isAuthenticated, isLoading, isStaffOrHigher, router]);

  if (isLoading) {
    return <AdminSkeleton />;
  }

  if (!isAuthenticated || !isStaffOrHigher) {
    return <AdminSkeleton />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - hidden on mobile */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-background">
        <div className="flex h-16 items-center border-b px-4">
          <span className="text-lg font-semibold text-primary">Admin Panel</span>
        </div>
        <AdminSidebar className="flex-1" />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
