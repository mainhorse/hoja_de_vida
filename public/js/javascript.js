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


deportes = " Pienzo que el deporte te ayuda a descubrir muchas habilidades que posiblemente no sabes que tienes. Practico basquetbol, futbol, tenis, golf y cualquier deporte que exiga mas de mi. ";
tieDep = "Me gusta practicarlo al menos dos veces por semana, ya que es muy relajante y cambia un poco la rutina";

lecturas = " Pienzo que es la manera mas facil de adquirir un conocimiento de una persona que le costo mucho tiempo aprender lo. ";
tieLect = " Considero que se debe hacer al menos 40 minuto diarios, lo importante es ser constante y muy analitico. Intento leer libros que estan escritos en otros lenguajes para aprovechar mas el tiempo";

videos = "En el mundo actual, estar informado cada vez mas y mas, nos lleva a buscar recursos como los videos. Una buena ayuda es youtube que posee videos con los que puedes aprender en mi caso programacion o portugues.";
tieVide = "Normalmente gasto una hora del dia para ver un video, ya sea de una serie o un curso de programacion";

viaje = "Pienzo que un viaje abre tu mente y por eso intento viajar una vez al año, mi lugar favorito es brazil.";
comida =" Me gusta la comida peruana, mexicana, La pizza";

otros = "Me gusta escuchar musica, normalmente musica en portugues y aveces en ingles.";
function aboutMe(dato){
    switch(dato){
        case 'deporte':
                container =  deportes + tieDep ;
                swal({
                    title: "Deportes",
                    text: container,
                  });
        break;
        case 'lectura':
                 container =  lecturas + tieLect ;
                 swal({
                    title: "Lecturas",
                    text: container,
                });  
        break;
        case 'videos':
                container =  videos + tieVide ;
                swal({
                    title: "Videos",
                    text: container,
                });
        break;
        case 'viaComi':
                container =  viaje + comida ;
                swal({
                    title: "Viajes y comida",
                    text: container,
                 });
        break;
        case 'otros':
                container =  otros ;
                swal({
                    title: "Otros",
                    text: container,
                });
        break;
    }
    
}