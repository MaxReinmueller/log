import React from 'react';
import log_entries from '../utils/log_entries.json';
import '../page.css';
import { Container, Row, Col, Button } from 'reactstrap';
import MobileNav from '../components/nav/MobileNav';
import LogCard from '../components/Log/LogCard';
import CreateLog from '../components/Log/CreateLog';

class Log extends React.Component {
constructor(props){
  super(props);
    this.state = {
        log_entries
      }
}

render(){
  return(
    <div className="All">
      <MobileNav />
      <Container>
      <h1 className="headerText mt-4 mb-3">Log Entries </h1>
      <CreateLog />
      <p className="headerText mt-3">Some kind of filter goes here</p>
      {this.state.log_entries.map((entry) => (
      <LogCard 
        id={entry.id}
        title={entry.title}
        date={entry.date_modified}
        note={entry.note}
        category={entry.category}
      />
      ))}
      <br></br>
      
      </Container>
    </div>
  )
}
}

export default Log