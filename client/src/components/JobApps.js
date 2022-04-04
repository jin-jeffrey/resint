import React, { useState } from 'react';
import { Table, Card, Image, Button, } from 'react-bootstrap';
import history from '../history';
import Modal from './Modal'
import axios from 'axios';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

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

    return (
        <div>
            <Card style={{ margin: 24 }}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className="align-items-center" style={{ marginRight: 8 }}>
                        <p style={{ marginTop: 8, fontSize: 40, color: '#b2a4d4' }}>Today is February 27, 2022</p>
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
                                <th>Company Description</th>
                                <th>Additional Notes</th>
                                <th>Job Title</th>
                                <th>Location</th>
                                <th>On-site/Remote</th>
                                <th>Date Applied</th>
                                <th>Status</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Goldman Sachs</td>
                                <td>Investment Banking Company</td>
                                <td>N/A</td>
                                <td>Software Engineer</td>
                                <td>Shanghai, China</td>
                                <td>On-site</td>
                                <td>02/26/22</td>
                                <td>Applied</td>
                                <td><a href="https://www.goldmansachs.com/"><span>https://www.goldmansachs.com/</span></a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Google</td>
                                <td>FAANG</td>
                                <td>N/A</td>
                                <td>Data Scientist</td>
                                <td>Mountain View, CA</td>
                                <td>On-site</td>
                                <td>02/27/22</td>
                                <td>Applied</td>
                                <td><a href="https://careers.google.com/"><span>https://careers.google.com/</span></a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}