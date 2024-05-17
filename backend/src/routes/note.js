const express = require('express')
const {createNote, deleteNote, getAllNotes, editNote} = require('../controllers/note')

const router = express.Router()

router.route('/').post(createNote).get(getAllNotes)
router.delete('/:id',deleteNote )
router.patch('/:id',editNote )

module.exports = router 