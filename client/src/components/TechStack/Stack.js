import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

const Stack = () => {
  return (
    <Row>
      <Col >
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col>
            <Row>
              <Col className="text-center">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/mongodb.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
              <CardTitle >Mongodb</CardTitle>
              </Col>
              <h1>+</h1>
              <Col className="text-center">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/expressjs.jpg?raw=true" style={{maxWidth: "75px"}}></CardImg>
              <CardTitle>Express</CardTitle>
              </Col>
              <h1>+</h1>
              <Col className="text-center">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/public/logo192.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
              <CardTitle>React</CardTitle>
              </Col>
              <h1>+</h1>
              <Col className="text-center">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/node.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
              <CardTitle>Node</CardTitle>
              </Col>
            </Row>
            <Col>
              {/* What it is */}
              <CardText className="text-center">MERN stack</CardText>
            </Col>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Stack; 