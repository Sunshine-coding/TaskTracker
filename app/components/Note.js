import React from 'react'
import uuid from 'uuid';

const notes = [
  {
    id: uuid.v4(),
    task: 'First Task'
  },
  {
    id: uuid.v4(),
    task: 'Second Task'
  }
];

export default () => (
  <ul>{notes.map(note => <li key={note.id}>{note.task}</li>)}</ul>
)

