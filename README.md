## @Autor: Faustino Aragon Vallecilla
https://app.netlify.com/sites/netflix-faustino/settings/general
-Link de la pagina: https://netflix-faustino.netlify.app/
## 1 Inicialización del proyecto
` npx create-react-app 2022netflix --template redux `  
### `npm start`
# 2 proceso de limpieza
### `Eliminación de varias carpetas`

# Instalación de librerias 
`Instalación de la librearia @material-ui/core tiene varias librerias para el diseño`
`Axios nos permite hacer request de una api la cual vamos a utilizar para tener aceso a las peliculas e imagenes`
`Firebase nos va a guargar el usuario y hacer el proceso de logue mucho mas sencillo, tine toda la seguridad que te puede dar google`
`npm add react-router-dom@5.2.0 o se dscarga la version actual add react-router-dom esta libreria nos permite crear rutas ejem, localhost.pagos`
`add react-uuid, nos genara un numero o un codigo aleatorio como un id `

### 3 Importar las librerias
`material-ui/core, axios, firebase, react-router-dom, react-uuid, styled-components`

# 4 el layaout inicial 'App.js'
--Creamos las rutas
-Renderizamos Login o el resto del app condicionado a la existencia de un usuario

## 5 Estilos
-Utilizamos useStyles para crear una infraestructura que nos permita asignar estilos a acada uno de los componentes

## 6 Crear las carpetas de componentes :  pages
-Creamos la infraestuctura de los componentes que representan una pagina, Hom, Login, Paypal, Profile y SignUp

## 7 Estilos en los componentes de pages
--Patrón para añadir la infracstructura de estilos a todos los componentes

## 8 Crear la carpeta de components, con componentes mas secundarios
-Creamos la infraestuctura del resto componentes que representan una pagina, Banner, Header, Plans y Row

## 9 Estilos en las carpetas components
-Patrón para añadir la infracstructura de estilos al resto de  los componentes

## 10 Comenzamos a trabajar con el componente Header
-Importamos el logo
-Añadimos al appbar una clase transparente condicional..Esta clase se activa si la variable show es igual a true
-La varaible show se convierte en true si hacemos un scroll vertical por mas de 100px.
-Para escuchar cuando un usuario hace vertical, añadimos un eventoListener al objeto window
-El evenLizener, esta activo una sola vez cada vez que refrescamos la pagina (useEffec con el array esta vacio [])
-Una vez montado el compoente haya que limpiarlo para que no nos quede colgano el evenLizener
-Añadimos las rutas, tanto al logo como al avatar

# #10 Comenzamos a trabajar en el Banner
-Hemos importado un pedazo de imagen como baugraImage
-En react, tenemos que acampañar a las las backgraounImges como estilos object-fit, baugra-size y baugran-position
-Hemos posicionado el titulo de la peli, unos botones y la descripcion
-Como la descripción viene del api, tenemos que truncarla para asegurarnos de que nos cabe.. Para ello, hemos declarado la funcion trucate
-Hemos añadido un div vacio que oscurece la imagen hasta funcionarla  con el resto del UI, que es oscuro.


## 11 Comenzamos a hacer el Login
-Hemoscreado un boton con style components y le hemos llamado NetflixButton. Este botton está totalmente customizado y podemos variar su longitud, color y otros estilos, pasandole props
-Styled components para variar los estilos del input o del boton, pero para su posicionamiento de ldamos una clase normal
-Hemos creado un input personalizado en styled componentes. Le hemos llamdo NetflixInput. Como InputBase era ya un componente de material ui, pues lo hemos llamdo styled(InputBase). Si hubiera sido un input de base styled.input"

## 12 Trabajamos en nel componente profile
-Hemos trabajado en la distribucción
- <Plans>Texto<Plans>
`const Plans = (children) => {
    return ()
}`//Haceta el texto en children
-Pasar props a los styled components
-En casa de que el componente no sea binario, p.eje que el tamaño sea pequeño, mediano o grande entonces lo slocionamos con una función y un swith


## 13 Sign Up
-Renderizado condicional. Hemos creado una variable signIn.
-Si la variable es falsa, desplegamos el formulario


## 14 Proceso de Registro/signIn
-Se habilita una cuenta en firebase/ se crea la cuenta
-iniciliazado el objecto auth
-capturado los datos tecleados por el usuariodentro del formulario
-Registrado de email y password con auth.createUserWithEmailAndPassword(email, password)
-singIn con   auth.signInWithEmailAndPassword(email, password)

## 15 Redux
_ Habilitamos el slice userSlice para manejar el usuario en el componente que queramos


## 16 Persistencia
-Añadimos un even listener en app.js
-este event listener lo trae el objecto auth de firebase, escucha cada vez que cambia el ususrio en firebase.
- Cada vez que cambia vuelve a inyectar  el ususrio en la capa de datos de userLice (Redux), de esta manera recordamos que ya estamos dentro aunqur refresquemos la pagina

## 17 Resuests
-Vamos a construir el componete Row
-Hemos habilitado todos los enpoist para acceder a themoviedb y extraer los distintos objectos con toda la información clasificada por género

## Llamadas al Api
-con useEffect, hemos llamadao asyncrona medinate una función a la que hemos llamado fetData, esta fynción devuelve request.results.data, que es un array  con todas las paliculas.
- Las desplegamos en UI

## creacion del componente paypal
para poder iniciar una conexion con paypal
https://developer.paypal.com/developer/applications/edit/SB:QVZac1d1YzB4WTdlOFNHWFE0c3JkTHNkQkNCTXkyTVg1MTJZWTJKcEc5VHQyY2I0OFFmWjEteHNhcDdSd3djbnd3ZTFmaU1Mb3RlSjRReGk=

--Al componente paypal lo llamamos cuando clicleamos uno de las subcripciones en los planes
--Estoes botones nos redirigen a la routa chekaout, en checkout vemos el componente paypal que contiene el codigo de React necesario para implementarlo a la integración de react con paypal 
-El codigo se encuentra en la documentación

Cuenta de prueba para hacer el pago con paypal
sb-tykqh11609132@personal.example.com
umJ@Nh0O

https://developer.paypal.com/developer/accounts
https://developer.paypal.com/developer/applications/edit/SB:QVlPbUEwLURpb0FUWHVIZkoyOU1qYnI2eHZsRV9vRHg5MF9yTHJRX1BOOVFHbFhYNUlnYW1pOU5nVFVZdkQ0Vlo0cDlsUDJaU1lYNnNRTWU=

https://developer.paypal.com/developer