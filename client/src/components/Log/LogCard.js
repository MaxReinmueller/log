import React from 'react';
import '../../page.css';
import {  Badge, Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';


const LogCard = (props) => {
  return (
    <Card body outline color="success" body inverse style={{ backgroundColor: 'black', borderColor: '#333' }} className="mb-4">
      <CardHeader>{props.date}</CardHeader>
      <CardTitle><h3>{props.title}</h3></CardTitle>
      <CardBody>
        <CardText>{props.note}</CardText>
        <Badge color="success" pill className="blackText"> {props.category} </Badge>
      </CardBody>
    </Card>
  );
}

export default LogCard;