![memoria_curso_fullstack_--002](https://user-images.githubusercontent.com/24917434/32314961-7f535aac-bfaa-11e7-9361-ae5be4b16ea9.jpg)
## Instalar el proyecto

> git clone https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez.git

> cd oscarsuarez

> npm install

> npm start

# Arquitectura de MEAN

![memoria_curso_fullstack_--003](https://user-images.githubusercontent.com/24917434/32315057-dff66a16-bfaa-11e7-990e-966d7d6309d2.png)

- El Cliente (Navegador)

  - Es donde el usuario puede visualizar la aplicación y donde puede interactuar con ella.

- Nube (Internet):

  - La nube hace referencia a servicios que usamos a través de internet.

- El Servidor físico:

  - Es un ordenador que permite usar sus recursos de forma remota a través de una red.

- MongoDB

  - MongoDb es una base de datos NoSql es un tipo de base de datos que no usa la típica estructura de tablas relacionadas sino que almacena los datos con una estructura clave:valor. Pide muy pocos recursos y es fácilmente escalable.

- Mongoose

  - Es una librería que permite conectar una base de datos MongoDb con un servidor NodeJS

- NodeJS:

  - Node es un entorno que permite ejecutar código javascript del lado del servidor.

- ExpressJS

  - Es un framework de NodeJs, encargado de interpretar las peticiones HTTP y recibirlas a través de un Router y redirigir la petición al controller que realiza la petición a la base de datos. También ofrece un motor de plantillas JADE.

- AngularJS

  - Es un framework de javascript que permite la creación de &quot;single page application&quot; lo que permite navegar en una página web sin tener que refrescar todo el contenido de la misma. Su principal característica es el Binding o doble Binding que permite pasar información a través de una variable Scope desde el modelo hacia la parte visual.

## MODELO DE DATOS

![memoria_curso_fullstack_--004](https://user-images.githubusercontent.com/24917434/32315260-bebc472a-bfab-11e7-8f37-502ac2bcb9d9.png)

## CASOS DE USO

 ![memoria_curso_fullstack_--005](https://user-images.githubusercontent.com/24917434/32315287-d3d7ddf4-bfab-11e7-9cb7-37acc04faa6b.jpg)

# DIAGRAMAS

## Diagrama de flujo Cliente-Mascota

![cliente-mascotas](https://user-images.githubusercontent.com/24917434/32315526-b01c60d2-bfac-11e7-9a7a-d83eb5fe1790.PNG)

## Diagrama de flujo Calendario-Cita

![calendario-citas](https://user-images.githubusercontent.com/24917434/32315625-274c4ab4-bfad-11e7-8b93-32180ac8986e.png)

 # Servicios REST publicados

### Implementación CRUD Pet

- Schema para MongoDB del modelo Pet

  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/master/models/pet.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/master/models/pet.js)

- Servicios REST:

  Líneas donde se define una ruta base /api a las url REST de pet
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/app.js#L15](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/app.js#L15)
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/app.js#L34](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/app.js#L34)

  Enlace a la línea donde está la definición de la url REST para el método GET que permite obtener un animal por su ID.
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/routes/pet.js#L10](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/routes/pet.js#L10)

  Enlace al inicio de la función donde se realiza la petición a la base de datos y obtiene el resultado de la misma
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/controllers/pet.js#L18](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/controllers/pet.js#L18)

# Controlador Angular

### Componente.js

Línea donde se define el nombre del módulo y el del componente.
- Y a continuación se le indica la ruta de la plantilla HTML.
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.component.js#L3](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.component.js#L3)

- Linea donde empieza la petición http get para obtener el json con los detalles del pet
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.component.js#L23](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.component.js#L23)

- En la siguiente línea se asigna la respuesta a la variable scope.
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.component.js#L25](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.component.js#L25)

### Componente.html

- Ejemplo donde se muestra un dato a través de la directiva ng-model de angular
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.html#L10](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/detailpet-module/detailpet-module.html#L10)

### Configuración del Módulo

- en App.module.js se incluye los nombres de los módulos que se van usar en la aplicación.
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/master/public/app/app.module.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/master/public/app/app.module.js)

### Ruta Angular

- En el archivo app.config.js es donde se hace las llamadas a los modules en función de la ruta en la que estamos
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/app.config.js#L17](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/app/app.config.js#L17)

- En el index.html se importa la ruta al módulo
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/index.html#L31](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/dafe3f949e75624d6e01e14f75d193d0951d0182/public/index.html#L31)

#Servicios REST publicados

## Appointments
| METODO | URL | BODY | RESPONSE |
| --- | --- | --- | --- |
| GET | /api/appointments | Null | Res.json([appointments]) |
| GET | /api/appointments/:id | Null | Res.json(appointment) |
| GET | /api/appointments/:from/:to | Null | Res.json(appointments) |
| POST | /api/appointments | {JSON} | Res.json(createdAppointment) |
| PUT | /api/appointments/:id | {JSON} | Res.json(updatedAppointment) |

## Pets
| METODO | URL | BODY | RESPONSE |
| --- | --- | --- | --- |
| GET | /api/customers/:id/pets | Null | Res.json([pets]) |
| GET | /api/pet/:id | Null | Res.json(pet) |
| DELETE | /api/pet/:id | Null | Res.send.status(200) |
| POST | /api/pet/:id | {JSON} | Res.json(createdPet) |
| PUT | /api/pet/:id | {JSON} | Res.json(updatedPet) |

## Customers
| METODO | URL | BODY | RESPONSE |
| --- | --- | --- | --- |
| GET | /api/customers | Null | Res.json([customers]) |
| GET | /api/customers/:id | Null | Res.json(customer) |
| POST | /api/customers | {JSON} | Res.json(createdCustomer) |
| PUT | /api/customers/:id | {JSON} | Res.json(updatedCustomer) |

## Ficheros Encargados de publicar las rutas
- Appointments:
 - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/appointment.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/appointment.js)

- Pets:
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/pet.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/pet.js)

- Customers:
  - https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/customer.js

# Implementaciones
### Directivas Personalizadas
permiten encapsular código HTML para facilitar su reutilización
  - Aquí se crean las directivas para los inputs del formulario
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ff39d0c39bc5ead07f1f8dfa4426fb13358b606c/public/app/directives/input-templates.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ff39d0c39bc5ead07f1f8dfa4426fb13358b606c/public/app/directives/input-templates.js)

- Aquí se ve como se llama a esa directiva personalizada:
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ff39d0c39bc5ead07f1f8dfa4426fb13358b606c/public/app/modules/customerdetail-module/customerdetail-module.html#L10](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ff39d0c39bc5ead07f1f8dfa4426fb13358b606c/public/app/modules/customerdetail-module/customerdetail-module.html#L10)

### Servicios
Facilita la reutilización de funciones inyectando el servicio en diferentes componentes
 - Un ejemplo de Factory
 - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/services/appointments-services.js#L4](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/services/appointments-services.js#L4)

### Servicios con Resource
- Facilita la creación de métodos CRUD en servicios Angular.
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/services/customers-services.js#L6](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/services/customers-services.js#L6)

### Control de concurrencia optimista (OCC)
- Comprueba que se actualiza un dato siempre sobre su última versión.
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/controllers/pet.js#L55](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/controllers/pet.js#L55)

### Separación de responsabilidades
En la ruta simplemente envío la información y recibo la respuesta en forma de promesa, El controlador se encarga de la lógica
 - Ejemplo con get pet by id
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/controllers/pet.js#L19](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/controllers/pet.js#L19) (controlador pets)
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/pet.js#L24](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/pet.js#L24) (Route pet)

### Validaciones
Impedir que datos incorrectos se inserten en la base de datos
- Ejemplo con la librería Validate
 - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/validation/validators.js#L1](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/validation/validators.js#L1)

### Eventos
Es una forma de poder avisar a componentes cuando una acción es realizada.
 - Ejemplo donde se emite un evento
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointmentsday-module/appointmentsday-module.js#L36](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointmentsday-module/appointmentsday-module.js#L36)
 - Ejemplo donde se recepciona ese evento
  - [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointments-module.js#L14](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointments-module.js#L14)

### SocketIo 
- Abre un stream de conexión  entre el cliente y el servidor lo que permite que el servidor ante cualquier cambio actualice los datos de los clientes suscritos sin que ellos tengan que solicitarlo.
[https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/socketio-manager.js#L1](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/routes/socketio-manager.js#L1)

### Controladores anidados
![memoria_curso_fullstack_--012](https://user-images.githubusercontent.com/24917434/32315908-61647220-bfae-11e7-9c14-9777a1e906b5.png)
El componente padre engloba a los hijos y es notificado de cualquier cambio en sus hijos y se encarga de refrescarlos.
[https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointments-module.html](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointments-module.html)
[https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointments-module.js](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/blob/ab6d7e01c79a4f3bc0d8139db2696bfe01b704f4/public/app/modules/appointments-module/appointments-module.js)

# Pantallas de la App y componentes asociados en GitHub

## Inicio
[https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/login-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/login-module)
![memoria_curso_fullstack_--013](https://user-images.githubusercontent.com/24917434/32315937-76f9419c-bfae-11e7-8031-83527fb84144.jpg)

## Buscar Clientes
 [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/customer-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/customer-module)
![memoria_curso_fullstack_--014](https://user-images.githubusercontent.com/24917434/32315938-771709b6-bfae-11e7-8eb8-43f639281200.jpg)

## Detalle de clientes
 [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/customerdetail-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/customerdetail-module)
 [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/pet-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/pet-module)
 ![memoria_curso_fullstack_--015](https://user-images.githubusercontent.com/24917434/32315939-774c268c-bfae-11e7-9194-20a837823782.jpg)

## Detalle de la Mascotas
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/petdetail-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/petdetail-module)
  ![memoria_curso_fullstack_--016](https://user-images.githubusercontent.com/24917434/32315940-776841d2-bfae-11e7-8e58-02561ff7274e.jpg)

## Calendario de citas
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointmentscalendar-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointmentscalendar-module)
  ![memoria_curso_fullstack_--017](https://user-images.githubusercontent.com/24917434/32315941-7785200e-bfae-11e7-80ea-a1ba470218cd.jpg)

## Horas disponibles
  [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointments-module/appointmentsday-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointments-module/appointmentsday-module)
  ![memoria_curso_fullstack_--018](https://user-images.githubusercontent.com/24917434/32315942-77a24cba-bfae-11e7-8b40-f2c929f600fd.jpg)
  
## Detalle de cita
   [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointments-module/appointmentsdetail-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointments-module/appointmentsdetail-module)
   ![memoria_curso_fullstack_--019](https://user-images.githubusercontent.com/24917434/32315944-77bfdd02-bfae-11e7-8825-d84bb45ba7db.jpg)
    
## Crear/Editar Cita
 [https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointments-module/appointmentspost-module](https://github.com/Curso-Fullstack-MEAN-Octubre2017/oscarsuarez/tree/master/public/app/modules/appointments-module/appointmentspost-module)
 ![memoria_curso_fullstack_--020](https://user-images.githubusercontent.com/24917434/32315946-77ddf40e-bfae-11e7-9103-71166f94eeb4.jpg)

# Despliegue de la app a producción
![memoria_curso_fullstack_--023](https://user-images.githubusercontent.com/24917434/32315935-76bdf218-bfae-11e7-8c35-951cac16e269.png)
- Base de datos: [www.mlab.com](http://www.mlab.com)

![memoria_curso_fullstack_--021](https://user-images.githubusercontent.com/24917434/32315948-77fb260a-bfae-11e7-861b-ffc2773d11ff.png)
- Servidor: [www.heroku.com](http://www.heroku.com)
## Url: [https://pet-store-app.herokuapp.com/](https://pet-store-app.herokuapp.com/)
## GitHub: [www.github.com/suarezoscar](http://www.github.com/suarezoscar)
Curso FULLSTACK – Oscar Suarez – Octubre/Noviembre 2017