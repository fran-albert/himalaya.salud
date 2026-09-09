# Revisión de la web — 2026-09-08

Versión de trabajo en `codex/web-contratacion-contacto`; integración para `develop` autorizada el 2026-09-08. La verificación de esa integración se detalla al final. No se modifica `main` ni se realizan envíos reales.

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

- Veinte pruebas automatizadas: contacto, respaldo de FAQ y nueve pruebas del catálogo de planes (publicación, orden, monedas, períodos, importes, enlaces, validación y fallos).
- Build de producción y tipos correctos. Lint sin errores; trece advertencias anteriores en componentes heredados.
- Nueve páginas con respuesta 200, un título principal y canónica correspondiente. Seis redirecciones verificadas.
- Enlaces internos, anclas, recursos, imagen para compartir, sitemap y robots comprobados.
- API de FAQ con contenido local. Contactos inválidos: 400, 413 o 415. Lista de espera: 410.
- Protección de simulación en producción: una consulta válida devuelve 503 y no escribe correos simulados ni envía por SES.
- Formularios empresarial y general recorridos en navegador con datos ficticios. Confirmación de prueba visible y correos guardados. Un dato inválido conserva el mensaje para corregirlo.
- Portada, contacto, ambas guías, FAQ y enlaces a 320, 390, 768 y 1280 px: un H1 por página y sin desbordes en textos, enlaces ni campos.
- Revisión visual de portada, contacto, correos e imagen para compartir. Menú móvil con cierre por Escape y preguntas expandibles por control accesible y teclado.

## Definiciones comerciales

La ampliación solicitada muestra tarjetas conectadas a `GET https://api.hci.himalayasalud.com.ar/api/plans/public`, sin credenciales. Cada botón abre el detalle de su plan y opción de facturación. Los accesos generales mantienen `NEXT_PUBLIC_SUBSCRIPTION_URL`.

Respuesta real verificada: cuatro planes, con importes mensuales ARS de $20, $1.555, $1.500 y $3.000 en orden de `rank`. Son valores observados, no precios fijados en el código ni nuevos acuerdos comerciales. El plan de prueba está activo y publicado; su visibilidad corresponde al backoffice. Se conservan las opciones ARS aunque incluyan IDs de tiendas y se excluyen USD. Solo se anuncian períodos mensual/anual conocidos; el anual muestra el total del año.

Revisión de las tarjetas a 320, 390, 768 y 1280 px, sin desbordes de texto o controles. Destino del Botón de Pánico verificado en el portal público, sin registro ni compra. Compilación con revalidación de portada cada cinco minutos. Carga en servidor, espera acotada y acceso al portal ante error o catálogo vacío.

La fuente remota de FAQ configurada localmente responde, pero conserva siete días gratis y cinco activaciones. El contenido revisado local es el predeterminado. Habilitar `FAQ_SOURCE=remote` después de alinear ese contenido; si el proveedor falla, continúa disponible el respaldo local.

No se hicieron envíos reales, compras, cambios en HCI ni despliegues. La recepción efectiva de correo en producción no se probó.

## Ampliación del paso a paso

Se desarrollaron las guías existentes con tres entradas desde la portada: contratación individual, beneficio empresarial y plan activo. La guía general incorpora anclas, pasos de contratación y preparación de la app, tipos de contacto, aceptación de la verificación, permisos y una lista de comprobación. La empresarial explica la invitación y el mismo correo, diferencia confirmación de cuenta de beneficio activo y continúa en la preparación de la app. Ambas tienen ayuda desplegable y canales de contacto existentes. No hay autenticación ni comprobación automática del estado del usuario en estas guías.

El contenido de configuración toma como referencia la captura pública existente y `../../docs/cierre-release-02-07.md`. No se reutilizan enlaces personales ni datos de empleados. Una prueba real del botón se presenta como una acción que debe coordinarse con los contactos; recorrer la guía no dispara avisos.

Verificación: 20 pruebas existentes y build correctos, sin advertencias nuevas. Portada y guías revisadas a 320 y 768 px: un H1 por página, sin anclas rotas ni desbordes en texto, enlaces o imágenes. Revisión visual adicional de primeros pasos en escritorio y a 390 px; pregunta de contacto no validado abierta con Enter. Recorrido empresarial hacia `/primeros-pasos#preparar-app` comprobado. Se verificó que el catálogo local sigue mostrando los cuatro planes actuales, incluido el de pruebas. La portada pública sigue siendo la versión anterior.

Pendiente para publicación: cerrar catálogo comercial y precios; preparar y autorizar el despliegue; coordinar una prueba de recepción real del formulario. Los envíos de la app y sus cinco plantillas siguen integrándose por separado en HCI. No se repitió la compra por Mercado Pago ni se enviaron mensajes.

## Hallazgo para revisar con Kozaca

Al identificar el endpoint público en el JavaScript del portal HCI, se observó una cadena configurada como `x-client-secret`, junto con `x-client-id`, en el cliente de `/api/external-himalaya`. Está en el recurso público `/_expo/static/js/web/entry-3d584085b724c17d91f9e426c69b9586.js` de `app.hci.himalayasalud.com.ar`. No se copia su valor, no se utiliza y no se comprueba su alcance. Kozaca debe revisar si autentica operaciones y, en ese caso, retirarla del navegador y rotarla. La conexión nueva de planes usa exclusivamente el endpoint público, sin esa integración.

## Integración en develop y retiro del posicionamiento anterior

Se integraron los cambios sobre `origin/develop` (`aced497`) en un checkout separado, conservando portal de médicos, administración, sus proveedores y clientes de API, y la página de profesionales. Se resolvieron las rutas duplicadas de la portada y los documentos legales a favor de la web revisada. Los destinos antiguos conservan sus redirecciones. Se corrigió el enlace de inicio de `/hci` para superar el lint vigente.

- `npm ci`, 20 pruebas y build de producción correctos. Persisten advertencias anteriores del portal y componentes heredados; no se desactivaron validaciones.
- Ocho variantes de páginas comerciales: HTTP 200, un H1 y ninguna referencia textual a historia clínica en el HTML completo. Metadatos de legales también libres de esa referencia; texto legal íntegro y `robots`/`googlebot` con `noindex, follow`.
- Sitemap de seis rutas comerciales, sin documentos legales ni previews. Seis redirecciones antiguas comprobadas.
- Cinco rutas de administración/dashboard sin sesión redirigen al login conservando destino y consulta. El login admite una cookie ficticia vencida sin entrar en un bucle. No se ingresó a una cuenta real.
- Login, registro, recuperación y tres rutas de previews responden 200 y `X-Robots-Tag: noindex, nofollow`. El encabezado alcanza HTML estático. Imagen social responde PNG correctamente.
- Navegador: portada con contenido y catálogo completos, sin menciones retiradas ni desbordes de texto; un solo encabezado y pie. El login conserva su formulario y estructura propia, sin la navegación comercial duplicada.

La integración queda preparada para el push autorizado a `develop`. No se modifica `main`, no se cambian datos del backoffice ni se prueba correo con destinatarios reales.
