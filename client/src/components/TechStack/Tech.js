import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

const Tech = () => {
  return (
    <Row>
      <Col >
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/js_800x800.jpg?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >JavaScript</CardTitle>
              {/* What it is */}
              <CardText>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/public/logo192.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >React</CardTitle>
              {/* What it is */}
              <CardText>React is a JavaScript library for building user interfaces.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/mongodb.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >Mongodb</CardTitle>
              {/* What it is */}
              <CardText>MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/expressjs.jpg?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >Express</CardTitle>
              {/* What it is */}
              <CardText>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/heroku.jpg?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >Heroku</CardTitle>
              {/* What it is */}
              <CardText>Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/strapi.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >Strapi</CardTitle>
              {/* What it is */}
              <CardText>Strapi is the next-gen headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/gatsby.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >Gatsby</CardTitle>
              {/* What it is */}
              <CardText>Gatsby.js is a PWA (Progressive Web App) generator.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/graphQL.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >GraphQL</CardTitle>
              {/* What it is */}
              <CardText>GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.</CardText>
            </Col>
          </Row>
        </Card>
        <Card body outline color="success" inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="text-left">
          <Row>
            <Col lg="1.5">
              <CardImg src="https://github.com/MaxReinmueller/logfoobar/blob/master/src/assets/images/node.png?raw=true" style={{maxWidth: "75px"}}></CardImg>
            </Col>
            <Col>
              <CardTitle >Nodejs</CardTitle>
              {/* What it is */}
              <CardText>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.</CardText>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Tech; 