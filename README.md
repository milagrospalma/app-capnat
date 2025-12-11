# CapNat

Aplicación para capturar, identificar y gestionar especies de flora y fauna.

## 🎯 Características

- 🔐 **Autenticación de usuarios** con Firebase Authentication
- 🗺️ **Visualización de mapa interactivo** con pins de especies capturadas
- 📸 **Captura de especies** (Animales y Plantas) con reconocimiento simulado
- 📋 **Historial de capturas** personalizado por usuario
- 🔔 **Sistema de notificaciones** dinámico
- 📱 **Diseño responsive** optimizado para móviles
- 🎨 **Interfaz moderna** con Bootstrap 5

## 🛠️ Tecnologías

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (Vanilla ES6+)
  - Bootstrap 5.3.8

- **Backend/Servicios:**
  - Firebase Authentication (Email/Password)
  - LocalStorage (almacenamiento local de capturas)

## 📁 Estructura del Proyecto

```
app-capnat/
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos personalizados
│   ├── img/                     # Imágenes de especies
│   └── js/
│       ├── app.js               # Lógica principal (auth, navegación, modals)
│       └── pages.js             # Lógica de páginas (historial, detalle, especies)
├── pages/
│   ├── historial.html           # Página de historial de capturas
│   └── detalle.html             # Página de detalle de especie
└── index.html                   # Página principal (SPA con múltiples vistas)
```

## 📱 Funcionalidades Principales

### Autenticación
- ✅ Registro de nuevos usuarios
- ✅ Inicio de sesión con email y contraseña
- ✅ Cierre de sesión
- ✅ Gestión de estado de autenticación
- ✅ Mostrar/ocultar contraseña

### Captura de Especies
- 📸 Simulación de reconocimiento de especies
- 💾 Guardado de capturas con ubicación en el mapa
- 📍 Visualización de pins en el mapa

### Historial
- 📋 Lista de especies capturadas
- 🔍 Filtrado por categoría (Animales/Plantas)
- 🗑️ Eliminación de capturas
- 🔗 Navegación a detalles de especie

### Mapa Interactivo
- 🗺️ Visualización de especies en el mapa
- 📌 Pins dinámicos con colores según categoría
- 🎨 Estados visuales
- 📍 Posicionamiento de capturas

## 🎨 Características de UI/UX

- **Modals:** Confirmaciones y mensajes importantes
- **Toasts:** Notificaciones
- **Dropdowns:** Menú principal y notificaciones
- **Responsive:** Adaptado para móviles y desktop
- **Accesibilidad:** ARIA labels y navegación por teclado

## 📊 Almacenamiento de Datos

### LocalStorage
- `misCapturas`: Array de capturas del usuario
- `especiesOcultas`: IDs de especies eliminadas de la lista
- `userName`, `userEmail`, `userId`: Información del usuario autenticado
- `especieReconocida`: Especie reconocida
- `especieSeleccionada`: Especie seleccionada para ver detalles
- `cameraType`: Tipo de cámara seleccionada (animal/planta)
- `tabActivo`: Tab activo en historial
- `modoAvanzado`: Preferencia de nivel de información

### Firebase
- **Authentication:** Usuarios registrados y autenticados

## 🔧 Scripts y Funciones Principales

### `app.js`
- `showView()`: Navegación entre vistas
- `renderMapPins()`: Renderizado de pins en el mapa
- `updateUserProfile()`: Actualización del perfil en el menú
- `setupPasswordToggle()`: Toggle de mostrar/ocultar contraseña
- `showToastBackdrop()` / `hideToastBackdrop()`: Control para la ubicación a guardar

### `pages.js`
- `loadEspecies()`: Carga y renderizado de especies en historial
- `createEspecieItem()`: Creación de items de especie
- `loadEspecieDetail()`: Carga de detalles de especie
- `ejecutarEliminacion()`: Eliminación de capturas

## 🌐 Despliegue

Este proyecto está desplegado en **GitHub Pages**: https://milagrospalma.github.io/app-capnat/
