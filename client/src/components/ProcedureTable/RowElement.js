import React from 'react';
import AppButtonDrop from './AppButtonDrop';
import { Input } from 'reactstrap';

class RowElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            formStatus: false
        };
    }

    handleChange (event) {
        this.setState({formStatus: true})
    }

    submitForm(e) {
        e.preventDefault();
        const { formStatus } = this.state;
        const { onSubmit } = this.props;
        onSubmit(formStatus);

        this.submitForm = this.submitForm.bind(this);
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
        if (formStatus == true) {
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
                        <td style={{paddingTop: '0'}}><Input type="checkbox" onChange={ this.handleChange.bind(this) } name={ checkboxName } value={ this.state.isComplete } />{''}</td>
                </tr>
        );

    }
}

export default RowElement;