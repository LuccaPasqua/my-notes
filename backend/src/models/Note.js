const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    minlenght:1,
    maxlenght: 60
  },
  content: {
    type: String,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user']
  }
})

module.exports = mongoose.model('Note', NoteSchema) 