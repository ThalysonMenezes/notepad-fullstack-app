import Sequelize from 'sequelize';

import dbConfig from '../config/database.js';

const connection = new Sequelize(dbConfig);

    connection.authenticate()
    .then(function () {
        console.log("Conexão ao banco de dados realizada como sucesso!");
    })
    .catch((erro) => {
        console.log('Erro ao conectar com banco de dados!');
        console.log(erro.message);
    });

export default connection;