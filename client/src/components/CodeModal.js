import axios from 'axios'
import { sortedLastIndex, update } from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import './CodeModal.css';

const MODAL_STYLES = {
  position: 'fixed',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '30px',
  zIndex: 1000,
  border: "3px solid black"
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

export default function Modal({ open, onClose }) {
  const [user, loading, error] = useAuthState(auth);
  const [key, setKey] = React.useState("");
  if (!open) return null

  function getCode() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "Uid": user?.uid
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://resint.herokuapp.com/getCode", requestOptions)
        .then(response => response.json())
        .then(result => {
            setKey(result.key);
        })
        .catch(error => console.log('error', error));
    }
  

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="modal-container">
        <button onClick={onClose} className="xBtn">X</button>
        <h3>Your chrome extension key:</h3>
        <div>
            {key == "" && <button className="reveal-key" onClick={getCode}>Reveal Key</button>}
            { key != "" && <div>{key}</div> }
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}