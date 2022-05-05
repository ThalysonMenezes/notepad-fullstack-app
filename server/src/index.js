import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/notes.js';

const app = express();

app.use(bodyParser.json({limit: "5mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "5mb", extended: true}));
app.use(cors());

app.use('/', routes);

const PORT = process.env.PORT || 8080;

try{
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
})
}catch(error){
    console.log("Erro", error.message);
}