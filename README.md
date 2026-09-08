# Himalaya Salud — web

Sitio público en Next.js 15, React 19 y TypeScript.

## Desarrollo y revisión

```sh
npm ci
npm run dev:preview -- --port 8767
```

Abrir http://127.0.0.1:8767. El formulario avisa que está en modo de prueba: guarda el correo para Himalaya y la confirmación del visitante en `.mail-preview/`, sin enviarlos. Esos archivos no se incluyen en Git. El modo de prueba está bloqueado en producción.

```sh
npm test
npm run build
```

Las pruebas usan el soporte nativo de TypeScript de Node 22.6 o posterior.

## Páginas

- `/`: producto, pasos, planes y acceso a la app.
- `/primeros-pasos`: ingreso con la misma cuenta y configuración de contactos.
- `/beneficio-empresarial`: activación desde la invitación personal.
- `/contacto` y `/contacto?tipo=empresa`: formulario general y empresarial.
- `/faq` y `/enlaces`: ayuda y canales oficiales.
- `/politica-de-privacidad` y `/terminos-y-condiciones`: documentos existentes.

Las páginas anteriores `/informacion`, `/plan-estandar` y `/plan-estandar/contacto` redirigen al recorrido actual. `/soporte` redirige a `/contacto`.

## Contacto y correos

`POST /api/contact` valida los datos y usa AWS SES. Primero envía la consulta a Himalaya y luego una confirmación al visitante. Si falla solo la confirmación, conserva el resultado exitoso de la consulta. Una aceptación de SES no garantiza entrega a la bandeja de entrada.

Variables del servidor:

| Variable | Uso |
|---|---|
| `SES_ACCESS_KEY_ID`, `SES_SECRET_ACCESS_KEY` | Credenciales de SES |
| `AWS_REGION` | Región; por defecto `us-east-1` |
| `MAIL_FROM` | Remitente; por defecto `noreply@himalayasalud.com.ar` |
| `CONTACT_EMAIL` | Destinatario; por defecto `contacto@himalayasalud.com.ar` |
| `CONTACT_MAIL_MODE=preview` | Simulación, únicamente en desarrollo |

Para enviar con SES se usa `npm run dev` o la versión de producción, sin `CONTACT_MAIL_MODE=preview`. Mantener credenciales fuera de Git. El teléfono y correo públicos están centralizados en `src/lib/social-links.ts`.

WhatsApp abre la conversación con una consulta escrita; la persona confirma el envío en WhatsApp. El enlace de correo abre su programa de mail. Los formularios antiguos sin envío quedaron fuera de las rutas públicas. `POST /api/waitlist` devuelve 410: la app ya está disponible.

## Planes y preguntas frecuentes

`NEXT_PUBLIC_SUBSCRIPTION_URL` define el destino comercial HTTPS dentro de `app.hci.himalayasalud.com.ar`. Sin esa variable se abre el catálogo existente. Antes de publicar, acordar el plan y su enlace y retirar del catálogo público los planes de prueba. Esta web no modifica los precios ni el cobro de Mercado Pago.

Las FAQ usan el contenido revisado de `src/lib/faq-content.ts`. La fuente remota observada todavía ofrece siete días gratis y cinco activaciones: revisar esas condiciones antes de habilitarla con `FAQ_SOURCE=remote`, `FAQ_API_URL` y, si corresponde, `FAQ_API_TOKEN`. Una respuesta inválida o un fallo del proveedor conserva la ayuda local. `/api/faqs` indica `source: local | remote`.

Las cinco plantillas de cuenta y suscripción se integran en HCI por separado; este repositorio gestiona los correos del formulario web.
