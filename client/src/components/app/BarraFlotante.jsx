import React from "react";
import Container from "react-bootstrap/Container";

export function BarraFlotante() {
    return(
        <React.Fragment>
            <section className="barra-flotante">
                <Container className="container-barra-flotante">
                    <div className="barra-flotante-info">
                        <span>HOLA MI PERRROS</span>
                        <p>INFORMACIUON</p>
                    </div>
                    <div className="barra-flotante-info">
                        <span>HOLA MI PERRROS</span>
                        <p>INFORMACIUON</p>
                    </div>
                    <div className="barra-flotante-info">
                        <span>HOLA MI PERRROS</span>
                        <p>INFORMACIUON</p>
                    </div>
                    <div className="barra-flotante-info">
                        <span>HOLA MI PERRROS</span>
                        <p>INFORMACIUON</p>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}