# FitVida Wellness Studio - Práctica Angular Material

**Alumno/a:** Jolman Gordillo
**Módulo:** DAW M09
**Unidad:** Unidad 4 — Angular y Material

---

## Ejecución del proyecto

Para ejecutar el proyecto localmente y verificar su funcionamiento, sigue estos pasos:

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Iniciar el servidor local de desarrollo de Angular:
   ```bash
   ng serve
   ```
3. Abrir un navegador y visitar `http://localhost:4200`.

---

## Notas de compatibilidad Material 3 (Angular 18/19)

El mandato de la práctica solicita usar la clave de color `secondary: mat.$orange-palette` usando la actual función `mat.define-theme()` y en M2 hues (50, 500, 700, 900). 
Al estar este proyecto bajo Angular 19 utilizando Angular Material 3, la clave `secondary` fue reemplazada por la estructura interna en la definición del tema y ahora utilizamos `tertiary` para establecer la paleta de colores secundaria u otros acentos personalizados en el tema, y la escala de "hue" ha cambiado (ej. 90, 50, 40, 10 en reemplazo a 50, 500, 700, 900).

Los valores han sido equivalidos a las reglas de compilación estricta de Material 3 para que el bundle levante exitosamente con `ng serve` sin arrojar advertencias ni errores en el log, cumpliendo textualmente los objetivos de la práctica.

*El código del tema modificado para incluir `tertiary:` se encuentra en `src/styles.scss` y `src/app/hero-card/hero-card.scss`*.

---

## Captura de Pantalla

*(Inserta aquí tu captura de pantalla de la página web renderizada en el navegador con ng serve)*
![Captura del sitio web](./captura.png)
