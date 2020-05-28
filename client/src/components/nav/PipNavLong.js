import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import './PipNav.css'

const PipNavLong = () => {
  return (
      <Row className="longNav">
        <Col>
        {/* <Button outline color="success" size="md"  href="/solutions" >SOLUTIONS</Button> */}
        <Button outline color="success" size="md"  href="/techstacks">TECH / STACKS</Button>
        <Button outline color="success" size="md"  href="/log">LOG ENTRIES</Button>
        {/* <Button outline color="success" size="md"  href="https://maxreinmueller.github.io/">GITHUB</Button> */}
        </Col>
      </Row>
  )
}

export default PipNavLong;