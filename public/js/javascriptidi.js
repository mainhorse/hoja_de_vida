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
       console.log(pos);
    } else if(pos == 5) {
        pos = 0;
        document.body.style.backgroundImage ="url('" + fondos[pos] +"')";
        console.log(pos);
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

imgIdi = ["../img/ingles.png","../img/portugues.png"];
nomIdi= ["Ingles"];
nivel = ["A2","B1"];

pro = 0;

do{
    id = "id" + pro;
    card = document.createElement("div");
    imagen = document.createElement("img");
    barra = document.createElement("div");
    text = document.createTextNode(nivel[pro]);
    barra.appendChild(text);
   
    card.appendChild(imagen);
    card.appendChild(barra);
    posicion = document.getElementById("conIdiomas");
    posicion.appendChild(card);

    card.setAttribute("onmouseover", "mostrar('" + id +"', '" + nomIdi[pro] + "')");
    card.setAttribute("onmouseout", "volver('" + id +"')" )
    card.setAttribute("class","cardPro");
    imagen.setAttribute("src", imgIdi[pro]);
    imagen.setAttribute("alt", "lenguaje");
    imagen.setAttribute("width", "80%");
    imagen.setAttribute("height","80%");
    barra.setAttribute("class", "nivel");
    pro++;
}while(pro< imgIdi.length)

function mostrar(numCard,valor){
    barra = document.getElementById(numCard);
    barra.style.width = valor;
}

function volver(valor){
    barra = document.getElementById(valor);
    barra.style.width = "90%";
}