const express = require('express');
const app = express();
app.get( '/', (res, req) => {
    res.send('Bienvenido a DonjorTech')
});
app.listen(3000, () => {
    console.log('Servidor iniciado...')
})