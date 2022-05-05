import { Model, DataTypes } from 'sequelize';
import connection from '../database/index.js';

class Notes extends Model{}
Notes.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: DataTypes.STRING
},{
    sequelize: connection,
    modelName: 'Notes',
    //timestamps: true,
    freezeTableName: true
})

export default Notes;