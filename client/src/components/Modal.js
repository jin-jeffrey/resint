import axios from 'axios'
import { update } from 'lodash'
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '30px',
  zIndex: 1000,
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

export default function Modal({ open, userid, onClose, updateAppList }) {
  const [data, setData] = useState()
  const [errorMessage, setErrorMessage] = useState();
  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.Status == null) {
      data.Status = "Applied";
    }
    
    var config = {
        method: 'post',
        url: 'https://resint.herokuapp.com/addApp',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
    };
    
    axios(config)
    .then(function (response) {
        updateAppList(data);
        setErrorMessage("");
        onClose();
    })
    .catch(function (error) {
        setErrorMessage("Please make sure all fields are selected!")
        console.log(error);
    });
}

  const handleChange = (event) => {
    let newData = {}
    const name = event.target.name;
    const value = event.target.value;
    newData[name] = value
    setData(data => ({
      Uid: userid,
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
          <label htmlFor="CompanyName"> Company Name <span className="required">*</span></label>
          <input name="CompanyName" onChange={handleChange} style={{width: "100%"}}/><br/><br/>
          
          <label htmlFor="CompanyDescription"> Company Description <span className="required">*</span></label>
          <input name="CompanyDescription" onChange={handleChange} style={{width: "100%", height: "80px"}} /><br/><br/>
          
          <label htmlFor="Notes"> Notes <span className="required">*</span></label>
          <input name="Notes" onChange={handleChange} style={{width: "100%", height: "50px"}} /><br/><br/>
          
          <label htmlFor="JobTitle"> Job Title <span className="required">*</span></label>
          <input name="JobTitle" onChange={handleChange} style={{width: "100%"}}/><br/><br/>

          <label htmlFor="JobLocation"> Job Location <span className="required">*</span></label>
          <input name="JobLocation" onChange={handleChange} style={{width: "100%"}}/><br/><br/>

          <label htmlFor="Date" >When did you apply? <span className="required">*</span></label>
          <input name="Date" type="date" onChange={handleChange} style={{width: "100%"}}/><br/><br/>

          <label htmlFor="Status">What is your status? <span className="required">*</span></label> < br/>
            <select name="Status" className="status" onChange={handleChange} value={data?.Status}>
                <option value="Applied">Applied</option>
                <option value="Referral">Applied with Referral</option>
                <option value="OA">OA/First Round</option>
                <option value="Final">Final Round</option>
                <option value="Offer">Offer/Accepted Offer</option>
                <option value="NoOffer">No Offer</option>
            </select> <br/><br/>
          
          <label htmlFor="Link" >Application URL <span className="required">*</span></label>
          <input name="Link" type="url" onChange={handleChange} style={{width: "100%"}}/>
          <h5 className="error-msg">{errorMessage}</h5>
        </form>
        <br/><br/>

        <button className="buttonForm" onClick={onClose} style={{backgroundColor: 'red'}} >Cancel</button>
        <button className="buttonForm" onClick={handleSubmit} style={{backgroundColor: 'green'}}>Submit</button>
        </div>
    </>,
    document.getElementById('portal')
  )
}