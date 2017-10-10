import React, { Component } from 'react';
import './Note.css'
import PropTypes from 'prop-types'

class Note extends Component {

  constructor(props) {
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId
  }

  handleRemoveNote=(id)=>{
    this.props.removeNote(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span className="closebtn" onClick={()=>this.handleRemoveNote(this.noteId)}>
          &times;
        </span>
        <p className="noteContent">{this.noteContent}</p>
      </div>
    );
  }
}

Note.PropTypes ={
  noteContent: PropTypes.string
}

export default Note;
