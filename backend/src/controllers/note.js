const { StatusCodes } = require('http-status-codes')
const Note = require('../models/Note')
const { NotFoundError } = require('../errors')

const createNote = async (req, res) => {
  req.body.createdBy = req.user.userId
  const note = await Note.create(req.body)
  res.status(StatusCodes.CREATED).json({note})
}

const deleteNote = async (req,res) =>{
  const {
    user: {userId},
    params: {id: noteId},
  } = req;

  const note = await Note.findByIdAndDelete({
    _id: noteId,
    createdBy: userId,
  })

  if(!note) {
    throw new NotFoundError(`No note with the id ${noteId}`)
  }

  res.status(StatusCodes.OK).send()
}

const getAllNotes = async (req,res) => {
  try {
    const {userId, email, name} = req.user;

    if(!userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({message: 'User ID not provided or invalid'})
    }

    const notes = await Note.find({createdBy: userId});

    if(!notes) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'No notes found for the user' });
    }

    return res.status(StatusCodes.OK).json({notes, name })
  } catch(err) {
    console.error('Error fetching user notes:', err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error fetching user notes' });
  }
}
const editNote = async (req, res) => {
  const {
    user: { userId },
    params: { id: noteId },
    body: { title, content }, // Extract title and content from request body
  } = req;

  try {
    // Check if note exists and is created by the user
    const note = await Note.findOneAndUpdate(
      {
        _id: noteId,
        createdBy: userId,
      },
      {
        $set: { title, content }, // Update title and content
      },
      { new: true } // Return the updated note
    );

    if (!note) {
      throw new NotFoundError(`No note with the id ${noteId}`);
    }

    res.status(StatusCodes.OK).json({ note });
  } catch (err) {
    console.error('Error editing note:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error editing note' });
  }
};

module.exports = {
  createNote,
  deleteNote,
  getAllNotes,
  editNote
}