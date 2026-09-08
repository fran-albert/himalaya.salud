# Web: contratación, activación y contacto

Diseño aprobado el 2026-09-08 para implementar y revisar localmente.

Conservar Inter, el logo, teal #0C606E, menta #70C9A6 y las capturas reales. Reorganizar la portada: producto, tres pasos, planes, acceso existente, preguntas y contacto. Diferenciar contratación individual, consulta empresarial y activación del empleado desde su invitación. Conservar las compras dentro de las apps.

La oferta individual todavía se define con Kozaca. La web no fija precios, cuotas ni identificadores de planes. El enlace comercial se centraliza en NEXT_PUBLIC_SUBSCRIPTION_URL, con el catálogo existente como destino por defecto. Revisar ese catálogo antes de publicar: actualmente contiene planes de prueba y prestaciones distintas de las anunciadas.

## Implementación

1. Portada y navegación con componentes de servidor y controles interactivos acotados. Guías /primeros-pasos y /beneficio-empresarial.
2. Redirigir /informacion a /#producto, /plan-estandar a /#planes y /plan-estandar/contacto a /contacto. Conservar documentos legales.
3. Preguntas locales coherentes, integración remota opcional con validación y respaldo. Metadatos y sitemap propios.
4. Unificar contactos: consulta general/ayuda y empresas, WhatsApp con mensaje precargado, campos empresariales. Validar servidor, escapar HTML y diferenciar aceptación de consulta de confirmación al visitante.
5. Retirar el endpoint de lista de espera obsoleto: no se usa en las páginas actuales y anuncia un lanzamiento pasado.
6. Probar envíos con transporte simulado, errores y aceptación parcial. El modo de vista previa solo funciona en desarrollo y avisa antes de completar el formulario. Build, lint, rutas y revisión visual local.

Esta implementación no publica el sitio ni envía mensajes reales. El cobro por Mercado Pago ya se probó; no se modifica su integración ni el portal de Kozaca.
