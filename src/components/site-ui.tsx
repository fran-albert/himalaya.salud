import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Apple, Play } from "lucide-react";
import { appStoreUrl, googlePlayUrl, whatsappUrl } from "@/lib/social-links";
import { TrackedLink } from "./tracked-link";
import { WhatsappIcon } from "./whatsapp-icon";

export function BrandLogo() {
  return (
    <Link href="/" className="h-brand" aria-label="Himalaya Salud — Inicio">
      <Image
        src="/logo-himalaya-salud.svg"
        width={38}
        height={38}
        style={{ width: 38, height: "auto", flexShrink: 0 }}
        alt=""
      />
      <span>
        <strong>
          Himalaya <span>Salud</span>
        </strong>
        <small>Tu salud en tus manos</small>
      </span>
    </Link>
  );
}
export function StoreLinks({ origin }: { origin: string }) {
  return (
    <div className="h-actions">
      <TrackedLink
        href={appStoreUrl}
        event="store_clicked"
        origin={origin}
        className="h-store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Apple size={25} aria-hidden="true" />
        <span>
          <small>Descargá en</small>App Store
        </span>
      </TrackedLink>
      <TrackedLink
        href={googlePlayUrl}
        event="store_clicked"
        origin={origin}
        className="h-store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Play size={23} aria-hidden="true" />
        <span>
          <small>Disponible en</small>Google Play
        </span>
      </TrackedLink>
    </div>
  );
}
export function HelpBlock() {
  return (
    <aside className="h-help">
      <div>
        <span className="h-eyebrow">Estamos para ayudarte</span>
        <h2>¿Necesitás una mano?</h2>
        <p>Escribinos por tu cuenta, tu plan o el acceso de tu empresa.</p>
      </div>
      <TrackedLink
        href={whatsappUrl}
        event="whatsapp_clicked"
        origin="help"
        target="_blank"
        rel="noopener noreferrer"
        className="h-button h-button-white"
      >
        <WhatsappIcon width={21} height={21} /> WhatsApp · 341 242 9819{" "}
        <ArrowRight size={17} aria-hidden="true" />
      </TrackedLink>
    </aside>
  );
}
