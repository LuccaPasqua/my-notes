require('express-async-errors');
const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();
const cors = require('cors');

const authenticateUser = require('./middleware/authentication')

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const noteRouter = require('./routes/note');



const app = express();

app.use(cors({ 
  origin: 'http://localhost:3000',
}));

app.use(express.json());


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/note',authenticateUser ,noteRouter);


const port = process.env.PORT || 3000;

const startServer = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`🚀Server running on port ${port}`)
    })
  }catch(error){
    console.log(error)
  }
}

startServer()