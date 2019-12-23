import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

const ErrorMessage = ({error}) => {
    let status = error.message ? true : false;
    const [show, setShow] = useState(status);

    useEffect(() => {
        setShow(status)
    }, [status]);

    return (
            <div
                style={{
                position: 'absolute',
                top: 10,
                right: 10,
                }}
            >
                <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">Star Wars API Error</strong>
                    </Toast.Header>
                    <Toast.Body>{error.message || "Unknown Error"}</Toast.Body>
                </Toast>
            </div>
    );
}

export default ErrorMessage;