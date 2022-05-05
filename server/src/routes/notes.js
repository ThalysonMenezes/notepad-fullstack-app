import express from 'express';

import { getNotes, createNote, deleteNote, updateNote, deleteNotes } from '../controllers/NotesController.js';

const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
router.patch('/:id', updateNote);
router.delete('/:id', deleteNote);
router.delete('/', deleteNotes);

export default router;