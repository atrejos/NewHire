import React from 'react';
import { Card } from 'reactstrap';

class CandidateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false
        };
    }
    render() {
        const CandName = this.props.CandName;
        const Email = this.props.email;
        const UIN = this.props.UIN;
        const DOH = this.props.DOH;
        const Pin = this.props.Pin;

        return(
                <div>
                    <Card>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Candidate Name: {CandName}</li>
                            <li>Email: {Email}</li>
                            <li>UIN#: {UIN}</li>
                            <li>Date of Hire: {DOH}</li>
                            <li>Pin# {Pin}</li>
                        </ul>
                    </Card>
                </div>
        );

    }
}

export default CandidateCard;