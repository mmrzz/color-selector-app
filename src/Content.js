import React from 'react'

function Content() {
    const handleNameChange = () => {
    const names = ['me', 'you', 'her'];
    const int = Math.floor(Math.random()*3);

    return names[int];
    }

  return (
    <main>
        <p>love {handleNameChange()} </p>
    </main>
  )
}

export default Content