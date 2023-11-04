# Prueba Técnica de Mercado Libre

Este repositorio contiene un proyecto de prueba técnica para Mercado Libre. El proyecto consta de tres páginas: un buscador, una página de resultados y una página de detalle de cada producto.

## Tecnologías Utilizadas

El proyecto se divide en dos partes: el frontend y el backend, cada uno con sus propios archivos `package.json`. A continuación, se detallan las tecnologías utilizadas en cada parte:

### Frontend

El frontend está desarrollado utilizando las siguientes tecnologías:

- [Next.js](https://nextjs.org/): Framework de React para aplicaciones web.
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Sass: Preprocesador CSS para estilizar la aplicación.
- TypeScript: Lenguaje de programación tipado.
- ESLint: Herramienta de análisis estático de código para mantener un código limpio y consistente.

El archivo `/pruebaTecnica/frontend/package.json` contiene las dependencias y scripts necesarios para ejecutar el frontend.

### Backend

El backend está desarrollado utilizando las siguientes tecnologías:

- Node.js: Entorno de ejecución de JavaScript.
- Express.js: Framework para construir aplicaciones web en Node.js.
- TypeScript: Lenguaje de programación tipado.
- Axios: Cliente HTTP para realizar peticiones a servicios externos.
- Dotenv: Cargador de variables de entorno desde un archivo `.env`.

El archivo `/pruebaTecnica/backend/package.json` contiene las dependencias y scripts necesarios para ejecutar el backend.

## Instrucciones de Instalación

Requisito: node >= 18

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/9alex12/pruebaTecnicaMeli.git
```

2. Instala las dependencias del frontend y el backend. Desde la carpeta raíz del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

3. Una vez instaladas las dependencias, puedes ejecutar el proyecto con el siguiente comando:

```bash
npm start
```

Este comando utilizará npm-run-all para ejecutar simultáneamente el frontend y el backend. El frontend estará disponible en http://localhost:3000 y el backend en http://localhost:4000.

## Uso
- La página de búsqueda se encuentra en http://localhost:3000.
- Los resultados de la búsqueda se mostrarán en http://localhost:3000/items.
- Al hacer clic en un producto en la página de resultados, se redirigirá a la página de detalle del producto en http://localhost:3000/items/{id}.
¡Disfruta explorando la prueba técnica de Mercado Libre!
