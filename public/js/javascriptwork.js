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

pos2 = 0;
paguinas = ["../img/inicio_libreria.png","../img/libreria_registro.png","../img/libreria_ingreso.png",
            "../img/libreria_usuario.png","../img/libreria_sudo.png"];
function works(){
    if( pos2 < paguinas.length){
         document.getElementById("pagweb").style.backgroundImage ="url('" + paguinas[pos2] +"')"; 
         document.getElementById("tituloWeb").innerHTML = "Libreria"; 
         pos2++;
    } else {
        pos2 = 0;
        document.getElementById("pagweb").style.backgroundImage ="url('" + paguinas[pos2] +"')";
        document.getElementById("tituloWeb").innerHTML = "Libreria"; 
    }
}

setInterval(works, 4000);