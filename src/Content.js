import React from 'react'

const Content = () => {
  const handleClick = () => {
    console.log('you clicked it')
  }
  const handleClick2 = (name) => {
    console.log(`${name} you clicked it`)
  }
  const handleClick3 = (e) => {
    console.log(e.target)
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello!
      </p>
      <button onClick={handleClick}>Click here</button>
      <button onClick={() => handleClick2('katie')}>Click here</button>
      <button onClick={(e) => handleClick3(e)}>Click here</button>
    </main>
  )
}

export default Content
