import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../page.css'
import MobileNav from '../components/nav/MobileNav'
import Header from '../components/FooterHeader/Header';
import Footer from '../components/FooterHeader/Footer';
import Tech from '../components/TechStack/Tech';
import Stack from '../components/TechStack/Stack';


class TechStacksPage extends React.Component {
  constructor(props){
    super(props);
    this.state= [

    ]
  }

render() {
  return(
    <div className="All">
    <MobileNav />
    <Container >
      <Row style={{paddingTop: "2rem"}}>
        <Col lg="6" className="mb-4">
        <h2 className="headerText">Tech</h2>
            <Tech />
        </Col>
        <Col lg="6">
        <h2 className="headerText">Stacks</h2>
            <Stack />
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  )
}

}

export default TechStacksPage;
