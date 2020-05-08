# PreguntaBIO

Nuestro juego está hecho de manera web, el mismo fue hecho con Javascript y levantado con ReactJS (esto es para obviar la instalación de npm y poder correr el juego solo abriendo el html, pero si se levanta con npm start se podrá acceder de otros dispositivos conectados a la red). Se trata de un juego  preguntas y respuestas, sobre ADN, y células eucariotas, el cual tiene  tres niveles, consta de ir respondiendo de manera correcta para poder avanzar al siguiente nivel. 
Nos encontramos con la pagina principal, en la que se observa el nombre del juego, y en la parte superior la opción de poder jugar, como también saber quiénes realizaron el trabajo.

![imagen1](https://user-images.githubusercontent.com/31372437/81455641-287a0b00-9166-11ea-8439-03ecbcb74e38.jpeg)

Al presionar “jugar” nos lleva a la parte de donde podremos comenzar a jugar:

![imagen2](https://user-images.githubusercontent.com/31372437/81455650-2e6fec00-9166-11ea-8336-1752f1127ba2.jpeg)

Si ponemos el cursor por cada icono nos indica los niveles disponibles y se muestra un botón que dice “jugar” para comenzar, luego de hacerlo se abre una ventana modal que muestra la primer pregunta:
![imagen3](https://user-images.githubusercontent.com/31372437/81455652-2fa11900-9166-11ea-801c-d42bc821d1d8.jpeg)

![imagen4](https://user-images.githubusercontent.com/31372437/81455660-32037300-9166-11ea-8715-200d8719cb3f.jpeg)

Podemos elegir la respuesta a la pregunta del primer nivel y chequear la respuesta, en caso de ser correcta se desbloquea el siguiente nivel, caso contrario se puede volver a intentar desbloquear el nivel.

![imagen5](https://user-images.githubusercontent.com/31372437/81455666-3465cd00-9166-11ea-9315-939ea6bf4598.jpeg)
![imagen6](https://user-images.githubusercontent.com/31372437/81455668-362f9080-9166-11ea-8d60-62fe9fecc2e3.jpeg)


Instalación:
Nuestro juego esta subido a un repositorio de git hub,  podemos bajar el juego en un .zip y descomprimirlo. En la carpeta general podemos encontrar la carpeta “public” que al entrar en ella se encontrara un archivo llamado “index”, al hacer doble click en el mismo se abrirá la web utilizando cualquier navegador. Si no, se puede descargar node y dentro de la  carpeta del proyecto hacer npm install (en la consola). Cuando tenemso todo esto se corre la app con el comando npm start. Esto es para poder compartir la app con los demas dispositivos en  la red, para esto es necesario escribir en el navegador http://direccion ip:3000.
Para sacar la ip, se puede escribir desde la consola 'ip address show'. La dirección será la que aparecerá en inet (el que es seguido de scope global)
![Captura de pantalla de 2020-05-08 20-40-14](https://user-images.githubusercontent.com/31372437/81457418-5febb600-916c-11ea-892a-23e8fdd08693.png)

