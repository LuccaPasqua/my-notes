import { HomeContainer, SignupContainer, TitleAndDescriptionContainer, ErrorMessageContainer } from "./styles"
import notebook from '../../assets/notebook.png'
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import z from 'zod'

const UserRegisterSchema = z.object({
  name: z.string().min(3, {message: 'Must be 3 or more characters'}),
  email: z.string().email().min(5, {message: 'Must be 5 or more characters'}),
  password: z.string().min(6, {message: 'Must be 6 or more characters'})
})

export function Home() {
  const navigate = useNavigate()

  const [ registerObject, setRegisterObject] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [isRegisterObjectIncomplete, setIsRegisterObjectIncomplete] = useState(true)

  // const [nameOfUser, setNameOfUser] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  function registerUser(e:any){
    const user = UserRegisterSchema.parse(registerObject)
    e.preventDefault()
    axios.post('http://localhost:3333/api/v1/auth/register',{
      name: user.name,
      email: user.email,
      password:user.password
    }).then(res => {
      console.log(res.data)
      const userToken = res.data.token
      console.log(userToken)
      navigate('/notes')
    }).catch(err => {
      console.log(err.response.data.message)
      setErrorMessage(err.response.data.message)
    });
  }

  useEffect(()=> {
    setErrorMessage('')

    if(
      registerObject.name.length >= 3 && 
      registerObject.email.length >= 6 &&
      registerObject.password.length >= 6
    ){
      setIsRegisterObjectIncomplete(false)
    } else {
      setIsRegisterObjectIncomplete(true)
    }

  },[registerObject])

  return(
    <>
      <HomeContainer > 
        <TitleAndDescriptionContainer>
          <img className="notebookImage" src={notebook} alt=""/>

          <div className='titleDiv'>
            <h1><span className="my">My</span><span>.</span><span className="notes">Notes</span></h1>
            
            <div className='paragraphDiv'>
              <span></span>
              <p>A simple way to take your notes wherever you go</p>
            </div>
            
          </div>
        </TitleAndDescriptionContainer>

        <SignupContainer>
          <h2>Create account</h2>
            <form onSubmit={registerUser}>
              <input 
                type="text"
                placeholder="Full name"
                value={registerObject.name}
                onChange={(e) => setRegisterObject({...registerObject, name: e.target.value})}
                name="nameOfTheUser"
              />
              <input 
                type="email" 
                id="iemail" 
                placeholder="Email"
                value={registerObject.email}
                onChange={(e) => setRegisterObject({...registerObject, email: e.target.value})}
                name="email"
              />
              <input 
                type="password" 
                placeholder="Password"
                minLength={6}
                value={registerObject.password}
                onChange={(e) => setRegisterObject({...registerObject, password: e.target.value})}
                name="password"
              />
              <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
              <button 
                type="submit" 
                className="createAccount"
                disabled={isRegisterObjectIncomplete}
              >Create</button>
              
              {/* <button className="signInWithGoogle"><img src={googleLogo} />Sign in with Google</button> */}
              <Link to="/Login">Login</Link>
            </form>
          
        
          
        </SignupContainer>
      </HomeContainer>
    </>
  )
}