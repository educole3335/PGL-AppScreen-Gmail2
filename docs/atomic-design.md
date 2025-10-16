# Atomic Design aplicado al proyecto

En este documento explico cómo he organizado los elementos visuales de la app siguiendo el principio de Atomic Design y cómo se han mapeado a componentes de React Native (tanto nativos como propios).

## Resumen (contrato)
- Inputs: Props de cada componente (p. ej. `item`, `data`).
- Outputs: UI compuesta y reusabilidad entre pantallas.
- Modos de fallo: Props ausentes o datos vacíos (se usan valores por defecto y comprobaciones simples).
- Criterio de éxito: Componentes pequeños, testables y reutilizables. UI que reproduce la maqueta proporcionada.

## Atomos
Elementos más pequeños y primitivos; en este proyecto uso principalmente componentes nativos y pequeñas primitivas estilizadas:
- `Text`, `View`, `Image` (React Native).
- Iconos de `@expo/vector-icons` (ej.: `MaterialIcons`, `MaterialCommunityIcons`).
- Estilos y colores definidos inline o en `StyleSheet`.

Estos átomos no están todos extraídos en ficheros separados, ya que son los elementos básicos que usan los componentes propios.

## Moléculas
Combinaciones simples de átomos que forman piezas reutilizables:
- Avatar circular con inicial: presente dentro de `ListItem` y `SuggestedCard` (un `View` con `Text`).
- Fila de archivo (ícono + títulos) dentro de `SuggestedCard`.

Moléculas implementadas como partes dentro de componentes, no como ficheros independientes, porque su uso es específico al componente contenedor.

## Organismos
Componentes compositados que forman secciones completas de la pantalla:
- `Header` (`components/header/Header.tsx`) — barra superior con buscador y avatar.
- `Body` (`components/body/Body.tsx`) — contenido principal; incluye `SuggestedCard` y la lista de `ListItem`.
- `BottomBar` (`components/footer/BottomBar.tsx`) — barra inferior con botones y FAB.
- `SuggestedCard` (`components/sugg/SuggestedCard.tsx`) — tarjeta que muestra archivos sugeridos.
- `ListItem` (`components/list/ListItem.tsx`) — elemento de lista para items compartidos.

Estos organismos están organizados dentro de la carpeta `components/` en subcarpetas por responsabilidad.

## Templates / Pages
La aplicación principal (entrada) combina los organismos en la pantalla completa. En este proyecto, `App.tsx` actúa como la página que monta `Header`, `Body` y `BottomBar`.

## Nombres de componentes (listado)
- `Header` (organismo)
- `Body` (organismo)
- `BottomBar` (organismo)
- `SuggestedCard` (organismo / patrón compuesto)
- `ListItem` (organismo / componente de lista)

## Decisiones de diseño importantes
- Reutilicé iconos de `@expo/vector-icons` para consistencia y peso reducido.
- Preferí mantener pequeñas moléculas dentro del mismo archivo cuando tienen uso localizado (menor sobre-ingeniería).
- Uso de `StyleSheet.create` para agrupar estilos por componente y mantener rendimiento.

## Casos límite y consideraciones
- Datos vacíos: `SuggestedCard` renderiza un conjunto por defecto de `files` si `data.files` está vacío.
- Iconos dinámicos: `ListItem` permite `iconName` para renderizar un icono en lugar de inicial.

---

Archivo referenciado: `components/header/Header.tsx`, `components/body/Body.tsx`, `components/footer/BottomBar.tsx`, `components/list/ListItem.tsx`, `components/sugg/SuggestedCard.tsx`.
