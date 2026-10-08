# Generador de misiones de la Antigua República

Proyecto de práctica de JavaScript inspirado en el generador de mensajes aleatorios
de Codecademy, integrado en la página SWTOR Legends Club.

## Tres fuentes de datos

Son tres listas escritas en script.js, sin servicios externos:
- destinations: cinco destinos, como Korriban y Tython.
- objectives: cinco objetivos, como recuperar un holocrón.
- conditions: cinco condiciones, como no utilizar la Fuerza.

Cada llamada a generateMission() selecciona un elemento de cada lista por separado
con Math.random() y construye una frase. Hay 125 combinaciones posibles (5 × 5 × 5).
Una misión puede repetirse: es un resultado válido de una selección aleatoria.

## Ejecutar en Node y VSCode

Instala Node.js si tu terminal no reconoce node. Abre esta carpeta en VSCode
(Archivo > Abrir carpeta) y abre Terminal > Nuevo terminal. Desde la carpeta que
contiene script.js ejecuta:

    node script.js

La consola muestra una misión. Repite el comando para realizar otra selección.
No necesitas npm install ni dependencias externas.

## Versión web

Abre Index.html en tu navegador desde el explorador de archivos. También puedes
usar la extensión opcional Live Server de VSCode. No hace falta un servidor:
los scripts clásicos funcionan al abrir el archivo directamente.

Se muestra una misión inicial. Pulsa "Generar otra misión" para realizar otra
selección. Puedes llegar al botón con Tab y activarlo con Enter o Espacio.
El mensaje es una región de estado para tecnologías de asistencia.

## Estructura

- Index.html: página del club y sección accesible del generador.
- Resources/Index.css: estilos del club y del generador, adaptables a móvil.
- Resources/IMG/peakpx.jpg: fondo original.
- script.js: datos, selección aleatoria y construcción del mensaje; también
  exporta las funciones para Node sin depender del DOM.
- browser.js: busca los controles, escucha el botón y muestra el resultado.

## Seguimiento con Git

El historial local registra la página original y la implementación terminada.
Puedes revisarlo desde la terminal con:

    git log --oneline
    git status

No se ha publicado en GitHub. La entrega remota y las tareas administrativas del
tablero de Codecademy se realizan aparte.
