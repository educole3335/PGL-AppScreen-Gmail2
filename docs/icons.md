# Iconos utilizados en el proyecto

En esta tabla se listan los iconos que se han incorporado al proyecto y cómo se han implementado. Todas las importaciones se hacen desde `@expo/vector-icons`.

| Icono | Componente / Lugar | Biblioteca | Comentarios |
|---|---:|:---:|---|
| `menu` | `Header` (botón izquierdo) | `MaterialIcons` | Ícono de menú en el campo de búsqueda.
| `keyboard-arrow-down` | `Body` (sección) | `MaterialIcons` | Flecha descendente en el header de sección.
| `view-grid-outline` | `Body` (botones) | `MaterialCommunityIcons` | Alternativa de vista en la cabecera de la lista.
| `add` | `BottomBar` (FAB) | `MaterialIcons` | Botón principal de acción flotante.
| `check-box` | `BottomBar` | `MaterialIcons` | Botón de prioridad.
| `view-grid` | `BottomBar` | `MaterialCommunityIcons` | Botón workspaces.
| `people` | `BottomBar` | `MaterialIcons` | Botón Shared (activo con fondo blanco).
| `folder` | `BottomBar` | `MaterialIcons` | Botón Files.
| `dots-vertical` | `ListItem` | `MaterialCommunityIcons` | Menú de opciones a la derecha del item.
| `file-excel` / `file` | `SuggestedCard` (file rows) | `MaterialCommunityIcons` | Iconos que representan tipos de archivo.
| `link` | `Body` (uno de los sharedItems) | `MaterialCommunityIcons` | Ejemplo de item con icono en avatar.

## Implementación (ejemplo)
Importación:

```js
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
```

Uso (ejemplo en JSX):

```jsx
<MaterialIcons name="menu" size={22} color="#CFD8DC" />
<MaterialCommunityIcons name="view-grid-outline" size={18} color="#CFD8DC" />
```

## Notas
- Se eligió `@expo/vector-icons` por su compatibilidad y variedad. En proyectos que no usen Expo se puede instalar `react-native-vector-icons` y el patrón de uso es similar.
- Si todos los iconos pertenecen a la misma librería (como aquí), basta con importar los conjuntos necesarios y usarlos de forma directa.
