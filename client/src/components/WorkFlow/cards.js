import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Flow Diagram Page

class Cardy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false
        };
    }
    render() {
        const stepName = this.props.stepName;
        const stepDesc = this.props.stepDesc;
        return(
                <div>
                    <Card style={{ width: 'auto', backgroundColor: 'Azure' }}>
                        <CardBody>
                            <h3>{stepName}</h3>
                            <p>{stepDesc}</p>
                            <div>
                                <Button>Button</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
        );

    }
}

export default Cardy;