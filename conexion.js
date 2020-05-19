const express = require('express'),
    app = express(),
    path = require('path'); // path es uno de los 34 módulos de Node
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

// Uso de middlewares

app.use(cookieParser());
app.use(cookieSession({secret: "I'm a secret"})); 
app.use(express.static(path.join(__dirname, "/public")));  

app.get('/cv',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/index.html`);
    peticion.session.visitas || (peticion.session.visitas = 0)
    let n = peticion.session.visitas++;
    console.log(`las visitas han sido: ${n}`);
});

app.get('/about',(peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/about.html`);
});

app.get('/experiences' , (peticion, respuesta) =>{
    respuesta.sendFile(`${__dirname}/views/experiences.html`);
});

app.get('/education' , (peticion,respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/education.html`);
});

app.get('/idioms' , (peticion, respuesta) =>{
    respuesta.sendFile(`${__dirname}/views/idioms.html`);
});

app.get('/aptitud' , (peticion,respuesta) => {
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
});
app.listen(8080);
console.log("ready, go")

