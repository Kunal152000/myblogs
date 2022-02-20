import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <h1>My Blogs</h1>
      <div className="links">
          <Link  to ="/">Home</Link>
          <Link to ="/create">New Blog</Link>
      </div>
    </nav>
  )
}
