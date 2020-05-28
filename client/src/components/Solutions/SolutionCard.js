import React, { useState } from 'react';
import { Card, Collapse, Button, CardHeader, CardBody,
  CardTitle, CardText, CardImg } from 'reactstrap';
import './SolutionsCard.css'

const ExcCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card body outline color="success" body inverse style={{ backgroundColor: 'black', borderColor: '#333' }}>
        <CardHeader><h3>{props.title}</h3></CardHeader>
        <CardBody>
          {/* <CardTitle><h5>Result</h5></CardTitle>
          <CardText>
            <small className="text-muted">{props.description}</small>
          </CardText> */}
          <CardText>{props.example}</CardText>
            <a href={props.working_example} target={props.working_example}>
              <Button outline color="success" style={{ marginBottom: '1rem', marginRight: '1rem'}}>Working Example</Button></a>

            <Button outline color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Code/Explanation</Button>
            <Collapse isOpen={isOpen}>
              <Card body outline color="success" body inverse style={{ backgroundColor: 'black', borderColor: '#333' }}>
                <CardBody>
                <CardImg bottom width="100%" src={props.codeImage} alt="Card image cap" />
                <CardTitle className="text-muted">Methods Used</CardTitle>
                <CardText>{props.methods}</CardText>
                <CardTitle className="text-muted">How it works</CardTitle>
                <CardText>{props.explanation}</CardText>
                </CardBody>
              </Card>
            </Collapse> 
        </CardBody>
      </Card>
    </div>
    );
}

export default ExcCard;
  