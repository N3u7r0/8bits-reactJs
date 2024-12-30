## 8-bits reactJs.
Developer: Brian Sabatini.<br>
<br>
Dependencias<br>
<br>
Copiar  <br>
 npm i <br>
 npm i sass <br>
 npm react-router<br>
 npm react-router-dom<br>
 npm install sweetalert2<br>
 npm install @sweetalert2/theme-dark<br>



para correr:<br>
 npm run dev<br>

## Recomendado leer antes de usar o visualizar la app.

------------------------!!!!!! lógica !!!!!----------------------------<br>

!! Archivos barril !!<br>
 Todos los archivos que están en las carpetas integran un archivo index.js para mejor accesibilidad en uso de rutas.<br>
<br>
!! Pages !!<br> Pages contiene una sola carpeta de estilos para todos sus archivos jsx.

!! Helper !!<br>
 La carpeta helper contiene un js que tiene la lógica de leer el archivo json que se archive en la carpeta data y subirlo a Firebase.<br>
<br>
!! Custom hooks !!!<br>
 La lógica de las llamadas a la base de datos (los ROMs) se guarda en archivos separados. Uno para obtener los datos a nivel documento y otro para tomar el ID. Esto podría mejorarse en un solo componente, pero da la oportunidad de darte una herramienta futura al guardar uno por ID. Los returns de los custom hooks son utilizados en los componentes ItemListContainer.jsx e ItemDetailContainer.jsx por medio de props.
<br>
!! Firebase !!<br>
 El proyecto está conectado a Firebase. Para el uso en desarrollo, esto está desconectado en Roms.jsx y es reemplazado por el JSON con la data para no utilizar el máximo de llamadas.

------------------------!!!!!! Estilos !!!!!---------------------------<br>

El proyecto está planteado con estilos personalizados, se utilizó Sass para poder mantener prolijidad y la accesibilidad para mixins si se llega a necesitar.<br>

!!! Background !!!<br>
El img_background.gif se utiliza en Layout.jsx. La lectura del mouse relativa al background está conectada bajo un script directo en index.html. Esto es un punto a mejorar guardándolo en un archivo aparte.
<br>
""Estilos de pages""<br>
Sass encargado de todos los estilos del div de h1 y todos los bordes y backgrounds de los divs de uso a nivel carpeta (/pages).
<br>
!! Fuentes !!<br>
Las fuentes son de Google y están conectadas en el head del index.html. Los h1 y h2 son los que reciben la fuente full color. Las fuentes son de uso global en el proyecto.
<br>
Concepto<br>
La idea es que el proyecto tenga la posibilidad de ser escalable y de fácil mantenimiento y full responsive. Se hace hincapié en el uso de estilos sin librerías de UI, pero posiblemente se use swal2 en algún momento para agilizar un poco.
se trata de matener la semantica html correcta para una mejor lectura y calificacion.<br>
<br>
¡Muchas gracias por echarle un ojo!<br>
<br>
Brian Fabián Sabatini.<br>
