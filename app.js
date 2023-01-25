const express = require('express')
const cowsay = require('cowsay')
const Provider = require('./models/providers');
require('./utils/db_mongo');//conecta a la bbdd mONGO

const app = express();
const port = 3000;

app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

app.post('/providers', (req, res) => {
  const newProvider = new Provider(req.body);
  newProvider.save((err, provider) => {
    if (err) {
      res.send(err);
    }
    res.json(provider);
  });
});

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e: "oO",
            T: "U "
        }))
})