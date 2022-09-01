const express = require('express');

const app = express();
app.get('/productos/', (req, res) => {
    let productos = ["P1", "P2", "P3", "P4", "P5"]
    res.send(productos);
});
app.get('/productoRandon', (req, res)=>{
        function productoRandon(){
            return Math.random()* productos.length;
        }
    res.send((productoRandon()));
})


const server = app.listen(8080, ()=>{
    console.log('servidor de express iniciado');
});