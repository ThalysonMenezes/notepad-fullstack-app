import Notes from '../models/Notes.js';

// Variável para reutilizar Primary Keys deletadas
var idRestart = [];

export const getNotes = async (req, res) =>{
    await Notes.findAll() 
    .then( (apr) => {
        return res.status(200).json(apr);
    }).catch( (error) => {
        return res.status(404).json({ message: error.message });
    });
}

export const createNote = async (req, res) => {
    const note = req.body;

    if (idRestart.length !== 0){
        let min = Math.min(...idRestart);
        note.id = min;

        idRestart.splice(idRestart.indexOf(String(min)), 1);
    }
    await Notes.create(note)
    .then( (data) => {
        console.log("Dados inseridos!!!!");
        return res.status(200).json(data);
    }).catch( (error) => {
        return res.status(500).json( {message: error.message} );
    });
}

export const updateNote = async (req, res) => {
    const { id: _id } = req.params;
    const { nome: _nome, conteudo: _conteudo, createdAt: _createdAt} = req.body;

    const note = await Notes.findByPk(_id);

    if(!note) return res.status(404).send(`Nota com ID ${_id} não encontrado!`);

    const objectToUpdate = {};
    if (_nome) objectToUpdate.nome = _nome;
    if (_conteudo) objectToUpdate.conteudo  =_conteudo;
    if (_createdAt) objectToUpdate.createdAt =_createdAt;
    
    const updateNote = await Notes.update(
        objectToUpdate, {
        where: { id: _id }
    })

    if(!updateNote)
        return res.status(500).send("Não funcionou");
    else{
        const show = await Notes.findByPk(_id);
        console.log("Dados atualizados!!!!");
        res.status(200).json(show);
    }
}

export const deleteNote = async (req, res) => {
    const { id: _id } = req.params;

    const note = await Notes.findByPk(_id);

    if(!note) return res.status(404).send(`No note with id: ${_id}`);

    idRestart.push(_id);
    const deleteUser = await Notes.destroy({
        where: { id: _id }
    });

    if(!deleteUser) return res.status(500).send("Não funcionou");
    else{
        console.log("Dado deletado com sucesso!!!!");
        return res.status(200).json(deleteUser); 
    }
}

export const deleteNotes = async (req, res) => {
    await Notes.destroy({ truncate: true, restartIdentity: true })
    .then( (data) => {
        idRestart = [];
        return res.status(200).json(data);
    }).catch( (error) => {
        return res.status(404).json({ message: error.message });
    });
}