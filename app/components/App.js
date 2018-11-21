import React from 'react';
import Notes from './Notes/Notes';
import uuid from 'uuid';

export default class App extends React.Component {
  state = {
    notes: [
      {
        id: uuid.v4(),
        task: 'First Task'
      },
      {
        id: uuid.v4(),
        task: 'Second Task'
      }
    ]
  };

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([
        {
          id: uuid.v4(),
          task: 'New Task'
        }
      ])
    });
  };

  deleteNote = (id, e) => {
    e.stopPropagation();
    
    this.setState({
      notes: this.state.notes.filter(note => note.id != id)
    })
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}
