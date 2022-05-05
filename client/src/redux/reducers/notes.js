import { FETCH_ALL, CREATE, UPDATE, DELETE, DELETE_ALL } from '../constants/actionTypes.js';

const switchAction = (notes = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            // Ordenam as notas por tempo de criação
            action.payload.map((note) => note.createdAt = new Date(note.createdAt));
            action.payload.sort((a,b) => a.createdAt - b.createdAt);       
            return action.payload;
        case CREATE:
            return [...notes, action.payload];
        case UPDATE:
            return notes.map((note) => note.id === action.payload.id ?
            action.payload : note);
        case DELETE:
            return notes.filter((note) => note.id !== action.payload);
        case DELETE_ALL:
            return [];
        default:
            return notes;
    }
}

export default switchAction;