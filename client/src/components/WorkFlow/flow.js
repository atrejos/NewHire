import React from 'react';
import { Row, Col, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardy from './cards';

//Flow Diagram Page

class Flow extends React.Component {
         render() {
            return (
                <div>
                    <h1>Flow Diagram Page</h1>
                    <br></br>
                    <div>
                        <div>
                            <Container>
                                <Col>
                                    <Row>
                                        <Col></Col><Col></Col><Col ><Cardy stepName="step 1" stepDesc="description of step 1"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col><Cardy stepName="step 2" stepDesc="description of step 2"/></Col><Col><Cardy stepName="step 3" stepDesc="description of step 3"/></Col><Col><Cardy stepName="step 4" stepDesc="description of step 4"/></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col><Cardy stepName="step 5" stepDesc="description of step 5"/></Col><Col></Col><Col><Cardy stepName="step 6" stepDesc="description of step 6"/></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col></Col><Col><Cardy stepName="step 7" stepDesc="description of step 7"/></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="step 8" stepDesc="description of step 8"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="step 9" stepDesc="description of step 9"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="step 10" stepDesc="description of step 10"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="step 11" stepDesc="description of step 11"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="step 12" stepDesc="description of step 12"/></Col><Col></Col><Col></Col>
                                    </Row>
                                </Col>
                            </Container>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Flow;