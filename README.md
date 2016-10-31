# ML - UX TEST

# Contenido
* [Tutorial](#Tutorial)
    * [Build System](#build-system)
    * [Estructura de Archivos](#estructura-de-archivos)
* [Como Correr la aplicación](#como-correr-la-aplicación)
    * [Dependencias](#dependencias)
    * [Instalación](#instalación)
    * [Correr la aplicación](#correr-la-aplicación)
* [Demo](#demo)
* [Links útiles](#links-útiles)

# Tutorial

## Build System
Este proyecto utiliza [Gulp](http://gulpjs.com/) y [Webpack](https://webpack.github.io/) juntos.

`Webpack` es un module bundler (empaquetador de módulos) muy eficiente para aplicaciones grandes que contienen mucho código JavaScript.
* Puedes generar solo aquellos fragmentos de JS que realmente necesita cada página (haciendo más rápida su carga).
* Tiene varios loaders para importar y empaquetar también otros recursos (CSS, templates, …) así como otros lenguajes (ES6 con Babel, TypeScript, SaSS, etc).
* Sus plugins te permiten hacer otras tareas importantes como por ejemplo minificar y ofuscar el código.

`Gulp` es el orquestador:
* Inicio y llamando Webpack
* Inicio de un servidor de desarrollo
* Actualizando el navegador y la reconstrucción de los cambios del archivo

## Estructura de Archivos
Utilizo un enfoque por componentes para este proyecto
```
client
⋅⋅app/
⋅⋅⋅⋅app.js * archivo de entrada de la aplicación
⋅⋅⋅⋅app.css * estilos generales de la aplicación
⋅⋅⋅⋅app.html * plantilla de aplicación
⋅⋅⋅⋅common/ * funcionalidad pertinente para varios componentes se propagan en este directorio
⋅⋅⋅⋅components/ * donde viven los componentes
⋅⋅⋅⋅⋅⋅components.js * archivo de entrada de componentes
⋅⋅⋅⋅⋅⋅productDetails/ * componente productDetails
⋅⋅⋅⋅⋅⋅⋅⋅productDetails.js * archivo de entrada de productDetails
⋅⋅⋅⋅⋅⋅⋅⋅productDetails.component.js * directiva de productDetails
⋅⋅⋅⋅⋅⋅⋅⋅productDetails.controller.js * controlador de productDetails
⋅⋅⋅⋅⋅⋅⋅⋅productDetails.scss * estilos de productDetails
⋅⋅⋅⋅⋅⋅⋅⋅productDetails.html * vista de productDetails
```

# Como Correr la aplicación
## Dependencias
Herramientas necesarias para ejecutar esta aplicación:
* `node` and `npm`
Una vez que tenga estos, instalar lo siguiente como globales:
`npm install -g gulp webpack`

## Instalación
* `clone` este repo
* `npm install -g gulp webpack` para instalar las dependencias de la CLI globales
* `npm install` para instalar las dependencias

## Correr la aplicación
ui-test utiliza Gulp para construir y poner en marcha el entorno de desarrollo. Después de haber instalado todas las dependencias, puede ejecutar la aplicación
* npm start

# Demo
Puedes ver la demo de la aplicación en el [link](https://ale30p.github.io/ui-test/)

## Links útiles
* [https://github.com/nishantnisonko/gulp-webpack-devserver](https://github.com/nishantnisonko/gulp-webpack-devserver)
* [http://survivejs.com/webpack/introduction](http://survivejs.com/webpack/introduction/)
