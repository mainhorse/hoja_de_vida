nombre = "Cristhian David";
apellido = "Sànchez Hernandez";
correo = "cristianSanchezh@gmail.com";
cel = "3134322230";

fondos = ["../img/fondo.jpeg","../img/fondo1.jpeg","../img/fondo2.jpeg","../img/fondo3.jpeg","../img/fondo4.jpeg",
         "../img/fondo5.jpeg"];
pos = 0;
function fondo(){
    if(pos < 5){
       pos++;
       document.body.style.backgroundImage ="url('" + fondos[pos] +"')";       
    } else if(pos == 5) {
        pos = 0;
        document.body.style.backgroundImage ="url('" + fondos[pos] +"')";
    }

}
function info(dato){

    switch(dato){
        case 'correo':
                container = "<p class='datPer'>" + "correo" + "</p>"
                            + "<p class='datPer'>" + correo + "</p>";  
                document.getElementById("frase").innerHTML = container;                           
                            
        break;
        case 'datos':
                container = "<p class='datPer'>" + "Datos Personales" + "</p>"
                    + "<label class='datPer'>" + "Nombre" + "</label>"
                    + "<p class='datPer'>" + nombre  + "</p>" 
                    + "<label class='datPer'>" + "Apellido" + "</label>"
                    + "<p class='datPer'>" + apellido  + "</p>";
                document.getElementById("frase").innerHTML = container;     

        break;
        case 'celular':
            container = "<p class='datPer'>" + "cel:" + "</p>"
            +  "<p class='datPer'>" +  cel + "</p>";  
            document.getElementById("frase").innerHTML = container;     
        break;     

    }
}


imgProg = ["../img/html.png","../img/css.png","../img/js.png","../img/php.png","../img/mongo.png","../img/node.png","../img/angular.png"];
porProg = ["40%","35%","45%","30%","30%","20%","20%"];

pro = 0;

do{
    id = "id" + pro;
    card = document.createElement("div");
    imagen = document.createElement("img");
    barra = document.createElement("div");
    barrPor = document.createElement("div");
    barra.appendChild(barrPor);
    dato = document.createElement("div");
    porcentaje = document.createTextNode(porProg[pro]);
    dato.appendChild(porcentaje);
   
    card.appendChild(imagen);
    card.appendChild(barra);
    card.appendChild(dato);
    posicion = document.getElementById("lenProgramacion");
    posicion.appendChild(card);

    card.setAttribute("onmouseover", "mostrar('" + id +"', '" + porProg[pro] + "')");
    card.setAttribute("onmouseout", "volver('" + id +"')" )
    card.setAttribute("class","cardPro");
    imagen.setAttribute("src", imgProg[pro]);
    imagen.setAttribute("alt", "lenguaje");
    imagen.setAttribute("width", "80%");
    imagen.setAttribute("height","70%");
    barra.setAttribute("class", "barra");
    barrPor.setAttribute("id", id);
    barrPor.setAttribute("class", "porcentaje");
    dato.setAttribute("class","numPorce");
    pro++;
}while(pro< imgProg.length)

function mostrar(numCard,valor){
    barra = document.getElementById(numCard);
    barra.style.width = valor;
}

function volver(valor){
    barra = document.getElementById(valor);
    barra.style.width = "90%";
}