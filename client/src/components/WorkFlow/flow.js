import React from 'react';
import { Row, Col, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardy from './cards';

//Flow Diagram Page

function Flow() {
    return (
        <div>
            <h1>Flow Diagram Page</h1>
            <br></br>
            <div>
                <div>
                    <Container>
                        <Col>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col >
                                    <Cardy id="card-1"/>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <Cardy id="card-2"/>
                                </Col>
                                <Col>
                                    <Cardy id="card-3"/>
                                </Col>
                                <Col>
                                    <Cardy id="card-4"/>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-5"/>
                                </Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-6"/>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-7"/>
                                </Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-8"/>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-9"/>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-10"/>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-11"/>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                <Cardy id="card-12"/>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Col>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Flow;