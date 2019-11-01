import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewForm = (props) => {
  return (
    <Form style={{padding: '10%'}}>
        <Row form>
            <Col md={6}>
            <FormGroup>
                <Label for="fName">First Name</Label>
                <Input type="text" name="firstname" id="firstname" placeholder="First Name" />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="lName">Last Name</Label>
                <Input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            </FormGroup>
            </Col>
        </Row>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="please enter valid email" />
            </FormGroup>
        <Row form>
            <Col>
            <FormGroup>
                <Label for="UIN">UIN</Label>
                <Input type="text" name="uin" id="uin" placeholder="9 digit uin"/>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label for="PIN">PIN</Label>
                <Input type="text" name="pin" id="pin" placeholder="PIN"></Input>
            </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col sm={6}>
                <FormGroup>
                    <Label for="Supervisor">Supervisor Name</Label>
                    <Input type="text" name="supervisor" id="supervisor"/>
                </FormGroup>
            </Col>
            <Col sm={2}>
                <FormGroup>
                    <Button style={{position: 'absolute', bottom: '1rem'}}>Sign in</Button>
                </FormGroup>
            </Col>
        </Row>
    </Form>
  );
}

export default NewForm;