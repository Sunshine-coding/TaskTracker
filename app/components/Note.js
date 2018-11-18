import React from 'react'
import { collectUserIds } from '../utils/methods'

const idLength = 10;
const ids = collectUserIds(idLength, 2);

const notes = [
  {
    id: ids[0],
    task: 'First Task'
  },
  {
    id: ids[1],
    task: 'Second Task'
  }
];

export default () => (
  <ul>{notes.map(note => <li key={note.id}>{note.task}</li>)}</ul>
)

