import React from 'react';
import '../App.css';
import '../page.css'
import { Container, Row, Col } from 'reactstrap';
import PipNav from '../components/nav/PipNav'
import Header from '../components/FooterHeader/Header'
import Footer from '../components/FooterHeader/Footer'
// import TestComp from '../components/TestComp';



class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }


  render() {
    return(
      <div className="All app">
      <Container fluid >
        <Row>
          <Col>
        <Header />
        <PipNav />
        <Footer />
        </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default LandingPage;