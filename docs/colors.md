# Colores y constantes

En este proyecto se centralizan los colores en `src/constants/colors.ts` para mantener la consistencia visual.

## Uso de PowerToys para extracción
Se usó Microsoft PowerToys Color Picker para capturar los colores hex desde el diseño.

Pasos resumidos:
1. Ejecutar PowerToys (Win + Shift + C)
2. Apuntar al elemento visual y copiar el valor hex
3. Guardar el valor en `src/constants/colors.ts`

## Ejemplo de `colors.ts`

```typescript
export const colors = {
  background: '#FFFFFF',
  primary: '#1A73E8',
  textPrimary: '#202124',
  textMuted: '#5F6368',
  iconLight: '#9AA0A6',
  accent: '#F1B32C',
};
```

## Cómo usarlo

```typescript
import { colors } from '../constants/colors';

<View style={{ backgroundColor: colors.background }} />
```

Si `src/constants/colors.ts` no existe, crea el archivo con el ejemplo anterior.
