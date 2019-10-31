import React from 'react';
import AppButtonDrop from './AppButtonDrop';
import { Input } from 'reactstrap';

class RowElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false
        };
    }
    render() {
        const DateIn = this.props.DateIn;
        const Step = this.props.Step;
        const Form = this.props.Form;
        const CompletedBy = this.props.CompletedBy;
        const Procedure = this.props.Procedure;
        const num = this.state.num;

        return(
                <tr>
                        <td>{num}</td>
                        <td>{DateIn}</td>
                        <td>{Step}</td>
                        <td>{Form}</td>
                        <td>{CompletedBy}</td>
                        <td>{Procedure}</td>
                        <td>{this.state.isComplete}</td>{/*Will make status either a progress bar or display a x/total ratio*/}
                        <td style={{paddingTop: '10px'}}><Input type="checkbox" />{''}complete</td>
                </tr>
        );

    }
}

export default RowElement;