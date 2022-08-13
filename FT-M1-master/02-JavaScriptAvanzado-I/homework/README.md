
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // Imprime: 10
  console.log(a); // Imprime: 8
  var f = function(a, b, c) {
    b = a;
    console.log(b);  // Imprime: 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);  // Imprime: 9
}
c(8,9,10);
console.log(b);   // Imprime: 10
console.log(x);   // Imprime: 1
```

```javascript
console.log(bar); // Aquí se imprime: undefined porque a la variable bar todavía  
                  //no se le ha asignado ningún valor.
console.log(baz); // Aquí se imprime: undefined, porque a la variable baz en este 
                  //punto todavía no se le ha asignado ningún valor
foo();
function foo() { console.log('Hola!'); }   // Se imprime: Hola!
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Aquí se imprime: Franco.
```

```javascript
var instructor = "Tony";
console.log(instructor); // Se imprime: Tony.
(function() {
   if(true) {
      var instructor = "Franco";  
      console.log(instructor);   // Se imprime: Franco.
   }
})();
console.log(instructor); // Se imprime: Tony.
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // Se imprime: The Flash.
    console.log(pm);         // Se imprime: Reverse Flash.
}
console.log(instructor); // Se imprime: Tony.
console.log(pm);         // Se imprime: Franco.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"         // 2
"2" * "3"       // 6
4 + 5 + "px"    // 9px
"$" + 4 + 5     // $45
"4" - 2         // 2
"4px" - 2       // NaN
7 / 0           // Infinito
{}[0]           // 0
parseInt("09")  // 9
5 && 2          // 2
2 && 5          // 5
2 && 5          // 5
2 && 5          // 5 
2 && 5          // 5
5 || 0          // True
0 || 5          // 5
[3]+[3]-[10]    // 23
3>2>1           // False
[] == ![]       // True
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // Se imprime: undefined, porque la variable a se encuentra en
                   // el Execution Context en la fase de creación con el valor 
                   // undefined y en este punto no se le ha asignado un valor.
                         
   console.log(foo()); // Se imprime: 2 que es lo que retorna la función foo().

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);    // No se imprime nada, porque el parametro false pasado a la
                   // función getFood() hace que se retorne el valor de la
                   // variable snack del Execution Context Global, la cual está 
                   // vacía, ya que la variable snack se declaró con var y en 
                   // este punto aún no se le ha asignado nigún valor.
                   
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());    // Imprime: Aurelio De Rosa, porque 
                                        // el this se refiere a la variable
                                        // fullname dentro del contexto de
                                        // ejecución del objeto prop.

var test = obj.prop.getFullname;

console.log(test());                   // Imprime: Juan Perez, porque la
                                       // variable test está en el contexto
                                       // de ejecución Global y esta variable
                                       // es la que está llamando al this.
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // Se muestran en el orden: 1-3-4, 2 porque la función setTimeout()
            // le aplica un retardo de 1 segundo al console.log linea 182.
```
