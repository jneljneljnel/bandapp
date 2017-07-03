import React, { Component } from 'react';
import '../App.css';
import { Col, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';


const FormGroupSingle = (props) => (
	<FormGroup>
		<ControlLabel>{props.title}</ControlLabel>
		<FormControl 
		    type="text"
		    placeholder={props.title}            
		  />
	</FormGroup>
)


class AddShow extends Component {

	fields = [
		'Date',
		'Time',
		'Venue',
		'Address',
		'City',
		'State',
		'Zip',
		'Capacity',
		'Door Deal',
		'Guarantee',
		'Set time',
		'Load in',
		'Full Schedule',
		'Venue Contact',
		'Venue Contact Number',
		'Venue Contact Email',
		'Part of Tour'
	];

  render() {
    return (
    <div>	
      <Col sm={12} md={6} mdOffset={3}> 
       <h2>Add a Show {this.props.name}</h2>
		<ul>		
		{
			this.fields.map((title) => {
				return (<FormGroupSingle title={title}></FormGroupSingle>)
			})
		}								
		</ul>
      </Col>
    </div>
    );
  }
}

export default AddShow;
