# Documentación de la API de Brewer's Cookbook Server

¡Bienvenido a la documentación de la API de Brewer's Cookbook Server! Esta API sirve como backend para gestionar recetas, ingredientes, estilos e información de usuarios para la aplicación Brewer's Cookbook.

## Tabla de Contenido

1. [Recetas](#recetas)
   - [Obtener Todas las Recetas](#obtener-todas-las-recetas)
   - [Obtener Receta por ID](#obtener-receta-por-id)
   - [Crear Nueva Receta](#crear-nueva-receta)

2. [Ingredientes](#ingredientes)
   - [Obtener Todos los Lúpulos](#obtener-todos-los-lúpulos)
   - [Obtener Todas las Levaduras](#obtener-todas-las-levaduras)
   - [Obtener Todas las Maltas](#obtener-todas-las-maltas)
   - [Obtener Lúpulo por ID](#obtener-lúpulo-por-id)
   - [Obtener Levadura por ID](#obtener-levadura-por-id)
   - [Obtener Malta por ID](#obtener-malta-por-id)
   - [Crear Lúpulo](#crear-lúpulo)
   - [Crear Levadura](#crear-levadura)
   - [Crear Malta](#crear-malta)
   - [Eliminar Lúpulo por ID](#eliminar-lúpulo-por-id)
   - [Eliminar Levadura por ID](#eliminar-levadura-por-id)
   - [Eliminar Malta por ID](#eliminar-malta-por-id)
   - [Actualizar Lúpulo por ID](#actualizar-lúpulo-por-id)
   - [Actualizar Levadura por ID](#actualizar-levadura-por-id)
   - [Actualizar Malta por ID](#actualizar-malta-por-id)

3. [Usuario](#usuario)
   - [Registrar Usuario](#registrar-usuario)
   - [Obtener Todos los Usuarios](#obtener-todos-los-usuarios)
   - [Obtener Usuario por Correo Electrónico](#obtener-usuario-por-correo-electrónico)
   - [Obtener Usuario por ID](#obtener-usuario-por-id)
   - [Eliminar Usuario por ID](#eliminar-usuario-por-id)
   - [Actualizar Usuario por ID](#actualizar-usuario-por-id)

## Recetas

### Obtener Todas las Recetas

- **URL:** [https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas)
- **Método:** `GET`
- **Descripción:** Recupera una lista de todas las recetas.
- **Respuesta:**
  - Éxito: Estado 200 con una matriz de objetos de recetas.
  - Error: Estado 500 con un mensaje de error.

### Obtener Receta por ID

- **URL:** [https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas/:id](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas/:id)
- **Método:** `GET`
- **Descripción:** Recupera una receta específica por ID.
- **Respuesta:**
  - Éxito: Estado 200 con el objeto de la receta.
  - Error: Estado 500 con un mensaje de error.

### Crear Nueva Receta

- **URL:** [https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas)
- **Método:** `POST`
- **Descripción:** Crea una nueva receta.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles de la receta en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 201 con un mensaje de éxito y el nuevo objeto de receta.
  - Error: Estado 500 con un mensaje de error.

## Ingredientes

### Obtener Todos los Lúpulos

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos)
- **Método:** `GET`
- **Descripción:** Recupera una lista de todos los lúpulos.
- **Respuesta:**
  - Éxito: Estado 200 con una matriz de objetos de lúpulos.
  - Error: Estado 500 con un mensaje de error.

### Obtener Todas las Levaduras

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras)
- **Método:** `GET`
- **Descripción:** Recupera una lista de todas las levaduras.
- **Respuesta:**
  - Éxito: Estado 200 con una matriz de objetos de levaduras.
  - Error: Estado 500 con un mensaje de error.

### Obtener Todas las Maltas

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas)
- **Método:** `GET`
- **Descripción:** Recupera una lista de todas las maltas.
- **Respuesta:**
  - Éxito: Estado 200 con una matriz de objetos de maltas.
  - Error: Estado 500 con un mensaje de error.

### Obtener Lúpulo por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos/:id)
- **Método:** `GET`
- **Descripción:** Recupera un lúpulo específico por ID.
- **Respuesta:**
  - Éxito: Estado 200 con el objeto de lúpulo.
  - Error: Estado 500 con un mensaje de error.

### Obtener Levadura por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras/:id)
- **Método:** `GET`
- **Descripción:** Recupera una levadura específica por ID.
- **Respuesta:**
  - Éxito: Estado 200 con el objeto de levadura.
  - Error: Estado 500 con un mensaje de error.

### Obtener Malta por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas/:id)
- **Método:** `GET`
- **Descripción:** Recupera una malta específica por ID.
- **Respuesta:**
  - Éxito: Estado 200 con el objeto de malta.
  - Error: Estado 500 con un mensaje de error.

### Crear Lúpulo

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos)
- **Método:** `POST`
- **Descripción:** Crea un nuevo lúpulo.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles del lúpulo en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 201 con un mensaje de éxito y el nuevo objeto de lúpulo.
  - Error: Estado 500 con un mensaje de error.

### Crear Levadura

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras)
- **Método:** `POST`
- **Descripción:** Crea una nueva levadura.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles de la levadura en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 201 con un mensaje de éxito y el nuevo objeto de levadura.
  - Error: Estado 500 con un mensaje de error.

### Crear Malta

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas)
- **Método:** `POST`
- **Descripción:** Crea una nueva malta.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles de la malta en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 201 con un mensaje de éxito y el nuevo objeto de malta.
  - Error: Estado 500 con un mensaje de error.

### Eliminar Lúpulo por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos/:id)
- **Método:** `DELETE`
- **Descripción:** Elimina un lúpulo específico por ID.
- **Respuesta:**
  - Éxito: Estado 200 con un mensaje de éxito.
  - Error: Estado 500 con un mensaje de error.

### Eliminar Levadura por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras/:id)
- **Método:** `DELETE`
- **Descripción:** Elimina una levadura específica por ID.
- **Respuesta:**
  - Éxito: Estado 200 con un mensaje de éxito.
  - Error: Estado 500 con un mensaje de error.

### Eliminar Malta por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas/:

id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/maltas/:id)
- **Método:** `DELETE`
- **Descripción:** Elimina una malta específica por ID.
- **Respuesta:**
  - Éxito: Estado 200 con un mensaje de éxito.
  - Error: Estado 500 con un mensaje de error.

### Actualizar Lúpulo por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/lupulos/:id)
- **Método:** `PUT`
- **Descripción:** Actualiza un lúpulo específico por ID.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles actualizados del lúpulo en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 200 con un mensaje de éxito y el objeto de lúpulo actualizado.
  - Error: Estado 500 con un mensaje de error.

### Actualizar Levadura por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/ingredientes/levaduras/:id)
- **Método:** `PUT`
- **Descripción:** Actualiza una levadura

## Usuario

### Registrar Usuario

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/register`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/register)
- **Método:** `POST`
- **Descripción:** Registra un nuevo usuario.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles del usuario en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 201 con un mensaje de éxito y el nuevo objeto de usuario.
  - Error: Estado 500 con un mensaje de error.

### Obtener Todos los Usuarios

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/)
- **Método:** `GET`
- **Descripción:** Recupera una lista de todos los usuarios.
- **Respuesta:**
  - Éxito: Estado 200 con una matriz de objetos de usuarios.
  - Error: Estado 500 con un mensaje de error.

### Obtener Usuario por Correo Electrónico

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/name`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/name)
- **Método:** `GET`
- **Descripción:** Recupera un usuario específico por correo electrónico.
- **Respuesta:**
  - Éxito: Estado 200 con el objeto de usuario.
  - Error: Estado 500 con un mensaje de error.

### Obtener Usuario por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/:id)
- **Método:** `GET`
- **Descripción:** Recupera un usuario específico por ID.
- **Respuesta:**
  - Éxito: Estado 200 con el objeto de usuario.
  - Error: Estado 500 con un mensaje de error.

### Eliminar Usuario por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/delete/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/delete/:id)
- **Método:** `DELETE`
- **Descripción:** Elimina un usuario específico por ID.
- **Respuesta:**
  - Éxito: Estado 200 con un mensaje de éxito.
  - Error: Estado 500 con un mensaje de error.

### Actualizar Usuario por ID

- **URL:** [`https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/update/:id`](https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/users/update/:id)
- **Método:** `PATCH`
- **Descripción:** Actualiza un usuario específico por ID.
- **Cuerpo de la Solicitud:**
  - Proporcione los detalles actualizados del usuario en el cuerpo de la solicitud.
- **Respuesta:**
  - Éxito: Estado 200 con un mensaje de éxito y el objeto de usuario actualizado.
  - Error: Estado 500 con un mensaje de error.
