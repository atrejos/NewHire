import React from 'react';
import { Row, Col, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

//Flow Diagram Page

// class Hoverable extends React.Component {
//     state = { hovered: false };
//     render() {
//         return (
//             <div
//                 onMouseEnter={() => this.setState({ hovered: true })}
//                 onMouseLeave={() => this.setState({ hovered: false })}
//             >
//                 {this.props.children(this.state.hovered)}
//             </div>
//         );
//     }
// }

// function Cardy() {
//     return(
//         <Hoverable>
//                 {hovered => <div>{hovered ? <div><Card style={{
//                 height: 50,
//                 width: 100,
//                 backgroundColor: 'Azure'
//             }}>
//                 <CardBody>
//                     <CardTitle>{}</CardTitle>
//                     <CardText>{}</CardText>
//                 </CardBody>
//             </Card></div> : <div><Card style={{
//                 height: 50,
//                 width: 100,
//                 backgroundColor: 'blue'
//             }}>
//                 <CardBody>
//                     <CardTitle>{}</CardTitle>
//                     <CardText>{}</CardText>
//                 </CardBody>
//             </Card>}
//             </div>
//         </Hoverable>
//     <div>
//         <Card style={{
//             height: 50,
//             width: 100,
//             backgroundColor: 'Azure'
//         }}>
//             <CardBody>
//                 <CardTitle>{}</CardTitle>
//                 <CardText>{}</CardText>
//             </CardBody>
//         </Card>
//     </div>

function Cardy() {
    return(
            <div>
                <Card style={{ width: 'auto', backgroundColor: 'Azure' }}>
                    <CardBody>
                        <CardTitle>Title</CardTitle>
                        <CardText>text</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
    );
}

export default Cardy;