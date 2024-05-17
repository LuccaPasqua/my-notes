const { StatusCodes } = require("http-status-codes")
const { UnauthenticatedError, BadRequestError } = require("../errors")
const User = require("../models/User")



const register = async (req,res) => {
  const {name, email, password} = req.body;

  if(!name || !email || !password) {
    throw new BadRequestError('Please fill in all the fields')
  }

  try{
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(201).json({user: { name: user.name }, token})
  } catch(error) {
    // throw new BadRequestError('Something went worng!')
    const doesUserExist = await User.findOne({email})
    if(doesUserExist) {
      res.status(400).json({message: 'User alredy exist!'})  
    }

    res.status(400).json({message: 'Something went wrong!'})
  }
}

const login = async (req,res) => {
  const {email, password} = req.body

  if(!email || !password){
    res.status(400).json({message: 'Please provide email and password !'})
  }

  const user = await User.findOne({email})

  if(!user) {
    res.status(400).json({message: 'User does not exist!'})
  }

  const isPasswordCorrect = await user.comparePassword(password)

  if(!isPasswordCorrect){
    throw new UnauthenticatedError('Invalid Credentials!')
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({user: {name: user.name}, token})
}
 
module.exports = {
  register,
  login
} 