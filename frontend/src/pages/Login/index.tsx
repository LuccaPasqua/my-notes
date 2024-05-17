import { useEffect, useState } from 'react'
import { ErrorMessageContainer, LoginPageContainer, TypesOfLoginContainer } from './styles'
import z from "zod"

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLoginSchema = z.object({
  email: z.string().email().min(6, {message: 'Must be 5 or more characters'}),
  password: z.string().min(6, {message: 'Must be 6 or more characters'})
})


export function Login() {
  const navigate = useNavigate()

  const [loginObject, setLoginObject] = useState({
    email: '', 
    password: ''
  })

  const [isLoginObjectIncomplete, setIsLoginObjectIncomplete] = useState(true)

  const [errorMessage, setErrorMessage] = useState('')


  useEffect(() => {
    setErrorMessage('')

    if(loginObject.email.length >= 6 && loginObject.password.length >= 6){
      setIsLoginObjectIncomplete(false)
    }else{
      setIsLoginObjectIncomplete(true)
    }
  }, [loginObject])

  function login(e:any) {
    const user = UserLoginSchema.parse(loginObject)
    e.preventDefault()
    axios.post('http://localhost:3333/api/v1/auth/login', {
      email: user.email,
      password: user.password
    }).then(res => {
      console.log(res.data)
      localStorage.setItem("jwtToken", res.data.token)
      navigate('/notes')
    }).catch(err => {
      console.log(err)
      console.log(err.response.data.message)
      setErrorMessage(err.response.data.message)
    }) 
  }


  return(
    <LoginPageContainer>
      <h1><span className="my">My</span><span>.</span><span className="notes">Notes</span></h1>

      <TypesOfLoginContainer>
        <div>
          <h2>Login to an existing acount</h2>

          <form 
            onSubmit={login}
          >
            <input 
              type='email' 
              placeholder='Email'
              value={loginObject.email}
              onChange={(e) => setLoginObject({...loginObject, email: e.target.value})}
            />
            <input 
              type='password'
              placeholder='Password'
              value={loginObject.password}
              onChange={(e) => setLoginObject({...loginObject, password: e.target.value})}
            />
            <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
            <button 
              type='submit' 
              className='enterAccount' 
              disabled={isLoginObjectIncomplete}
            >Login</button>


            {/* <button className="logInWithGoogle"><img src={googleLogo} />Login with Google</button> */}

          </form>
          <Link to="/">Create Account</Link>
        </div>
        
      </TypesOfLoginContainer>
      
    </LoginPageContainer>
  )
}