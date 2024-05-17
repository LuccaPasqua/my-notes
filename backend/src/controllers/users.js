const User = require('../models/User')

const getUsers = async ( req,res ) => {
  try{
    const users = await User.find()
    res.status(200).json({users})
  } catch(error) {
    res.status(500).json({ message: error.message });
  }
}

const getUserLogedIn = async (req,res) =>{
  try{  
    const userId = req.user
  } catch(err) {
    console.log(err)
  }
}

module.exports = {getUsers}