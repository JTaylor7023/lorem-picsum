import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const navStyle = {
    backgroundColor: '#282c34',
    padding: '20px',
    marginBottom: '20px',
  }

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: 0,
    padding: 0,
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  }

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" style={linkStyle}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
