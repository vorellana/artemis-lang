# Another interpreted language

Como parte de el proyecto Artemisa 1 🚀, donde se pondra en orbita la nave espacial Orion durante
25 dias, se require contar con un lenguaje de programacion al interior de la nave que pueda ser ejecutado
en cualquier momento, sin necesidad de compilacion, por medio de peticiones http usando formato JSON.

Como solucion propones crear AIL (another interpreter language), el cual podra ejecutar expresiones booleanas,
y tener constantes, lo cual sera lo minimo suficiente para controlar la nave desde tierra.

## Stack requerido

- El unico requisito obligatorio es que el backend y frontend esten escritos en `typescript` usando la base que se da en este repositorio

**Frameworks y otras librerias se dejan a libre eleccion, tanto para el front como para el backend**

Las expresiones que eliges para soportar en el lenguaje son las siguientes:

```ts
enum ExpressionType {
  If = "if",
  And = "and",
  Or = "or",
  Not = "not",
  Const = "const",
  Eq = "eq",
  // String specific functions
  StringToLower = "to-lower",
  StringToUpper = "to-upper",
}
```

Las cuales estaran tipadas como se muestra a continuacion (el proyecto incluye la base para construir el lenguaje)

```ts
interface BaseExpression<T implements ExpressionType, P=any> {
    type: ExpressionType,
    payload: <P>
}

type If = BaseExpression<
    ExpressionType.If,
    {
        test_expression: Expression,
        if_true: Expression,
        if_false: Expression
    }
>

type Const = BaseExpression<
    ExpressionType.Const,
    {
        type: "string" | "number" | "boolean",
        value: any
    }
>

type And = BaseExpression<
    ExpressionType.And,
    {
        expressions: Array<Expression>
    }
>

type Expression = If | And | Const
```

## Fase 1

La tarea sera implementar la funcion `evaluate` que tendra como input una `expresion` y como output dara la evaluacion de esta, ejemplo:

**La funcion evaluate a implementar esta en `src/runtime/evaluation.ts`**

```ts
const expression: Expression = {
  type: ExpressionType.If,
  payload: {
    test_expression: {
      type: ExpressionType.Const,
      payload: {
        type: "boolean",
        value: false,
      },
    },
    if_false: {
      type: ExpressionType.Const,
      payload: {
        type: "string",
        value: "test expression is false",
      },
    },
    if_true: {
      type: ExpressionType.Const,
      payload: {
        type: "string",
        value: "test expression is true",
      },
    },
  },
};

const result = evaluate(expression);

assert.equal("test expression is false", result);
```

**Se adjunta una amplia gama de tests, los cuales pueden ser ejecutados usando el comando `npm run test:unit`, estos sirven a modo de ejemplo y de apoyo para saber si vas por buen camino**

## Fase 2

Luego de esto, para que la nave se pueda acceder via http, deberas hacer que esta funcion este disponible desde un enpoint bajo la ruta
`/ship/evaluate`

Por ejemplo, se espera que

```bash
curl -X POST -H "Content-Type: application/json" --data '{"type": "not", "payload": {"expression":  {"type": "const", "payload": {"value": false}}}}' localhost:3000/ship/evaluate
```

De como resultado

```txt
true
```

Otro ejemplo

```bash
curl -X POST -H "Content-Type: application/json" --data '{"type": "const", "payload": {"value": "hello world!"}}' localhost:3000/ship/evaluate
```

De como resultado

```txt
hello world!
```

**Las librerias y/o frameworks para el servidor http es de libre eleccion**

## Fase 3

Para tener facil acceso a las funcionalidades de la nave, crea un frontend que permita enviar la expresion en formato string a la nave y mostrar el output tambien en formato string.

**Las librerias y/o frameworks para el frontend son de libre eleccion**

## Criterios de evaluacion

- Test unitarios pasando al 100%.
- Buen manejo de errores (tanto front como back, entradas desconocidas, paginas no encontradas, etc)
- Test funcionales pasando al 100%.
- Las buenas practicas en el diseno de front y back se tendran en alta estima (muestra tus mejores practicas 😊).
- Amplios conocimientos de herramientas de versionamiento (como git) y sistemas unix like.
- [Opcional] Deployment en un sitio accesible publicamente, la nube o metodo de despliegue (lambda, docker, etc etc) queda a tu eleccion. `Pro tip: los metodos de despliegue, su forma y su calidad suman puntos`
- [Opcional] Infraestructura como codigo para los artefactos de deployment

## Que hay en el repo

### lang

En este folder esta la base de el lenguaje y lo necesario para escribir expresiones con este

### runtime

#### evaluation.ts

En este archivo debera ir la implementacion de la funcion que se encargara de evaluar las expresiones dadas.

#### evaluation.test.ts

Un amplio conjunto de ejemplos y tests que te ayudaran a entender y probar tu solucion

## Comandos

### Instalar dependencias

```bash
npm install
```

### Ejecutar tests unitarios (al inicio fallaran off course, al no estar implementada la funcion evaluate 🫣, tu tarea es hacer que pasen todos los test)

```bash
npm run test:unit
```

### Ejecutar tests funcionales (estos testearan tu endpoint)

_Recuerda que debes definir la variable de entorno SHIP_URL que sera la url usada
para testear fucionalmente la app_

**Recuerda tambien anadir http o https al inicio de la URL, dado que se usa
la funcion standard `fetch` el protocolo es requerido**

```bash
SHIP_URL='http://localhost:3000' npm run test:functional
```

##### hint (si llegaste aca y no sabes como empezar :v 😝)

##### _En la carpeta `chore/hint` puedes encontrar una implementacion de un lenguaje similar al de la prueba, que te puede ayudar a entender conceptos basicos de larecursion que te serviran_
