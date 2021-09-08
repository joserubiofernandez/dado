var rotX = 0;
var rotY = 0;
var rotZ = 0;

var max = 150;
var min = 1;
var count = 0;
var finalizadorDado = 0;
var dado = document.getElementById('cajaDado');
var cp = document.getElementById('cajonPrincipal');
var caraDado = document.getElementsByClassName('cara');

var boton  = document.getElementById('lanzarDado');

var redondeoYAlza= null;
var redondeoXAlza = null;
var redondeoZAlza = null;

var gradosMultY= null;
var gradosMultX= null; 
var gradosMultZ= null; 

var sumaGradosY= null; 
var sumaGradosX= null;
var value = null;

function sumar(){
    rotY += Math.floor(Math.random()*(max-min)+min);
    rotX += Math.floor(Math.random()*(max-min)+min);
    rotZ += Math.floor(Math.random()*(max-min)+min);
    finalizadorDado = Math.floor(Math.random()*(15-7)+7);
   
}




 var roto =  setInterval(() => {
        sumar();
        count++;
        dado.style.transform = 'rotateX('+ rotX +'deg) rotateY('+ rotY +'deg) ';
        dado.style.transition = '0.3s';
            if(count == 7){

                redondeoYAlza = Math.ceil(rotY / 90);
                redondeoXAlza = Math.ceil(rotX / 90);

                gradosMultY = redondeoYAlza*90;
                gradosMultX = redondeoXAlza*90;

                sumaGradosY = (gradosMultY - rotY) + rotY;
                sumaGradosX = (gradosMultX - rotX) + rotX;

                dado.style.transform = 'rotateX('+ sumaGradosX +'deg) rotateY('+ sumaGradosY +'deg) ';
              
                console.log('el valor del dado es: '+valor());
                document.getElementById('valor').innerHTML= '<h1>' + valor() + '</h1>';
                clearInterval(roto);
            }
    }, 300);




function valor(){
    if(redondeoXAlza > 4) redondeoXAlza =redondeoXAlza-4;
    if(redondeoYAlza >4 )redondeoYAlza =redondeoYAlza-4; 
    if(redondeoXAlza > 8) redondeoXAlza =redondeoXAlza-8;
    if(redondeoYAlza >8 )redondeoYAlza =redondeoYAlza-8; 
    if(redondeoXAlza > 12) redondeoXAlza =redondeoXAlza-12;
    if(redondeoYAlza >12 )redondeoYAlza =redondeoYAlza-12; 
    if(redondeoXAlza > 16) redondeoXAlza =redondeoXAlza-16;
    if(redondeoYAlza >16 )redondeoYAlza =redondeoYAlza-16; 

    switch(true){
        case(redondeoYAlza == 1 && redondeoXAlza == 1 ): value = 1; break;
        case(redondeoYAlza == 1 && redondeoXAlza == 2):  value = 2; break;
        case(redondeoYAlza == 1 && redondeoXAlza == 3 ): value = 6; break;
        case(redondeoYAlza == 1 && redondeoXAlza == 4 ): value = 5; break;
        case(redondeoYAlza == 2 && redondeoXAlza == 1 ): value = 1; break;
        case(redondeoYAlza == 2 && redondeoXAlza == 2):  value = 3; break;
        case(redondeoYAlza == 2 && redondeoXAlza == 3 ): value = 6; break;
        case(redondeoYAlza == 2 && redondeoXAlza == 4 ): value = 4; break;
        case(redondeoYAlza == 3 && redondeoXAlza == 1):  value = 1; break;
        case(redondeoYAlza == 3 && redondeoXAlza == 2 ): value = 5; break;
        case(redondeoYAlza == 3 && redondeoXAlza == 3 ): value = 6; break;
        case(redondeoYAlza == 3 && redondeoXAlza == 4 ): value = 2; break;
        case(redondeoYAlza == 4 && redondeoXAlza == 1 ): value = 1; break;
        case(redondeoYAlza == 4 && redondeoXAlza == 2 ): value = 4; break;
        case(redondeoYAlza == 4 && redondeoXAlza == 3 ): value = 6; break;
        case(redondeoYAlza == 4 && redondeoXAlza == 4 ): value = 3; break;
        case(redondeoYAlza == 0 && redondeoXAlza == 1 ): value = 1; break;
        case(redondeoYAlza == 0 && redondeoXAlza == 2 ): value = 4; break;
        case(redondeoYAlza == 0 && redondeoXAlza == 3 ): value = 6; break;
        case(redondeoYAlza == 0 && redondeoXAlza == 4 ): value = 3; break;
        case(redondeoYAlza == 1 && redondeoXAlza == 0 ): value = 5; break;
        case(redondeoYAlza == 2 && redondeoXAlza == 0):  value = 4; break;
        case(redondeoYAlza == 3 && redondeoXAlza == 0):  value = 2; break;
        case(redondeoYAlza == 4 && redondeoXAlza == 0):  value = 3;  break;
        case(redondeoYAlza == 0 && redondeoXAlza == 0 ): value = 3; break;
        case(redondeoYAlza == 1 && redondeoXAlza == 0 ): value = 5; break;
      
        default: value = redondeoXAlza;
    }
    return value;
}

