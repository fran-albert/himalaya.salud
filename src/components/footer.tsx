import Link from "next/link";
import { Mail } from "lucide-react";
import { socialLinks, whatsappUrl, contactEmail } from "@/lib/social-links";
import { BrandLogo } from "./site-ui";
import { WhatsappIcon } from "./whatsapp-icon";
import { TrackedLink } from "./tracked-link";

export function Footer() {
  const groups = [
    {
      title: "Himalaya",
      links: [
        ["La app", "/#producto"],
        ["Planes", "/#planes"],
        ["Para empresas", "/#empresas"],
        ["Quiénes somos", "/#quienes"],
      ],
    },
    {
      title: "Tu acceso",
      links: [
        ["Primeros pasos", "/primeros-pasos"],
        ["Beneficio empresarial", "/beneficio-empresarial"],
        ["Preguntas frecuentes", "/faq"],
        ["Contacto", "/contacto"],
      ],
    },
  ];
  return (
    <>
      <footer className="h-footer">
        <div className="h-container">
          <div className="h-footer-grid">
            <div>
              <BrandLogo />
              <p>
                Una app para avisar a las personas que elegiste y tener tu
                información de salud a mano.
              </p>
              <a className="h-footer-email" href={`mailto:${contactEmail}`}>
                <Mail size={16} aria-hidden="true" />
                {contactEmail}
              </a>
              <a
                className="h-footer-email"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon width={17} height={17} />
                341 242 9819
              </a>
            </div>
            {groups.map((g) => (
              <div key={g.title}>
                <h2>{g.title}</h2>
                <nav aria-label={g.title}>
                  {g.links.map(([text, href]) => (
                    <Link key={href} href={href}>
                      {text}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          <div className="h-footer-bottom">
            <span>© {new Date().getFullYear()} Himalaya Salud S.A.S.</span>
            <div>
              <Link href="/politica-de-privacidad">Privacidad</Link>
              <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
            </div>
            <div>
              {socialLinks.map(({ key, label, href, icon: Icon }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <TrackedLink
        href={whatsappUrl}
        event="whatsapp_clicked"
        origin="floating"
        className="h-floating-whatsapp"
        aria-label="Consultar por WhatsApp al 341 242 9819"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon width={27} height={27} />
      </TrackedLink>
    </>
  );
}
