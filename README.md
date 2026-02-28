#### 🎬 Filmoteca Digital – Mini Proyecto SAPUI5

Aplicación desarrollada con SAPUI5 que permite gestionar una colección de películas y consultar sus detalles mediante autenticación de usuario.

#### 📌 Descripción del Proyecto
Filmoteca Digital es una aplicación web construida desde cero con SAPUI5 que permite:
Iniciar sesión con usuarios definidos en un modelo JSON.
Visualizar una lista de películas en una tabla.
Crear nuevas películas.
Consultar el detalle de cada película.
Eliminar películas existentes.
Todos los textos de la aplicación están gestionados mediante fichero i18n (Castellano).

🧱 Modelo de Datos
🎥 Películas
Campo	Tipo	Obligatorio
Nombre	String	✅
Año de estreno	Number	✅
Director	String	✅
País de origen	String	✅

👤 Usuarios
Campo	Tipo
Usuario	String
Contraseña	Number

Los usuarios se cargan desde el archivo:
model/usuarios.json


#### 🔐 Funcionalidades

1️⃣ Pantalla de Login
Vista inicial de la aplicación.
Validación contra usuarios.json.
Si las credenciales son correctas → navegación a vista principal.
Si son incorrectas → mensaje de error.
Textos gestionados desde i18n.properties.


2️⃣ Vista Principal (Listado de Películas)
Tabla (sap.m.Table) que muestra:
Nombre
Año de estreno
Director
País de origen
Datos cargados desde peliculas.json.
Incluye:
➕ Botón para crear nueva película.
🗑 Botón eliminar por cada fila.
Click en fila → Navega a vista detalle.


3️⃣ Vista Crear Película
Formulario con todos los campos obligatorios.
Validación de campos requeridos.
Al confirmar:
Se añade la película al modelo JSON.
Navega automáticamente a la vista principal.


4️⃣ Vista Detalle
Muestra todos los datos de la película seleccionada.
Acceso desde selección de fila en la tabla principal.


#### 🌍 Internacionalización (i18n)
Todos los textos de la aplicación se gestionan desde:
i18n/i18n.properties



#### 🛠️ Tecnologías Utilizadas
SAPUI5 (OpenUI5)
MVC Pattern
JSONModel
Routing (manifest.json)
i18n Internationalization
sap.m Controls



#### 🎯 Requisitos Cumplidos
✔ Pantalla de Login con validación desde JSON
✔ Tabla principal con datos desde modelo JSON
✔ Vista detalle accesible desde la tabla
✔ Vista creación con validación obligatoria
✔ Botón eliminar por registro
✔ Navegación entre vistas
✔ Textos gestionados con i18n

## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Fri Feb 27 2026 07:02:33 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.20.4|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>Basic|
|**Service Type**<br>None|
|**Service URL**<br>N/A|
|**Module Name**<br>filmoteca-digital|
|**Application Title**<br>Filmoteca Digital|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.145.0|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## filmoteca-digital

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


