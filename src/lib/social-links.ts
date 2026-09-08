import {
  Apple,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Play,
  CreditCard,
  Smartphone,
  Building2,
  type LucideIcon,
} from "lucide-react";

/**
 * Fuente única de verdad de los canales de contacto y redes de Himalaya Salud.
 *
 * Se consume desde:
 * - `src/app/enlaces/page.tsx` (hub tipo link-in-bio) → `contactChannels`
 * - `src/components/footer.tsx` (redes + botón flotante) → `socialLinks` + `whatsappUrl`
 *
 * Cada URL sale de una env var pública con fallback hardcodeado al valor oficial.
 */

const WHATSAPP_FALLBACK =
  "https://wa.me/5493412429819?text=Hola%2C%20necesito%20ayuda%20con%20mi%20cuenta%20de%20Himalaya%20Salud.";

export const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || WHATSAPP_FALLBACK;

export const appStoreUrl =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/ar/app/himalaya-salud/id6756281486";

export const googlePlayUrl =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
  "https://play.google.com/store/apps/details?id=com.hciimalaya";

export const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://www.linkedin.com/company/himalaya-salud/";

export const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://www.instagram.com/himalaya.salud";

export const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  "https://www.facebook.com/share/17zJrC8UZC/";

export const contactEmail = "contacto@himalayasalud.com.ar";

export type ContactChannel = {
  key: string;
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
  /** Color de marca del canal. Solo se hardcodea para WhatsApp. */
  brandColor?: string;
};

/** Redes sociales (LinkedIn, Instagram, Facebook). Usadas en el footer y el hub. */
export const socialLinks: ContactChannel[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    description: "Seguinos en LinkedIn",
    href: linkedinUrl,
    icon: Linkedin,
    external: true,
  },
  {
    key: "instagram",
    label: "Instagram",
    description: "Seguinos en Instagram",
    href: instagramUrl,
    icon: Instagram,
    external: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    description: "Seguinos en Facebook",
    href: facebookUrl,
    icon: Facebook,
    external: true,
  },
];

/** Todos los canales del hub /enlaces, en orden de prioridad. */
export const contactChannels: ContactChannel[] = [
  { key: "planes", label: "Ver planes y contratar", description: "Conocé las opciones para vos", href: "/#planes", icon: CreditCard, external: false },
  { key: "acceso", label: "Ya tengo un plan", description: "Descarga y primeros pasos", href: "/primeros-pasos", icon: Smartphone, external: false },
  { key: "beneficio", label: "Mi empresa me dio acceso", description: "Cómo activar tu invitación", href: "/beneficio-empresarial", icon: Building2, external: false },
  { key: "empresa", label: "Himalaya para mi empresa", description: "Consultá una propuesta para tu equipo", href: "/contacto?tipo=empresa", icon: Building2, external: false },
  {
    key: "app-store",
    label: "App Store",
    description: "Descargá la app para iPhone",
    href: appStoreUrl,
    icon: Apple,
    external: true,
  },
  {
    key: "google-play",
    label: "Google Play",
    description: "Descargá la app para Android",
    href: googlePlayUrl,
    icon: Play,
    external: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    description: "Escribinos y te respondemos",
    href: whatsappUrl,
    icon: MessageCircle,
    external: true,
    brandColor: "#25D366",
  },
  {
    key: "web",
    label: "Sitio web",
    description: "himalayasalud.com.ar",
    href: "/",
    icon: Globe,
    external: false,
  },
  {
    key: "email",
    label: "Correo",
    description: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: Mail,
    external: false,
  },
  ...socialLinks,
];
