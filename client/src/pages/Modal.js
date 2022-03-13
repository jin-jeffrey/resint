import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose} className="xBtn">X</button>
        <br/><br/>
        <form>
            <input placeholder="Company Name"/><br/><br/>
            <input placeholder="Company Description"/><br/><br/>
            <input placeholder="Additional Notes"/><br/><br/>
            <input placeholder="Job Title"/><br/><br/>
            
            <input name="inperson" type="checkbox" /> <label for="inperson">In-Person</label>
            <input name="remote" type="checkbox" /> <label for="remote">Remote</label> <br/>
            <input name="optional" type="checkbox" /> <label for="optional">Optional</label>
            <input name="undetermined" type="checkbox" /> <label for="undetermined">Undetermined</label><br/><br/>
            <input placeholder="On-site"/><br/><br/>
            <input type="date" /><br/><br/>
            <label for="status">What is your status?</label> < br/>
            <select name="status" className="status">
                <option value="Applied">Applied</option>
                <option value="Referral">Applied with Referral</option>
                <option value="OA">OA/First Round</option>
                <option value="Final">Final Round</option>
                <option value="Offer">Offer/Accepted Offer</option>
                <option value="NoOffer">No Offer</option>
            </select> <br/><br/>
            <input name="link" placeholder="Application URL" type="url" /> 
        </form><br/><br/>
        <button onClick={onClose} style={{backgroundColor: 'red'}} >Cancel</button>
        <button style={{backgroundColor: 'green'}} >Submit</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}