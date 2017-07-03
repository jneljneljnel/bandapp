import React, { Component } from 'react';
import '../App.css';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class AddShow extends Component {
  render() {
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
				<ControlLabel>Time</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Time "            
		          />
			</FormGroup><FormGroup>
				<ControlLabel>Venue</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Venue"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Address</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Address"            
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
				<ControlLabel>Capacity</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Capacity"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Door deal</ControlLabel>
				<FormControl
		            type="checkbox"
		            placeholder="Door"            
		          />
			</FormGroup>	
			<FormGroup>
				<ControlLabel>Guarantee</ControlLabel>
				<FormControl
		            type="checkbox"
		            placeholder="Door"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Load in</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Loadin"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Set Time</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Set Time"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Full Schedule</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="full Schedule"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Venue Contact</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Venue Contact"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Venue Contact Number</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Venue Contact Number"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Venue Contact Email</ControlLabel>
				<FormControl
		            type="text"
		            placeholder="Venue Contact Email"            
		          />
			</FormGroup>
			<FormGroup>
				<ControlLabel>Part of Tour</ControlLabel>
				<FormControl
		            type="checkbox"
		            placeholder="Door"            
		          />
			</FormGroup>										
		</ul>
      </Col>
    );
  }
}

export default AddShow;
