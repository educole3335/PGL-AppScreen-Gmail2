# Implementación de un componente propio: `ListItem`

En este documento explico, apoyándome en el código, cómo implementé el componente `ListItem` (`components/list/ListItem.tsx`).

## Propósito
`ListItem` representa un elemento de la lista de "Date shared" en la pantalla principal. Muestra un avatar (inicial o icono), título, subtítulo opcional y una acción de menú lateral.

## Firma / Props
- Prop: `item: SharedItem` (definido en `types/cardtyps.ts`).
  - Campos relevantes: `id`, `title`, `subtitle?`, `avatarText?`, `avatarColor?`, `iconName?`.

## Extracto del código (Descripción)
La estructura principal del componente hace lo siguiente:
1. Contenedor horizontal con espacio entre los elementos.
2. A la izquierda: un círculo (avatar) que muestra o bien un icono (`item.iconName`) usando `MaterialCommunityIcons`, o bien la inicial (`item.avatarText`).
3. Junto al avatar, el bloque de texto con `title` y `subtitle` (si existe).
4. A la derecha, el icono vertical de opciones (`dots-vertical`).

Puntos clave de la implementación:
- Uso de `StyleSheet` para agrupar estilos y mantener rendimiento.
- `item.avatarColor` se usa para variar el color de fondo del avatar; hay un color por defecto `#78909C`.
- Condición para `iconName`:
  - Si `item.iconName` existe: renderiza `<MaterialCommunityIcons name={item.iconName} />` dentro del avatar.
  - Si no: renderiza `<Text>` con la inicial (prop `avatarText`).

## Manejo de casos límite
- Si `subtitle` no existe, no se renderiza la línea de subtítulo.
- Si `avatarText` ni `iconName` están provistos, el componente cae en el texto por defecto (p. ej. mostrar un carácter genérico si se quisiera).

## Beneficios
- Reutilizable: recibe un `SharedItem` y se puede usar en cualquier lista.
- Extensible: soporte para iconos o texto en el avatar, y estilizado por props.

## Fragmento de uso (ejemplo)
En `components/body/Body.tsx` se usa así:

`{sharedItems.map((item) => (<ListItem key={item.id} item={item} />))}`

Esto demuestra la separación de datos y presentación y facilita pruebas unitarias o snapshots.

---

Referencias: `components/list/ListItem.tsx`, `types/cardtyps.ts`.
