# Himalaya Salud S.A.S. - Sitio Web Oficial

Este es el sitio web oficial de Himalaya Salud S.A.S., desarrollado con Next.js, TypeScript y Tailwind CSS. El propósito de este sitio es presentar la organización y ofrecer un punto de contacto y soporte para los usuarios de sus aplicaciones.

## URLs Públicas

Una vez desplegado, el sitio contará con las siguientes URLs:

- **Página de Inicio:** `/`
- **Soporte Técnico:** `/soporte`
- **Política de Privacidad:** `/privacidad`
- **Términos y Condiciones:** `/terminos`

## Cómo Correr en Local

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

3.  Abrí [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Variables de Entorno

Los formularios de `/contacto` y de waitlist envían mails vía **AWS SES** (SDK `@aws-sdk/client-sesv2`). Requieren estas variables (cargadas en Vercel; en local, en `.env.local`):

| Variable | Descripción |
|---|---|
| `AWS_REGION` | Región de SES (`us-east-1`). |
| `SES_ACCESS_KEY_ID` | Access key del usuario IAM `himalaya-web-ses`. |
| `SES_SECRET_ACCESS_KEY` | Secret access key del mismo usuario (no commitear). |
| `MAIL_FROM` | Remitente verificado en SES (`noreply@himalayasalud.com.ar`). |
| `CONTACT_EMAIL` | Casilla destino de las consultas (`contacto@himalayasalud.com.ar`). |

Si faltan estas variables, los endpoints `/api/contact` y `/api/waitlist` devuelven error 500. Setup canónico de SES y credenciales: `docs/ses-email-setup.md` (repo `himalaya/`).

---

## ✅ Checklist para Apple Developer Program

A continuación se detallan las URLs que deben ser utilizadas en el formulario de inscripción de Apple.

-   **Website URL:**
    -   `https://himalayasalud.com.ar`
    -   *Contenido: Página de inicio pública que presenta la organización, sus productos y vías de contacto.*

-   **Support URL:**
    -   `https://himalayasalud.com.ar/soporte`
    -   *Contenido: Página de soporte técnico con un email de contacto (`soporte@himalayasalud.com.ar`), un formulario de contacto funcional y horarios de atención.*
