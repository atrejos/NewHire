import React from 'react';
import AppButtonDrop from './AppButtonDrop';
import { Input } from 'reactstrap';
import { EventEmitter } from 'events';

class RowElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            formStatus: false
        };
    };

    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value })
    }

    render() {
        const DateIn = this.props.DateIn;
        const Step = this.props.Step;
        const Form = this.props.Form;
        const CompletedBy = this.props.CompletedBy;
        const Procedure = this.props.Procedure;
        const num = this.props.num;
        const isComplete = this.props.isComplete;
        const formStatus = this.props.formStatus;
        const checkboxName = this.props.checkboxName;
        let stat;
        if (this.state.checked == true) {
            stat = <p>y</p>
        }
        else{
            stat = <p>n</p>
        }

        return(
                <tr>
                        <td>{num}</td>
                        <td>{DateIn}</td>
                        <td>{Step}</td>
                        <td>{Form}</td>
                        <td>{CompletedBy}</td>
                        <td>{Procedure}</td>
                        <td>{stat}</td>{/*Will make status either a progress bar or display a x/total ratio*/}
                        <td style={{paddingTop: '0'}}>
                            <Input 
                                type="checkbox" 
                                onChange={this.handleChange}
                                checked={this.state.rememberMe}
                                name="rememberMe"  
                            />
                        </td>
                </tr>
        );

    }
}

export default RowElement;