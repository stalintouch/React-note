import React, { Component } from 'react';
import './NoteForm.css'

class NoteForm extends Component {

  constructor(props) {
    super(props);
    this.state ={
      newNoteContent: ''
    }
  }

  handleUserInput =(e) =>{
    this.setState({
      newNoteContent: e.target.value
    })
  }

  writeNote=() =>{
    this.props.addNote(this.state.newNoteContent)
    this.setState({
      newNoteContent:''
    })
  }

  render() {
    return (
      <div className="formWrapper">
        <input 
          className="noteInput" 
          placeholder="Write a note baby"
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}
        />
        <button 
          className="noteButton" 
          onClick={this.writeNote} >Add Note
        </button>

      </div>
    );
  }
}

export default NoteForm;
