import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

	componentDidMount() {

	}

	render() {
		return (
      <div>
        <Jumbotron></Jumbotron>
      </div>
		);
	}
}

export default Landing;