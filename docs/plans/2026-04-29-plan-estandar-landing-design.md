# Plan Estandar Landing Design

## Objetivo

Crear una pagina de prueba en `/plan-estandar` para evaluar una landing comercial de Himalaya Salud inspirada en la pieza visual provista. La pagina no reemplaza la home actual.

## Enfoque

La primera version prioriza fidelidad visual sobre expansion de contenido. Debe comunicar el plan estandar, el precio, los 30 dias gratis y las tres herramientas principales: portal paciente, boton de emergencia y mapa de instituciones.

## Estructura

1. Hero con logo real, badge de plan, titular, precio, CTA y mockup de telefono.
2. Seccion de tres herramientas esenciales con iconografia y mini pantallas recreadas en CSS.
3. Franja de confianza con seguridad, facilidad de uso y grupo familiar.
4. CTA final para iniciar la prueba gratuita.

## Implementacion

La landing se implementa como una pagina aislada de Next.js en `src/app/plan-estandar/page.tsx`. Usa Tailwind CSS y `lucide-react`, sin nuevas dependencias. Los assets de marca se sirven desde `public/branding`.

## Verificacion

Ejecutar build del proyecto y revisar visualmente la ruta `/plan-estandar` en desktop y mobile.
