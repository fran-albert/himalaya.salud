'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';

import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AdminSidebar } from './admin-sidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function AdminHeader() {
  const { user } = useAuth();

  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase()
    : '??';

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
              <Link href="/admin" className="flex items-center gap-2">
                <Image
                  src="/logo-himalaya-salud.svg"
                  alt="Himalaya Salud"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <span className="font-semibold">Admin Panel</span>
              </Link>
            </div>
            <AdminSidebar />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/admin" className="hidden md:flex items-center gap-2">
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg">Admin Panel</span>
        </Link>

        {/* Mobile logo */}
        <Link href="/admin" className="flex md:hidden items-center gap-2 ml-2">
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-semibold">Admin</span>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* User avatar */}
        {user && (
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">{initials}</AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  );
}
