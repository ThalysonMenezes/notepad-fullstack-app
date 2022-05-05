import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper, Tooltip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createNote, updateNote, deleteNotes } from '../../redux/actions/note_actions';

const Form = ({ currentId, setCurrentId }) => {
    const [noteData, setNoteData] = useState({
        nome: '', conteudo: ''
    });
    const note = useSelector((state) => currentId ?
    state.notes.find((p) => p.id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(note) setNoteData(note);
    }, [note]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId){
            dispatch(updateNote(currentId, noteData));
            clear();
        }else{
            if (noteData.nome !== '' && noteData.conteudo !== ''){
                dispatch(createNote(noteData));
                clear();
            }else{
                window.alert('Preencha os dois campos para enviar o comentário!');
                clear();
            }     
        } 
    }

    const deleteAllClick = () => {
        var confirmar = window.confirm("Deseja deletar todos os dados?");
        if(confirmar) {
            dispatch(deleteNotes());
            clear();
        }
    };

    const clear = () => {
        setCurrentId(null);
        setNoteData({nome: '', conteudo: ''});
    }

    return(
        <Paper className={classes.paper} >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variante="h6">{ currentId? 'Editing' : 'Creating' } a note</Typography>
                <TextField 
                    name='nome'
                    variant='outlined'
                    label='Nome'
                    fullWidth
                    value={noteData.nome}
                    onChange={(e) => setNoteData({ ...noteData, nome: e.target.value })}
                 />
                 <TextField 
                    name='conteudo'
                    variant='outlined'
                    label='Conteúdo'
                    fullWidth
                    multiline
                    value={noteData.conteudo}
                    onChange={(e) => setNoteData({ ...noteData, conteudo: e.target.value })}
                 />
                 <Tooltip title={ currentId? 'Atualizar nota' : 'Criar nota' }>
                    <Button
                        className={classes.buttonSubmit}
                        variant='contained'
                        color="primary"
                        size='large'
                        type='submit'
                        fullWidth
                    >Submit</Button>
                 </Tooltip>
                 <Tooltip title="Limpar campos">
                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        onClick={clear}
                        fullWidth
                    >Clear</Button>
                 </Tooltip>
                 <Tooltip title="Deletar tudo">
                    <Button
                        className={classes.buttonDeleteAll}
                        variant='outlined'
                        color='secondary'
                        size='small'
                        onClick={deleteAllClick}
                        fullWidth
                    >Delete All</Button>
                 </Tooltip>
            </form>
        </Paper>
    );
}

export default Form;