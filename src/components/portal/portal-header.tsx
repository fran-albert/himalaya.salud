'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PortalSidebar } from './portal-sidebar';
import { UserMenu } from './user-menu';

export function PortalHeader() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="border-b p-4">
              <Link href="/portal/dashboard" className="flex items-center gap-2">
                <Image
                  src="/logo-himalaya-salud.svg"
                  alt="Himalaya Salud"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-semibold">Portal Médicos</span>
              </Link>
            </div>
            <PortalSidebar />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/portal/dashboard"
          className="hidden md:flex items-center gap-2"
        >
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg">Portal Médicos</span>
        </Link>

        {/* Mobile logo */}
        <Link
          href="/portal/dashboard"
          className="flex md:hidden items-center gap-2 ml-2"
        >
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-semibold">Portal</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* User menu */}
        {user && <UserMenu />}
      </div>
    </header>
  );
}
