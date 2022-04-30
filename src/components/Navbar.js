import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link to="/" className='btn'>Home</Link>
        <Link to="/gallery" className='btn'>Gallery</Link>
        <Link to="/signup" className='btn'>Signup</Link>
        <Link to="/login" className='btn'>Login</Link>
      </nav>
    </>
  )
}
