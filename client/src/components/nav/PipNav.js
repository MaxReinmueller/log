import React from 'react';
import '../../page.css'
import './PipNav.css';
import { Container, Row, Col, Button, InputGroup, InputGroupText, InputGroupAddon, Input, } from 'reactstrap';

const PipNav = props => {
  return(
    
      <Container>
        <Row>
          <Col>
      <div className="navBox">
        <h1 className="headerText">console.log(</h1>
          <InputGroup style={{marginBottom: ".6rem"}}>
          <Input outline color="secondary" placeholder="search..."/>
            <InputGroupAddon addonType="append">
              <Button outline color="success">Submit</Button>
            </InputGroupAddon>
        </InputGroup>

        {/* <Button outline color="success" size="lg" block href="/solutions" >SOLUTIONS</Button> */}
        <Button outline color="success" size="lg" block href="/techstacks">TECH / STACKS</Button>
        <Button outline color="success" size="lg" block href="/log">LOG ENTRIES</Button>
        {/* <Button outline color="success" size="lg" block href="https://maxreinmueller.github.io/">GITHUB</Button> */}

      <h1 className="headerText">)</h1>
      </div>
      </Col>
      </Row>
      </Container>
  )
}

export default PipNav;