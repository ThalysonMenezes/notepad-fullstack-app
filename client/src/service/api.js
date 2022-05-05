import axios from 'axios';

// Altere aqui a porta que adicionou nas variáveis de ambiente do servidor
const PORT = 8080;

const url = `http://localhost:${PORT}`;

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote);
export const updateNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
export const deleteAllNotes = () => axios.delete(url);