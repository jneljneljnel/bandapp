import React, { Component } from 'react';
import '../App.css';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


  const ShowName = (props) => (
      <div>
        {props.name}
      </div>
  )

class Merch extends Component {


  render(){
  return (
     <Col sm={12} md={6} mdOffset={3}>
        <h2>Merch Dash</h2>
        <br/>
        <h4>add stuff here</h4>
        <ShowName name='jnel'></ShowName>

     </Col>
      );
  }
}

export default Merch;