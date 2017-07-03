import React, { Component } from 'react';
import '../App.css';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


class AddShow extends Component {
  render(){
        return (
      <Col sm={12} md={6} mdOffset={3}> 
		<ul>
			<FormGroup>
				<ControlLabel>Date</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Date "            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Start Time</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Start Time "            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>End Time</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="End Time"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Location</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Location"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Street Address</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Street Address"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>City</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="City"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>State</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="State"            
		          />
			</FormGroup>	
			<FormGroup>
				<ControlLabel>Zip</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Zip"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Notes</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Notes"            
		          />
			</FormGroup>	

		</ul>
      </Col>
    );
  }
}

export default AddShow;