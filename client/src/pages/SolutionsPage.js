import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../page.css';
import MobileNav from '../components/nav/MobileNav'
import solutions from '../utils/solutions.json';
import SolutionCard from '../components/Solutions/SolutionCard';
import Header from '../components/FooterHeader/Header';
import Footer from '../components/FooterHeader/Footer';
// import TestComp from '../components/TestComp';



class SolutionsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      solutions
    };
  }


  render() {
    return(
      <div className="All">
      <MobileNav />
      <Container>
      <div className="mt-4">
      <h1 className="headerText">Solutions</h1>
      <p className="headerText">Code examples</p>
      </div>
        <Row lg="2">
        {this.state.solutions.map((solution) => (
          <Col lg="6" style={{marginTop: '2rem'}}>          
            <SolutionCard 
            id={solution.id}
            title = {solution.title}
            description={solution.description}
            example={solution.example}            methods={solution.methods}
            explanation={solution.explanation}
            working_example={solution.working_example}
            codeImage={solution.codeImage}
            />
            </Col>
            ))}
        </Row>
      </Container>
      <Footer />
      </div>
    )
  }
}

export default SolutionsPage;