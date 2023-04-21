# Artemis Lang 🚀

Artemis Lang es un lenguaje de programación interpretado creado como parte del proyecto Artemisa 1 para controlar la nave espacial Orion. El proyecto incluye un backend y un frontend escritos en TypeScript, permitiendo ejecutar expresiones booleanas y constantes a través de peticiones HTTP usando formato JSON.

## Tabla de contenidos

- [Introducción](#introducción)
- [Definición del proyecto](#definición-del-proyecto)
- [Frontend en vivo](#frontend-en-vivo)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [CI/CD](#cicd)
- [Cómo levantar el proyecto](#cómo-levantar-el-proyecto)
- [Cómo Ejecutar las pruebas en Backend](#Cómo-Ejecutar-las-pruebas-en-Backend)
- [Cómo Ejecutar las pruebas en Frontend](#Cómo-Ejecutar-las-pruebas-en-Frontend)
- [Capturas de pantalla](#Capturas-de-pantalla)

## Introducción

El objetivo principal de Artemisa Lang es proporcionar un lenguaje de programación fácil de usar y de alto rendimiento para el control de la nave espacial Orion. Con Artemisa Lang, los usuarios pueden enviar expresiones lógicas y constantes a la nave espacial para realizar acciones específicas sin la necesidad de compilación.

## Definición del proyecto

AIL consta de un backend y un frontend que permiten a los usuarios enviar y recibir expresiones booleanas y constantes. El backend está construido en Node.js, Express y TypeScript, mientras que el frontend utiliza React, Express.js y TypeScript.

## Frontend en vivo

Puedes acceder al frontend en vivo en el siguiente enlace: [Artemisa Lang Frontend](http://artemis-frontend-balance-b-1639758126.us-east-1.elb.amazonaws.com/){:target="_blank"}

![alt text](https://github.com/vorellana/artemis-lang/blob/main/resources/images/main.png?raw=true)

## Características

- Lenguaje de programación interpretado
- Backend y frontend escritos en TypeScript
- Manejo y estructura del proyecto en Monorepo (repositorio único)
- Análisis de código estático para mantener la calidad y estilo del código.
- Soporte para expresiones booleanas y constantes
- Comunicación a través de peticiones HTTP usando formato JSON
- API protegida a través de una ApiKey
- Tests unitarios y funcionales (Todos los test pasan al 100%)
- Frontend con diseño responsivo para adaptarse a dispositivos móviles.
- Tests en React (hacia cada componente creado)
- Despliegue continuo en GitHub Actions
- Infraesctructura 100% en Amazon Web Services

## Tecnologías utilizadas

### Backend

- **TypeScript:** Superset de JavaScript con tipado estático
- **Node.js:** Entorno de ejecución para JavaScript
- **Express:** Framework web para Node.js
- **Axios:** Biblioteca para realizar solicitudes HTTP
- **Jest:** Framework de testing para JavaScript
- **Prettier:** Analizador formateador de código
- **ts-node-dev:** Herramienta que reinicia el servidor ante un cambio
### Frontend

- **TypeScript:** Superset de JavaScript con tipado estático
- **React:** Librería para la construcción de interfaces de usuario
- **Next.js:** Framework web para React
- **Tailwind :** Framework CSS
- **Axios:** Biblioteca para realizar solicitudes HTTP
- **Jest:** Framework de testing para JavaScript
- **ESLint:** Analizador de código estático.

### CI/CD

- **GitHub Actions:** Plataforma de automatización de flujos de trabajo y CI/CD
- **Docker:** Plataforma de contenedores

### Infraestructura (Todo en AWS)

- **ECS (Elastic Container Service):** Servicio de orquestación de contenedores.
- **ALB (Application Load Balancer):** Balanceador de carga de aplicaciones.
- **Fargate:** Motor de cómputo sin servidor para contenedores en ECS y EKS.
- **ECR (Elastic Container Registry):** Almacenamiento de imágenes para Docker.
- **IAM (Identity and Access Management):** Servicio de administración de accesos y control de usuarios.

## Cómo levantar el proyecto

    Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina. Luego, sigue estos pasos:

    1. Clona el repositorio en tu máquina local.

        ```
        git clone https://github.com/vorellana/artemis-lang.git
        ```

    2. Abre una terminal y navega hasta la carpeta del proyecto.

        ```
        cd artemis-lang
        ```

    3. Instala todas las dependencias (backend y frontend)

        ```
        npm install
        ```

    4. Navegamos hasta la carpeta del backend

        ```
        cd backend
        ```

    5. Inicia el servidor del backend en modo de desarrollo.

        ```
        npm run dev
        ```

        El servidor estará corriendo en `http://localhost:81`.

    6. En una nueva terminal, navega hasta la carpeta del frontend.

        ```
        cd ../frontend
        ```

    7. Inicia la aplicación del frontend en modo de desarrollo.

        ```
        npm run dev
        ```

        La aplicación estará corriendo en `http://localhost:80`.

    ¡Listo! Con estos pasos ya tendrás el proyecto Artemisa Lang corriendo en tu máquina local.



## Cómo Ejecutar las pruebas en Backend

    1. Abre una terminal y navega hasta la carpeta backend del proyecto.

        ```
        cd artemis-lang
        cd backend
        ```

    2. Ejecuta las pruebas unitarias

        ```
        npm run test:unit
        ```

    3. Ejecuta las pruebas funcionales (la aplicación backend tiene que estar en ejecución)

        ```
        npm run test:functional
        ```

## Cómo Ejecutar las pruebas en Frontend

    1. Abre una terminal y navega hasta la carpeta frontend del proyecto.

        ```
        cd artemis-lang
        cd frontend
        ```

    2. Ejecuta las pruebas unitarias

        ```
        npm run test
        ```

## Capturas de pantalla 

Backend: Pruebas unitarias aprobadas al 100%
![alt text](https://github.com/vorellana/artemis-lang/blob/main/resources/images/unit_test.png)

Backend: Pruebas funcionales aprobadas al 100%
![alt text](https://github.com/vorellana/artemis-lang/blob/main/resources/images/functional_test.png)

Frontend: Pruebas unitarias aprobadas al 100%
![alt text](https://github.com/vorellana/artemis-lang/blob/main/resources/images/front_test.png)

CI/CD: Despliegue exitoso con Github Actions hacia los recursos en AWS
![alt text](https://github.com/vorellana/artemis-lang/blob/main/resources/images/deploy.png)


### Gracias!!!


