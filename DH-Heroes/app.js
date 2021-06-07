const express = require('express');//requerimos el modulo express
const path = require("path");
const app = express();


const publicpath = path.resolve(__dirname, "./public") 
//no mencionar en html la capeta public ya que la estamos llamndo en app.js
app.use( express.static(publicpath) )


app.listen(3030, () => {
    console.log('Servidor activo en el puerto 3030')});
//levantamos un servidor en el puerto 3030

    
//página de index.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});


//página de babbage.html
app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/babbage.html'))
});


//página deberners-lee.html
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/berners-lee.html'))
});


//página de clarke.html
app.get('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/clarke.html'))
});


//página de hamilton.html
app.get('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hamilton.html'))
});


//página de hopper.html'
app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/hopper.html'))
});


//página de lovelace.html
app.get('/lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/lovelace.html'))
});


//página de turing.html
app.get('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/turing.html'))
});
