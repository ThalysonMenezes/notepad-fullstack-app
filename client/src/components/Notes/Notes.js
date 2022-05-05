import React from 'react';
import { Grid, CircularProgress, Grow } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Note from './Note/Note';
import useStyles from './styles';

const Notes = ({ setCurrentId }) => {
    const notes = useSelector((state) => state.notes);
    const classes = useStyles();

    console.log("quandod eu deleto, passa por aqui??")

    return(       
        !notes.length ? <div className={classes.centralized}>  
                             <CircularProgress className={classes.root} />
                        </div>
                        : 
        (
            <Grid className={classes.container} container spacing={1}>
                {notes.map((note) => (
                    <>
                        {/* O erro 'key prop' do console some ao tirar esses comentários e a tag vazia */}
                        {/* Método importante para verificar dados durante a renderização */}
                        {/* <pre>{JSON.stringify(note,null,2)}</pre> */}
                        <Grow in {...{ timeout: 350 }}>
                            <Grid key={note.id} item xs={12} >
                                <Note note={note} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grow>
                    </>
                ))}
            </Grid>
        )
    );
}

export default Notes;