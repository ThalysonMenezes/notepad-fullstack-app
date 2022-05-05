// import dotenv from 'dotenv';
// dotenv.config();

// A dependência dotenv é pré-carregada no script de execução do arquivo index.js,
// devido a isto, torna-se desnecessário a importação da dependência no arquivo
// principal e neste arquivo (database.js).

export default {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  define: {
    timestamps: true
  },
};