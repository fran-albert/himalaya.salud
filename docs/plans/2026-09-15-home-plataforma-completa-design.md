---
date: 2026-09-15
description: Diseño para presentar en la home las funciones de Himalaya más allá del Botón de Pánico, con jerarquía visual y copy de exploración.
tags: [design, web, hci, home]
---

# Home: plataforma completa

## Objetivo

Mostrar que Himalaya es más que el Botón de Pánico, sin convertir esta primera versión en una promesa comercial cerrada ni afirmar que todas las funciones están incluidas en todos los planes.

## Dirección visual

Mantener el lenguaje de la home actual: blanco, azul petróleo, verde Himalaya, bordes suaves y composición editorial sobria. La sección nueva aparece después del bloque del Botón de Pánico para pasar de la urgencia a la continuidad del cuidado.

La primera composición en una tarjeta protagonista y dos tarjetas secundarias fue descartada el 2026-09-15: comprimía las capturas, generaba espacios muertos y no permitía leer la interfaz real. El criterio aprobado es priorizar legibilidad aunque la home sea más extensa.

## Estructura

1. Encabezado: “Tu salud, en un solo lugar.”
2. Tres franjas amplias, una por función, alternando texto e imagen para sostener el ritmo visual.
3. Portal del Paciente usa `public/images/app/app-portal-paciente.png` y presenta documentos, búsqueda y consulta.
4. Mis Mediciones usa `public/images/app/app-mis-mediciones.png` y presenta carga, historial y seguimiento.
5. Servicios de Salud usa `public/images/app/showcase-servicios.jpg` y presenta categorías, mapa y búsqueda cercana.
6. Las capturas se muestran grandes, completas y centradas en un marco sobrio de producto; no como miniaturas dentro de tarjetas.
7. Nota final: las funciones disponibles dependen del plan contratado.
8. CTA contextual a los planes, sin crear rutas ficticias.

## Comportamiento

La sección es estática y responsive. En escritorio cada franja usa dos columnas con una captura de aproximadamente 320–360 px de ancho; en celular pasa a una columna y conserva una captura grande, sin recortes que oculten la función principal. Las capturas se presentan como material de producto y no consultan datos clínicos en tiempo real ni cambian el flujo de contratación. Los CTA llevan a `#planes` o a las guías existentes. La navegación conserva el ancla `#producto` y los nombres actuales del catálogo.

## Verificación

Probar TypeScript, lint, tests y build. Revisar desktop, 390 px y 320 px, con atención a la maqueta principal y a la legibilidad de las tarjetas.
