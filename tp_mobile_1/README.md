## Respuestas

1. En la clase, el ejercicio de tres contadores tenía el useState adentro de <Contador />. Acá te pedimos lo contrario. ¿Por qué acá el estado tiene que vivir en el padre? (Pista: pensá en el Ejercicio 3.)
   - Respuesta: En este caso es preferible tener los contadores en el padre para poder agregar mensajes como que equipo está ganando o reiniciar el partido.
     Si el estado viviese dentro de cada componente se volvería mucho más dificil
2. Adentro de PanelEquipo, ¿cómo le pasás el onAnotar a cada botón? ¿Por qué no alcanza con onPress={onAnotar}?
   - Respuesta: En mi caso, utilizando la técnica de currying, al crear los botones para sumar puntos ya dejo guardado a que team va cada botonera. Luego le llega solo la función que va a recibir por parametros los puntos.
     Si no se le pasa el equipo o los puntos es imposible anotar a que equipo pertenecen esos puntos
