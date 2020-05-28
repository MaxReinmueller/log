import React from 'react';
import log_entries from '../utils/log_entries.json';
import '../page.css';
import noteAPI from '../utils/noteAPI';
import { Container, Row, Col, Button } from 'reactstrap';
import MobileNav from '../components/nav/MobileNav';
import LogCard from '../components/Log/LogCard';
import { Input, FormBtn } from '../components/Form';

class Log extends React.Component {
constructor(props){
  super(props);
    this.state = {
        log_entries,
        notes: [],
        title: '',
        note: '',
        technology: '',
        category: '',
        date: ''
      }
}

  componentDidMount() {
    this.loadNotes();
  }
  
  loadNotes = () => {
    noteAPI.getNotes()
      .then(res => this.setState({notes: res.data, title: '', note: '', technology: '', category: '', date: ''}))
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    noteAPI.deleteNote(id)
      .then(res => this.loadNotes())
      .catch(err => console.log(err));
  };

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.title && this.state.note && this.state.technology && this.state.category && this.state.date) {
			noteAPI.saveNote({
				title: this.state.title,
        note: this.state.note,
        technology: this.state.technology,
        category: this.state.category,
        date: this.state.date
			})
				.then(res => this.loadNotes())
				.catch(err => console.log(err));
		}
	};

render(){
  return(
    <div className="All">
      <MobileNav />
      <Container>
      <form>
        <Input
          value={this.state.title}
          onChange={this.handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <Input
          value={this.state.note}
          onChange={this.handleInputChange}
          name="note"
          placeholder="note (required)"
        />
        <Input
          value={this.state.technology}
          onChange={this.handleInputChange}
          name="technology"
          placeholder="technology (required)"
        />
        <Input
          value={this.state.category}
          onChange={this.handleInputChange}
          name="category"
          placeholder="category (required)"
        />
        <Input
          value={this.state.date}
          onChange={this.handleInputChange}
          name="date"
          placeholder="date (required)"
        />

        <FormBtn
          disabled={!(this.state.author && this.state.note && this.state.technology && this.state.category && this.state.date)}
          onClick={this.handleFormSubmit}
        >
          Submit
        </FormBtn>
      </form>
      <h1 className="headerText mt-4 mb-3">Log Entries </h1>
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