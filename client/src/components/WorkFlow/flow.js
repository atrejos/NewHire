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
                                        <Col></Col><Col></Col><Col ><Cardy stepName="Student worker Hires" stepDesc="description"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col><Cardy stepName="Background Check Requested" stepDesc="description"/></Col><Col><Cardy stepName="Recieved Paperwork from Hiring Supervisor" stepDesc="RTH IAWP Resume"/></Col><Col><Cardy stepName="Paperwork sent to Compliance" stepDesc="description"/></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col><Cardy stepName="Background Check Cleared" stepDesc="description"/></Col><Col></Col><Col><Cardy stepName="Paperwork Approved by Compliance" stepDesc="description"/></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col></Col><Col><Cardy stepName="Paperwork approved by Jeff Tools" stepDesc="description"/></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="Email sent to Student Worker to come in and complete I-9 paperwork" stepDesc="description"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="Student Worker I-9 and Paperwork Completed" stepDesc="desc"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="Student Worker submitted in Workday" stepDesc="description"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="Onboarding Complete" stepDesc="desc"/></Col><Col></Col><Col></Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col></Col><Col></Col><Col><Cardy stepName="Hire Process Complete" stepDesc="desc"/></Col><Col></Col><Col></Col>
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