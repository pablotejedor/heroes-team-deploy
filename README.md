# Heroes-App

App creada como parte del challenge de ingreso para Alkemy.

## Sobre la inconsistencia de la falta de datos
Aquellos héroes cuyos powerstats y características físicas (altura y peso) sean null, serán considerados como cero para el acumulado de powerstats y promedio de altura-peso del equipo, respectivamente.
Inicialmente consideré la opción de no permitir que te deje agregar héroes sin datos completos al equipo, pero al final decidí hacerlo de ésta forma.

## Sobre el requisito de la orientación de los héroes
Debido a que uno de los requerimientos del challenge es que el equipo debe estar conformado sí o si por tres héroes con orientación buena y tres con orientación mala, la aplicación NO permite agregar héroes con orientación neutral o sin orientación. Para facilitar esto, los héroes con orientación buena tienen un background color azul, los malos rojo, y los neutrales/sin orientación, blanco.

## Sobre los powerstats
Con respecto al acumulado de powerstats, se ordenarán de mayor a menor automáticamente, de izquierda a derecha. En el caso de ver la aplicación en un dispositivo con un viewport mas chico, se ordenarán de arriba hacia abajo.

