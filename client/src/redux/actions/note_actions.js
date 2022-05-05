import { FETCH_ALL, CREATE, UPDATE, DELETE, DELETE_ALL } from '../constants/actionTypes.js';

import * as api from '../../service/api.js';

export const getNotes = () => async(dispatch) => {
    try {
        const { data } = await api.fetchNotes();
        dispatch({
            type: FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = (note) => async(dispatch) => {
    try {
        const { data } = await api.createNote(note);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateNote = (id, note) => async(dispatch) => {
    try {
        const { data } = await api.updateNote(id, note);
        
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteNote = (id) => async (dispatch) => {
    try {
        await api.deleteNote(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const deleteNotes = () => async(dispatch) => {
    try {
        const { data } = await api.deleteAllNotes();
        dispatch({
            type: DELETE_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}