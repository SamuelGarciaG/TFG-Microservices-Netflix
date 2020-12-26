# TFG-Microservices-Netflix

Este proyecto surge del interés en estudiar la arquitectura de microservicios, que ha demostrado enormes éxitos como por ejemplo el caso de Netflix.

En este TFG se revisa la arquitectura monolítica, la de microservicios y se las compara, viendo cuándo es mejor aplicar cada una de las dos. Se recomienda encarecidamente la lectura de la <a href="https://github.com/SamuelGarciaG/TFG-Microservices-Netflix/blob/master/Trabajo%20de%20Fin%20de%20Grado%20Samuel%20Garc%C3%ADa.pdf" target="_blank">memoria</a>. del proyecto.

Además de toda esta revisión biblográfica sobre los microservicios, se desarrolló un proyecto para poder ver esta arquitectura en funcionamiento. Es una página web que sirve como un foro de películas, en las que podemos ver un catálogo de películas, datos de las mismas y opiniones de algunos usuarios. De nuevo, para ver más detalles sobre la aplicación, se puede hacer en la <a href="https://github.com/SamuelGarciaG/TFG-Microservices-Netflix/blob/master/Trabajo%20de%20Fin%20de%20Grado%20Samuel%20Garc%C3%ADa.pdf" target="_blank">memoria</a>.

La aplicación consta de la siguiente arquitectura:

<img title="Architecture TFG" src="https://user-images.githubusercontent.com/47883616/103152318-2ca37900-4787-11eb-8e93-a1ec6155f4f2.png">

## Proceso de despliegue

Para desplegar el proyecto, hay que tener instalado previamente un IDE que soporte Java, <a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://nodejs.org/en/" target="_blank">Node</a> y <a href="https://cli.angular.io/" target="_blank">AngularCLI</a>.

Una vez nos aseguremos de que cumplimos los requisitos, el proceso a seguir es muy sencillo:

### Primer paso: Bases de Datos
Debemos ejecutar los contenedores que contienen la base de datos. Para ello, nos los descargamos de Docker Hub con los siguientes comandos:

```shell

docker pull samuelgarciahub/tfg-mysql-films

docker pull samuelgarciahub/tfg-mysql-series

docker pull samuelgarciahub/tfg-mysql-reviews

```

Una vez nos aseguremos de que hemos descargado las imágenes de los contenedores, vamos al directorio del proyecto, donde se encuentra el fichero docker-compose y ejecutamos:

```shell

docker-compose up -d

```

## Segundo paso: Microservicios

Tan fácil como abrir todos en un IDE que soporte Java y ejecutarlos. Primero ejecutar el eureka, y después el resto.

## Tercer paso: Web

Vamos al proyecto tfg-angular, y en él ejecutamos los siguientes comandos para desplegarlo:

```shell

npm install

ng serve --open

```

Una vez se abra en el navegador, podrás curiosear todo lo que quieras en mi proyecto!

Si has llegado hasta aquí, no dudes en contactar conmigo si quieres consultarme cualquier cosa. Tienes mi e-mail en mi perfil.

Muchas gracias por tu tiempo y por llegar hasta el final!
