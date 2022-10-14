import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import BarraFlotante from "./BarraFlotante";
import SectionMap from "./SectionMap";

export function Header() {
    return(
        <React.Fragment>
            <header className="header">
                <Container className="container-header">
                    <div className="title-ip">
                        <h1>IP Adress Tracker</h1>
                        <form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Search for any IP address or domain" autoComplete="on"/>
                            </Form.Group>
                            <Button variant="primary" type="submit"> 
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </Button>
                        </form>
                    </div>
                </Container>
                <BarraFlotante/>
                <SectionMap/>
            </header> 

        </React.Fragment>
    )
}

