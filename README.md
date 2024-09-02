# Proyecto de React con TypeScript

Este proyecto es una aplicación web desarrollada con React y TypeScript. A continuación, se detalla la estructura de los archivos y directorios del proyecto.

## Estructura del Proyecto

```bash
node_modules/               # Dependencias del proyecto
src/                        # Carpeta principal del código fuente
├── assets/                 # Archivos estáticos (imágenes, fuentes, etc.)
├── components/             # Componentes reutilizables de la aplicación
├── pages/                  # Páginas principales del proyecto
│   ├── private/            # Páginas privadas (requieren autenticación)
│   │   ├── createProperty/ 
│   │   │   ├── components/          # Componentes específicos de CreateProperty
│   │   │   └── CreatePropertyPage.tsx # Página para crear propiedades
│   ├── public/             # Páginas públicas
│   │   ├── home/ 
│   │   │   ├── components/          # Componentes específicos de Home
│   │   │   └── home.page.tsx        # Página de inicio
├── utilities/              # Utilidades y funciones auxiliares
├── interfaces/             # Definiciones de interfaces TypeScript
│   └── property.interface.ts # Interfaz para la entidad "Property"
├── App.tsx                 # Componente principal de la aplicación
├── App.css                 # Estilos globales de la aplicación
├── index.tsx               # Punto de entrada de la aplicación
├── index.css               # Estilos globales
├── main.tsx                # Configuración principal de la aplicación
├── theme.ts                # Definición del tema y estilos globales
├── vite-env.d.ts           # Configuración de tipos para Vite
.gitignore                  # Archivos y carpetas ignoradas por Git
eslint.config.js            # Configuración de ESLint
index.html                  # Archivo HTML principal
package-lock.json           # Control de versiones de las dependencias
```



## Instalación

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Scripts Disponibles

- `npm dev` - Inicia la aplicación en modo de desarrollo.

