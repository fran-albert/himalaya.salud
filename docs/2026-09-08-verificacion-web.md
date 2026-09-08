# Revisión de la web — 2026-09-08

Versión local en `codex/web-contratacion-contacto`. No publicada.

## Contactos y envíos

| Acción | Comportamiento |
|---|---|
| Formulario general o empresarial | Consulta a Himalaya y confirmación al visitante mediante SES. En la vista local se guardan archivos, sin envío. |
| Responder la consulta recibida | Reply-To apunta al visitante. |
| Responder la confirmación | Reply-To apunta a contacto@himalayasalud.com.ar. |
| WhatsApp | Abre 341 242 9819 con la consulta precargada. La persona realiza el envío. |
| Enlace de correo | Abre el programa de correo. No envía automáticamente. |
| Formularios anteriores | Información y Plan Estándar redirigen; no conservan formularios sin conexión o basados en mailto. |
| Lista de espera | Endpoint retirado con respuesta 410; no envía el anuncio de lanzamiento anterior. |

Se validan campos y tamaño, se escapa HTML y se incluyen alternativas de texto. Si falla únicamente la confirmación al visitante, la consulta conserva su aceptación para evitar que se repita por ese motivo. La aceptación de SES no prueba entrega en la bandeja de entrada.

## Comprobaciones

- Once pruebas automatizadas: validación, HTML, destinatarios, Reply-To, fallo del envío principal, aceptación parcial y respaldo de FAQ.
- Build de producción y tipos correctos. Lint sin errores; trece advertencias anteriores en componentes heredados.
- Nueve páginas con respuesta 200, un título principal y canónica correspondiente. Seis redirecciones verificadas.
- Enlaces internos, anclas, recursos, imagen para compartir, sitemap y robots comprobados.
- API de FAQ con contenido local. Contactos inválidos: 400, 413 o 415. Lista de espera: 410.
- Protección de simulación en producción: una consulta válida devuelve 503 y no escribe correos simulados ni envía por SES.
- Formularios empresarial y general recorridos en navegador con datos ficticios. Confirmación de prueba visible y correos guardados. Un dato inválido conserva el mensaje para corregirlo.
- Portada, contacto, ambas guías, FAQ y enlaces a 320, 390, 768 y 1280 px: un H1 por página y sin desbordes en textos, enlaces ni campos.
- Revisión visual de portada, contacto, correos e imagen para compartir. Menú móvil con cierre por Escape y preguntas expandibles por control accesible y teclado.

## Definiciones comerciales

El botón individual abre el catálogo existente; su destino se configura en `NEXT_PUBLIC_SUBSCRIPTION_URL`. Acordar plan, precio, prestaciones y enlace antes de publicar. El portal todavía mostraba planes de prueba en la revisión previa.

La fuente remota de FAQ configurada localmente responde, pero conserva siete días gratis y cinco activaciones. El contenido revisado local es el predeterminado. Habilitar `FAQ_SOURCE=remote` después de alinear ese contenido; si el proveedor falla, continúa disponible el respaldo local.

No se hicieron envíos reales, compras, cambios en HCI ni despliegues. La recepción efectiva de correo en producción no se probó.
