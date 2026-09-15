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

## Estructura

1. Encabezado: “Tu salud, en un solo lugar.”
2. Panel principal de Portal del Paciente, con una representación visual de documentos/estudios y estados de consulta. Es una maqueta ilustrativa, no datos reales.
3. Dos tarjetas complementarias: Mis Mediciones y Servicios de Salud, con visuales abstractos de evolución y ubicación, sin inventar métricas ni instituciones.
4. Nota final: las funciones disponibles dependen del plan contratado.
5. CTA contextual a los planes, sin crear rutas ficticias.

## Comportamiento

La sección es estática y responsive. Los CTA llevan a `#planes` o a las guías existentes. No consulta datos clínicos ni cambia el flujo de contratación. La navegación conserva el ancla `#producto` y los nombres actuales del catálogo.

## Verificación

Probar TypeScript, lint, tests y build. Revisar desktop, 390 px y 320 px, con atención a la maqueta principal y a la legibilidad de las tarjetas.
