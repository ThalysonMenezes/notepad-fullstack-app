import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getNotes } from './redux/actions/note_actions';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
    }, [currentId, dispatch]);

    return(
        <Container className={classes.gridAppBar}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Notes</Typography>
            </AppBar>
            <Grow in>
                <Container className={classes.gridForm}>
                    <Grid className={classes.mainContainer} container /*esse justify que é a distância*/justifyContent="space-between"
                    alignItems="stretch" spacing={1}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Notes setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>

    );
}

export default App;