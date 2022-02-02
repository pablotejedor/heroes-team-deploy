# Heroes-App

App creada como parte del challenge de ingreso para Alkemy.


# Información importante para quien corrija el challenge:
Para usar esta app, es absolutamente necesario entrar a [este link](https://cors-anywhere.herokuapp.com/) y hacer click en el único botón de la página. Esto es debido a que la api que me solicitaron que use no devuelve los headers necesarios para que te permita hacer las request. Al hacer click en el botón, cors-anywhere actúa de 'intermediario' entre el usuario y la api y le solicita los headers necesarios.

## Sobre la inconsistencia de la falta de datos
Aquellos héroes cuyos powerstats y características físicas (altura y peso) sean null, serán considerados como cero para el acumulado de powerstats y promedio de altura-peso del equipo, respectivamente.
Inicialmente consideré la opción de no permitir que te deje agregar héroes sin datos completos al equipo, pero al final decidí hacerlo de ésta forma.

## Sobre el requisito de la orientación de los héroes
Debido a que uno de los requerimientos del challenge es que el equipo debe estar conformado sí o si por tres héroes con orientación buena y tres con orientación mala, la aplicación NO permite agregar héroes con orientación neutral o sin orientación. Para facilitar esto, los héroes con orientación buena tienen un background color azul, los malos rojo, y los neutrales/sin orientación, blanco.

## Sobre los powerstats
Con respecto al acumulado de powerstats, se ordenarán de mayor a menor automáticamente, de izquierda a derecha. En el caso de ver la aplicación en un dispositivo con un viewport mas chico, se ordenarán de arriba hacia abajo.

