# Web: contratación, activación y contacto

Diseño aprobado el 2026-09-08 para implementar y revisar localmente.

Conservar Inter, el logo, teal #0C606E, menta #70C9A6 y las capturas reales. Reorganizar la portada: producto, tres pasos, planes, acceso existente, preguntas y contacto. Diferenciar contratación individual, consulta empresarial y activación del empleado desde su invitación. Conservar las compras dentro de las apps.

La oferta individual se administra en el backoffice de HCI. Ampliación aprobada el 2026-09-08: mostrar las tarjetas de planes en la portada, con nombres, prestaciones, precios y opciones de facturación tomados de la API pública de HCI. No fijar importes ni identificadores en la web.

Fuente verificada: `GET https://api.hci.himalayasalud.com.ar/api/plans/public`, sin autenticación. Mostrar planes activos con contenido publicado, ordenados por `rank`, y sus opciones en pesos argentinos. El portal web excluye las opciones en USD; no inferir el canal por los identificadores de Apple/Google, porque también aparecen en las opciones ARS. Admitir mensual y anual, mostrando el total del período elegido. Cada botón abre `/plan-details` con `id`, `plan` y `billingOptionId` de esa opción.

Tarjetas con Inter, títulos claros, precio destacado y prestaciones en lista. Cuatro columnas en escritorio, dos en tablet y una en celular. La propuesta empresarial pasa a una banda separada. Carga en servidor con revalidación de 5 minutos y tiempo máximo de 5 segundos; ante error o catálogo vacío, ofrecer acceso al catálogo de HCI sin inventar precios. `NEXT_PUBLIC_SUBSCRIPTION_URL` conserva su función para los accesos generales. Los planes de prueba siguen visibles mientras el backoffice los publique; el sitio no los oculta por nombre.

## Implementación

1. Portada y navegación con componentes de servidor y controles interactivos acotados. Guías /primeros-pasos y /beneficio-empresarial.
2. Redirigir /informacion a /#producto, /plan-estandar a /#planes y /plan-estandar/contacto a /contacto. Conservar documentos legales.
3. Preguntas locales coherentes, integración remota opcional con validación y respaldo. Metadatos y sitemap propios.
4. Unificar contactos: consulta general/ayuda y empresas, WhatsApp con mensaje precargado, campos empresariales. Validar servidor, escapar HTML y diferenciar aceptación de consulta de confirmación al visitante.
5. Retirar el endpoint de lista de espera obsoleto: no se usa en las páginas actuales y anuncia un lanzamiento pasado.
6. Probar envíos con transporte simulado, errores y aceptación parcial. El modo de vista previa solo funciona en desarrollo y avisa antes de completar el formulario. Build, lint, rutas y revisión visual local.

Esta implementación no publica el sitio ni envía mensajes reales. El cobro por Mercado Pago ya se probó; no se modifica su integración ni el portal de Kozaca.
