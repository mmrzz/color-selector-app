import React from 'react'

function Content() {
    const handleNameChange = () => {
    const names = ['himself', 'you', 'her'];
    const int = Math.floor(Math.random()*3);

    return names[int];
    }

  return (
    <main>
        <p>The autor of this page wish {handleNameChange()}  dead.</p>
    </main>
  )
}

export default Content