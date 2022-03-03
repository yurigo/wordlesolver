# Wordle Solver

solver.js es una IA &lt;sarcasm&gt;sofisticadísima&lt;/sarcasm&gt; que implementa un algorítmo para ayudarnos a solucionar este [juego](https://wordle.danielfrg.com/).

A día de hoy sólo se está ejecutando en el terminal.  Deberíamos implementar un servicio web RPC que nos permita ejecutarlo desde cualquier navegador o cliente web.

Recordad:

Actualmente, existe un filtro para quedarnos con aquellas palabras que sus 5 letras son diferentes.  Deberíamos implementar un mecanismo que nos permitiera activar
o desactivar este filtro a nuestra merced.  Ya que para los primeros intentos podemos aprovecharnos de dicho filtro para eliminar muchas opciones, pero a medida que 
tenemos menos intentos deberíamos considerar que sí pueden haber repeticiones.

```
palabrasSinGuion = palabrasSinGuion.filter(palabra => {
    return new Set(palabra.split('')).size == 5
})
```

Si quereis, podeis mejorar el algoritmo para afinar mejor los resultados.

