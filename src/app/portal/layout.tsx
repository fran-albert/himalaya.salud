import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Portal Médicos',
    template: '%s | Portal Médicos - Himalaya Salud',
  },
  description: 'Portal de gestión para médicos de Himalaya Salud',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      {children}
    </div>
  );
}
