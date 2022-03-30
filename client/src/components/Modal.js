import axios from 'axios'
import React, { useState } from 'react'
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
  const [data, setData] = useState()
  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)
  //   var data = JSON.stringify({
  //     "company": "Testing",
  //     "position": "test",
  //     "description": "cool description",
  //     "date_submitted": "2022-10-20",
  //     "user_id": "OSjGSxSa"
  // });
    
  var config = {
      method: 'post',
      url: 'http://localhost:8000/addApp',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(data)
  };
    
  axios(config)
  .then(function (response) {
      console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
  });
}

  const handleChange = (event) => {
    let newData = {}
    const name = event.target.name;
    const value = event.target.value;
    newData[name] = value
    setData(data => ({
      ...data,
      ...newData
    }))
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="modal-container">
        <button onClick={onClose} className="xBtn">X</button>
        <br/><br/>

        <h1>New Application Form</h1><br/>
        <form>
          <label htmlFor="CompanyName"> Company Name </label>
          <input name="CompanyName" onChange={handleChange} style={{width: "100%"}}/><br/><br/>
          
          <label htmlFor="CompanyDescription"> Company Description </label>
          <input name="CompanyDescription" onChange={handleChange} style={{width: "100%", height: "80px"}} /><br/><br/>
          
          <label htmlFor="Notes"> Notes </label>
          <input name="Notes" onChange={handleChange} style={{width: "100%", height: "50px"}} /><br/><br/>
          
          <label htmlFor="JobTitle"> Job Title </label>
          <input name="JobTitle" onChange={handleChange} style={{width: "100%"}}/><br/><br/>

          <label htmlFor="JobLocation"> Job Location </label>
          <input name="JobLocation" onChange={handleChange} style={{width: "100%"}}/><br/><br/>
          
          <label htmlFor="Check"> Position Remote/On-Site? </label> <br/>
          <div className="check" > 
              <input name="inperson-check" type="checkbox" /> <label htmlFor="inperson">In-Person</label> <br/>
              <input name="remote-check" type="checkbox" /> <label htmlFor="remote">Remote</label> <br/>
          </div>
          <div className="check" > 
            <input name="optional" type="checkbox" /> <label htmlFor="optional">Optional</label> <br/>
            <input name="undetermined" type="checkbox" /> <label htmlFor="undetermined">Undetermined</label><br/><br/>
          </div><br/><br/>

          <label htmlFor="date" >When did you apply?</label>
          <input name="date" type="date" onChange={handleChange} style={{width: "100%"}}/><br/><br/>

          <label htmlFor="status">What is your status?</label> < br/>
            <select name="status" className="status">
                <option value="Applied">Applied</option>
                <option value="Referral">Applied with Referral</option>
                <option value="OA">OA/First Round</option>
                <option value="Final">Final Round</option>
                <option value="Offer">Offer/Accepted Offer</option>
                <option value="NoOffer">No Offer</option>
            </select> <br/><br/>
          
          <label htmlFor="Link" >Application URL</label>
          <input name="Link" type="url" onChange={handleChange} style={{width: "100%"}}/> 
        </form> 
        <br/><br/>

        <button className="buttonForm" onClick={onClose} style={{backgroundColor: 'red'}} >Cancel</button>
        <button className="buttonForm" onClick={handleSubmit} style={{backgroundColor: 'green'}}>Submit</button>
        </div>
    </>,
    document.getElementById('portal')
  )
}