import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Notes } from './pages/Notes'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/notes" element={<Notes />}/>
    </Routes>
  )
}