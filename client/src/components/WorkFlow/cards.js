import React from 'react';
import { Card, CardBody, UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Flow Diagram Page

class Cardy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false
        };
    }
    onHover = () => {
        this.setState({
            popoverOpen: true,
        })
    }
    onHoverLeave = () => {
        this.setState({
            popoverOpen: false,
        })
    }
    render() {
        const stepName = this.props.stepName;
        const stepDesc = this.props.stepDesc;
        const popoverOpen = this.state.popoverOpen;

        return(
                <div>
                    <Card id="Popover1" onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave} style={{ width: 'auto', backgroundColor: 'Azure' }}>
                        <CardBody>
                            <p>{stepName}</p>
                            {/* <Button id="PopoverFocus" type="Button">info</Button> */}
                            {/* <div>
                                <Button>Button</Button>
                            </div> */}
                        </CardBody>
                    </Card>
                    <UncontrolledPopover trigger="focus" target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} >
                        <PopoverHeader>
                            <p>{stepName}</p>
                        </PopoverHeader>
                        <PopoverBody>
                            <p>{stepDesc}</p>
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
        );

    }
}

export default Cardy;