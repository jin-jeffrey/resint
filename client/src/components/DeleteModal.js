import axios from 'axios'
import { sortedLastIndex, update } from 'lodash'
import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import './DeleteModal.css'

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

export default function Modal({ open, onClose, app, deleteApplication }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="modal-container">
        <h3>Are you sure you want to delete the application?</h3>
        <div className="button-group">
            <button className="delete-button" onClick={() => deleteApplication(app.did)}>Delete</button>
            <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
    </div>
    </>,
    document.getElementById('portal')
  )
}