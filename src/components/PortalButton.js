import React from 'react'
import ReactDOM from 'react-dom'

//complete this function using portals
const PortalButton = ({ buttonclick }) => {
  const handleClick = () => {
    buttonclick()
  }

  return ReactDOM.createPortal(
    <div>
      <button id="button" onClick={handleClick}>
        Click
      </button>
    </div>,
    document.getElementById('portal-button')
  )
}
export default PortalButton

//portal-button id will be used here for portal purpose
