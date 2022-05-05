import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { Tooltip, Card, Paper, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import moment from 'moment';

import 'moment/locale/pt-br';
import useStyles from './styles';

import { deleteNote } from '../../../redux/actions/note_actions';

const Note = ({ note, setCurrentId })=> {
    const classes = useStyles();
    const dispatch = useDispatch();

    const deleteClick = () => {
        var confirmar = window.confirm("Deseja excluir este comentário?");
        if(confirmar) {
            dispatch(deleteNote(note.id));
        }
    };
       
    function stringAvatar(name) {
        // Conta a ocorrência de espaços na string
        const ocorrencias = (name.match(/ /g) || []).length;
        // Captura no máximo as inicias das duas primeiras palavras da string
        switch(ocorrencias){
            case 0:
                return { children: `${name.split(' ')[0][0]}` };
            default:
                return { children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` };
        }
    }
    
    return(
            <Card className={classes.card} >
                <Paper className={classes.root_paperHeader} elevation={0}>
                    <CardHeader
                    className={classes.root_cardHeader}
                    avatar={ <Avatar aria-label="recipe" {...stringAvatar(note.nome)} /> }
                    title={note.nome}
                    action={ <Typography variant='body2' color='white' >{moment(note.createdAt).locale('pt-br').fromNow()}</Typography> }
                    />
                </Paper>

                <CardContent>
                    <Typography className={classes.content} variant="body2" color="textSecondary"
                    component="h2">{note.conteudo}</Typography>
                </CardContent>
                    
                <div className={classes.options}>
                        <div>
                            <Typography variant="body2" color="textSecondary" >última atualização {moment(note.updatedAt).locale('pt-br').fromNow()}</Typography>
                        </div>
                        <CardActions className={classes.cardActions}>
                            <Tooltip title="Editar">            
                                <Button size='small' color='primary' onClick={() => setCurrentId(note.id)}>
                                    <UpdateIcon fontSize='small' />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Deletar">
                                <Button size='small' color='primary' onClick={deleteClick} >
                                    <DeleteIcon fontSize='small' />
                                </Button>
                            </Tooltip>
                        </CardActions>
                </div>
            </Card>
    );
}

export default Note;