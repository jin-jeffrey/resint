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
      <div style={MODAL_STYLES} className="modal-container">
        <button onClick={onClose} className="xBtn">X</button>
        <br/><br/>

        <h1>New Application Form</h1><br/>
        <form>
          <label for="CompanyName"> Company Name </label>
          <input name="CompanyName" style={{width: "100%"}}/><br/><br/>
          
          <label for="CompanyDescription"> Company Description </label>
          <input name="CompanyDescription" style={{width: "100%", height: "80px"}} /><br/><br/>
          
          <label for="Notes"> Notes </label>
          <input name="Notes" style={{width: "100%", height: "50px"}} /><br/><br/>
          
          <label for="JobTitle"> Job Title </label>
          <input name="JobTitle" style={{width: "100%"}}/><br/><br/>

          <label for="JobLocation"> Job Location </label>
          <input name="JobLocation" style={{width: "100%"}}/><br/><br/>
          
          <label for="Check"> Position Remote/On-Site? </label> <br/>
          <div className="check" > 
              <input name="inperson-check" type="checkbox" /> <label for="inperson">In-Person</label> <br/>
              <input name="remote-check" type="checkbox" /> <label for="remote">Remote</label> <br/>
          </div>
          <div className="check" > 
            <input name="optional" type="checkbox" /> <label for="optional">Optional</label> <br/>
            <input name="undetermined" type="checkbox" /> <label for="undetermined">Undetermined</label><br/><br/>
          </div><br/><br/>

          <label for="date" >When did you apply?</label>
          <input name="date" type="date" style={{width: "100%"}}/><br/><br/>

          <label for="status">What is your status?</label> < br/>
            <select name="status" className="status">
                <option value="Applied">Applied</option>
                <option value="Referral">Applied with Referral</option>
                <option value="OA">OA/First Round</option>
                <option value="Final">Final Round</option>
                <option value="Offer">Offer/Accepted Offer</option>
                <option value="NoOffer">No Offer</option>
            </select> <br/><br/>
          
          <label for="link" >Application URL</label>
          <input name="link" type="url" style={{width: "100%"}}/> 
        </form> <br/><br/>

        <button className="buttonForm" onClick={onClose} style={{backgroundColor: 'red'}} >Cancel</button>
        <button className="buttonForm" style={{backgroundColor: 'green'}} >Submit</button>

      </div>
    </>,
    document.getElementById('portal')
  )
}