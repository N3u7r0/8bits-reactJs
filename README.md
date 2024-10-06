8-bits reactJs.
Developer: Brian Sabatini.

Dependencias

Copiar
npm i sass
npm react-router
npm react-router-dom

---

## Recomendado leer antes de usar o visualizar la app.

------------------------!!!!!! lógica !!!!!----------------------------

!! Archivos barril !! Todos los archivos que están en las carpetas integran un archivo index.js para mejor accesibilidad en uso de rutas.

!! Pages !! Pages contiene una sola carpeta de estilos para todos sus archivos jsx.

!! Helper !! La carpeta helper contiene un js que tiene la lógica de leer el archivo json que se archive en la carpeta data y subirlo a Firebase.

!! Custom hooks !!!
 La lógica de las llamadas a la base de datos (los ROMs) se guarda en archivos separados. Uno para obtener los datos a nivel documento y otro para tomar el ID. Esto podría mejorarse en un solo componente, pero da la oportunidad de darte una herramienta futura al guardar uno por ID. Los returns de los custom hooks son utilizados en los componentes ItemListContainer.jsx e ItemDetailContainer.jsx por medio de props.

!! Firebase !!
 El proyecto está conectado a Firebase. Para el uso en desarrollo, esto está desconectado en Roms.jsx y es reemplazado por el JSON con la data para no utilizar el máximo de llamadas.

------------------------!!!!!! Estilos !!!!!---------------------------

El proyecto está planteado con estilos personalizados, se utilizó Sass para poder mantener prolijidad y la accesibilidad para mixins si se llega a necesitar.

!!! Background !!!
El img_background.gif se utiliza en Layout.jsx. La lectura del mouse relativa al background está conectada bajo un script directo en index.html. Esto es un punto a mejorar guardándolo en un archivo aparte.

""Estilos de pages""
Sass encargado de todos los estilos del div de h1 y todos los bordes y backgrounds de los divs de uso a nivel carpeta (/pages).

!! Fuentes !!
Las fuentes son de Google y están conectadas en el head del index.html. Los h1 y h2 son los que reciben la fuente full color. Las fuentes son de uso global en el proyecto.

Concepto
La idea es que el proyecto tenga la posibilidad de ser escalable y de fácil mantenimiento, por eso se eligió React. Se hace hincapié en el uso de estilos sin librerías de UI, pero posiblemente se use swal2 en algún momento para agilizar un poco.

¡Muchas gracias por echarle un ojo!

Brian Fabián Sabatini.
