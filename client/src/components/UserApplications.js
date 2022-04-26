import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout } from "../firebase";
import EditModal from './EditModal';
import editbutton from './icons/edit.png';
import deletebutton from './icons/delete.png';
import './UserApplications.css';

function UserApplications({apps}) {
    const [user, loading, error] = useAuthState(auth);
    const [isOpen, setIsOpen] = useState(false);
    const [app, setApp] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/"); // "/" is the login page
    }, [user, loading, isOpen, app]);

    apps.sort((a, b) => (a.CompanyName > b.CompanyName) ? 1 : -1)

    function deleteApplication(e, did, index) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "Uid": user?.uid,
            "did": did
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://resint.herokuapp.com/deleteApp", requestOptions)
            .then(response => response.json())
            .then(result => {
                apps = apps.splice(index, 1)
            })
            .catch(error => console.log('error', error));
    }

    async function opened(e, application) {
        e.preventDefault();
        setIsOpen(true);
        setApp(application);
    }

    const userApps = apps.map(( listValue, index ) => {
        return (
            <>
            <tr key={index}>
            <td>{index + 1}</td>
            <td><a href={listValue.Link} target="_blank">{listValue.CompanyName}</a></td>
            <td>{listValue.JobTitle}</td>
            <td>{listValue.JobLocation}</td>
            <td className="proj-desc">{listValue.CompanyDescription}</td>
            <td>{listValue.Notes}</td>
            <td>{listValue.Date.substring(0,10)}</td>
            <td>{listValue.Status}</td>
            <td><button onClick={(event) => opened(event, listValue)}><img src={editbutton}/></button></td>
            <td><button onClick={(event) => deleteApplication(event, listValue.did, index)}><img src={deletebutton}/></button></td>
            </tr>
            {isOpen && <EditModal open={isOpen} onClose={() => setIsOpen(false)} userid={user?.uid} app={app}/>}
            </>
        );
        })
        return (
            userApps
        )
}
export default UserApplications;