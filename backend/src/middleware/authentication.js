const { UnauthenticatedError } = require("../errors")
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req,res,next) => {
  //check header
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new UnauthenticatedError('Authentication invalid')
  }

  const token = authHeader.split(' ')[1];

  try{
    const payload = jwt.verify(token, process.env.JWT_TOKEN)

    const user = User.findById(payload.id).select('-password')
    req.user = user
    
    req.user = {userId: payload.userId, name: payload.name, email: payload.email}
    next()
  }catch(error){
    throw new UnauthenticatedError('Authentication Invalid')
  }
}

module.exports = auth