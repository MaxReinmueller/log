import React from 'react';
import '../page.css'
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay  } from 'reactstrap';
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
      <div className="All">
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