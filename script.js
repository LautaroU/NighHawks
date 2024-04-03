var audio = document.getElementById("rain");
  audio.volume = 0.15;

let fondo = document.querySelector(".imagen");

var btn = document.querySelector('.imagen');
  let contador = 0
  btn.onclick = function () {
      contador++; 
      
  
    if (contador == 1){
    
      const bloque = document.createElement('div')
      bloque.classList.add('bloque')
      fondo.appendChild(bloque);


      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Hombre Sin Nombre'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0ylUnnwiMo30TThdgPsbw06Mmodsq45T68b5qFhrNu3N4m0Cfe8M_piBswjBCh5JL_s&usqp=CAU'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);

      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)

      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);
      text.innerText = '-Buenas noches cabllero.'
      
    }
    else if (contador == 2) {
      
      const borrar = document.querySelector('.bloque')
      borrar.remove();

      const bloque2 = document.createElement('div')
      bloque2.classList.add('bloque')
      fondo.appendChild(bloque2);

      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque2.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Mozo'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://i0.wp.com/culturacolectiva.com/wp-content/uploads/images/DDEO6CMZRJCX7CH4GG5PD2I2SA.jpg?ssl=1'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);
      
      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)
      
      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);
      text.innerText = '-Que tal señor... que se le ofrece?'
      

      

    }
    else if (contador == 3) {
      
      const borrar = document.querySelector('.bloque')
      borrar.remove();

      const bloque2 = document.createElement('div')
      bloque2.classList.add('bloque')
      fondo.appendChild(bloque2);

      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque2.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Mozo'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0ylUnnwiMo30TThdgPsbw06Mmodsq45T68b5qFhrNu3N4m0Cfe8M_piBswjBCh5JL_s&usqp=CAU'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);

      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)
      
      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);
      text.innerText = '-Estoy buscando a este hombre. Por casualidad no Lo ha visto usted anoche en este mismo Bar?'
      

      

    }
    else if (contador == 4) {
      
      const borrar = document.querySelector('.bloque')
      borrar.remove();

      const bloque2 = document.createElement('div')
      bloque2.classList.add('bloque')
      fondo.appendChild(bloque2);

      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque2.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Mozo'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://i0.wp.com/culturacolectiva.com/wp-content/uploads/images/DDEO6CMZRJCX7CH4GG5PD2I2SA.jpg?ssl=1'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);
      
      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)
      
      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);
      text.innerText = '-En mi trabajo veo muchas rostros... En 2 horas es probale que olvide el suyo.'
      

      

    }
    else if (contador == 5) {
      
      const borrar = document.querySelector('.bloque')
      borrar.remove();

      const bloque2 = document.createElement('div')
      bloque2.classList.add('bloque')
      fondo.appendChild(bloque2);

      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque2.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Mozo'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0ylUnnwiMo30TThdgPsbw06Mmodsq45T68b5qFhrNu3N4m0Cfe8M_piBswjBCh5JL_s&usqp=CAU'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);

      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)
      
      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);
      text.innerText = '-Vera... Es un hombre que no olvidaria facilmente, le faltan sus pulgares. No vio usted a alguien manipular su trago de una forma extraña?'
      

      

    }
    else if (contador == 6) {
      
      const borrar = document.querySelector('.bloque')
      borrar.remove();

      const bloque2 = document.createElement('div')
      bloque2.classList.add('bloque')
      fondo.appendChild(bloque2);

      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque2.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Mozo'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://i0.wp.com/culturacolectiva.com/wp-content/uploads/images/DDEO6CMZRJCX7CH4GG5PD2I2SA.jpg?ssl=1'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);
      
      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)
      
      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);
      text.innerText = 'No. Lamento no poder ayudarle, va a querer algo de beber?'
      

      

    }

    else if (contador == 7) {
      
      const borrar = document.querySelector('.bloque')
      borrar.remove();

      const bloque2 = document.createElement('div')
      bloque2.classList.add('bloque')
      fondo.appendChild(bloque2);

      const dialogo = document.createElement('div');
      dialogo.classList.add("dialogo");
      bloque2.appendChild(dialogo);
      
      const foto = document.createElement('div');
      foto.classList.add('fotoCara');
      dialogo.appendChild(foto);

      const nombre = document.createElement('div');
      nombre.classList.add('nombre');
      nombre.innerText = 'Mozo'
      foto.appendChild(nombre)
      
      const adaptador = document.createElement('div');
      adaptador.classList.add('adaptador');
      foto.appendChild(adaptador);
      
      const cara = document.createElement('img');
      cara.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0ylUnnwiMo30TThdgPsbw06Mmodsq45T68b5qFhrNu3N4m0Cfe8M_piBswjBCh5JL_s&usqp=CAU'
      adaptador.appendChild(cara);

      const contentText = document.createElement('div');
      contentText.classList.add('contentText');
      dialogo.appendChild(contentText);

      const fecha = document.createElement('div')
      fecha.classList.add('fecha');
      fecha.innerText = '3 de Abril de 1948'
      contentText.appendChild(fecha)
      
      const text = document.createElement('div');
      text.classList.add('texto');
      contentText.appendChild(text);

      const bloquePadre = document.createElement('div');
      bloquePadre.classList.add('bloquePadre');
      text.appendChild(bloquePadre)
      
      const bloqueSi = document.createElement('div');
      bloqueSi.classList.add('bloqueSiNo');
      bloquePadre.appendChild(bloqueSi);

      const siQuiero = document.createElement('a');
      siQuiero.classList.add('Qui');
      siQuiero.innerText = 'Si'
      siQuiero.href = "./pags/index.html"
      bloqueSi.appendChild(siQuiero);

      const bloqueNo = document.createElement('div');
      bloqueNo.classList.add('bloqueSiNo');
      bloquePadre.appendChild(bloqueNo);

      const noQuiero = document.createElement('a');
      noQuiero.classList.add('Qui');
      noQuiero.innerText = 'No'
      noQuiero.href = 'https://github.com/LautaroU/Disqueria';
      bloqueNo.appendChild(noQuiero);

   

      

      

    }
    
  }
