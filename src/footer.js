import React from 'react'

function Footer() {
    
    const year = new Date();

  return (
    <footer>
        <p>copyright &copy; {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer