# ARMiniCoreFront - Alain Ruales
En este repositorio se encuentra la implementación del Frontend en Angular para ingeniería web del periodo 202310

Este proyecto fue generado con el comando [Angular CLI](https://github.com/angular/angular-cli) version 13.3.10.

## Ejecución de proyecto

Para poder ejecutar el proyecto se debera ejecutar el comando 'ng serve --open'. Es aplicación se abrirá en el 'http://localhost:4200/' y además se actualizará automáticamente si existen cambios en los archivos

# Funcionalidad de proyecto
El frontend en angular tiene como funcionalidad mostrar el total pagado de contratos que tienen hacia un cliente. Este monto se calcula en base a una fecha de inicio y fecha de fin. Con estas fechas se calcula el monto total pagado en base a los contratos que se encuentran dentro de este límite.
Para poder obtener toda esta información, se envía las fechas de inicio y de fin hacia una API creada en .NET. 
Esta API se encuentra en el siguiente enlace https://github.com/AlainRuales01/MinicCoreBackEnd

![image](https://user-images.githubusercontent.com/87552871/213068365-0e23066e-6668-46b2-b3b4-7bd157d54f39.png)

# Deploy en la nube
Actualmente, este proyecto se encuentra deployado en la plataforma de Netlify. Para poder lograr esto se siguió la siguiente guía: https://www.youtube.com/watch?v=3VVPk7YYpho

Enlace front: https://arminicorefront.netlify.app/
