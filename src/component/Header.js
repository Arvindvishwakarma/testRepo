import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap'
function Header(props) {

    const [show, setShow] = useState(true)


    useEffect(() => {
        giveAlert()
    }, [show])


    function giveAlert() {
        alert('Use Effect Trigger')
    }


    return (
        <div>
            <Container>
                {show ? <h1>Hello World!!!</h1> : ""}
            </Container>

            <Button onClick={() => setShow(true)}>Show</Button>
            <Button onClick={() => setShow(false)}>Hide</Button>

        </div>
    )
}

export default Header;

//fragments

