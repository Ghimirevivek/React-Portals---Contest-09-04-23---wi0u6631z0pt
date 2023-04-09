import React from 'react'
import ReactDOM from 'react-dom'

//complete this function using portals
const PortalTextArea = ({ value }) => {
  return ReactDOM.createPortal(
    <div>
      <textarea id="textarea" value={value}></textarea>
    </div>,
    document.getElementById('portal-textfield')
  )
}
export default PortalTextArea
//portal-textarea id will be used here for portal purpose
