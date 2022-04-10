import React, { useState, useEffect } from 'react';
import { Table, Card, Image, Button, } from 'react-bootstrap';
import history from '../history';
import Modal from './Modal'
import axios from 'axios';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import UserApplications from './UserApplications';

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}

export default function JobApps(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [applications, setApplications] = useState([])

    function getCurrentDate(separator=' '){
        const months = ["January", "February", "March",
                        "April", "May", "June", "July",
                        "August", "September", "October",
                        "November", "December"]

        let newDate = new Date()
        let date = newDate.getDate();
        let month = months[newDate.getMonth()];
        let year = newDate.getFullYear();
        return `${separator}${month<10?`0${month}`:`${month}`}${separator}${date}, ${year}`
    }


    useEffect(() => {
        if(user){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({
                "uid": user?.uid
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://resint.herokuapp.com/getApps", requestOptions)
                .then(response => response.json())
                .then(result => setApplications(result) )
                .catch(error => console.log('error', error));
        }
        console.log('update')
    }, [user, isOpen])

    return (
        <>
        <Card style={{ margin: 24 }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="align-items-center" style={{ marginRight: 8 }}>
                    <p style={{ marginTop: 8, fontSize: 40, color: '#b2a4d4' }}>Today is {getCurrentDate()}</p>
                </div>
                <Button onClick={() => setIsOpen(true)} style={{ backgroundColor: '#b2a4d4', borderWidth: 0, }}>Add Job</Button>
            </Card.Header>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} userid={user?.uid} />
            <Card.Body>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Company Description</th>
                            <th>Additional Notes</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {applications.length>0 ? <UserApplications apps={applications} />: null}
                    </tbody>
                </Table>
            </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center" />
    </Card>
        </>
    )
}