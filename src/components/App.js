import React, { useState, useRef } from 'react'
import '../styles/App.css'
import PortalButton from './PortalButton.js'
import PortalTextArea from './PortalTextArea.js'

//complete the function
const App = () => {
  const [text, setText] = useState('')

  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  const handleButtonClick = () => {
    ReactDOM.render(
      <PortalTextArea value={text} />,
      document.getElementById('portal-textfield')
    )
  }

  return (
    <div id="main">
      <input id="input" value={text} onChange={handleInputChange}></input>
      <br />
      <PortalButton buttonclick={handleButtonClick} />
      <br />
      <PortalTextArea value={text} />
    </div>
  )
}

export default App
