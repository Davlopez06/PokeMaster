
# Individual Project -Pokemon

<img height="150" src="./pokeball.png" />

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Mongoose.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

## Comenzando

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

__ACLARACIÓN:__ Las dependencias actuales se encuentran en las versiones que venimos trabajando durante el bootcamp.

Versiones:

- __react__: 18.2.0
- __react-dom__: 18.2.0
- __react-router-dom__: 6.4.1
- __redux__: 4.2.0
- __react-redux__: 8.0.4

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
MONGODB_URI : Debe contener la cadena de conexión con mongo atlas
```

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [pokeapi](https://pokeapi.co/) y a partir de ella poder, entre otras cosas:

- Buscar pokemons
- Filtrarlos / Ordenarlos
- Crear nuevos pokemons



#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Mongoose
- [ ] Express
- [ ] Mongo Atlas

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener

- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /pokemons` y deberá mostrar su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 9 pokemons por pagina.



__Ruta de detalle de Pokemon__: debe contener

- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Estadísticas (vida, ataque, defensa, velocidad)
- [ ] Altura y peso

__Ruta de creación__: debe contener

- [ ] Un formulario  con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon


## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Pokemon con las siguientes propiedades:
  - ID 
  - Nombre
  - Vida
  - Ataque
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre


## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /pokemons__:
  - Obtener un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /pokemons/{idPokemon}__:
  - Obtener el detalle de un pokemon en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
  - Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
- [ ] __GET /pokemons?name="..."__:
  - Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
  - Si no existe ningún pokemon mostrar un mensaje adecuado
- [ ] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos relacionado con sus tipos.
- [ ] __GET /types__:
  - Obtener todos los tipos de pokemons posibles
  - En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

