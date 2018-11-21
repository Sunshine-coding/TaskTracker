import React from 'react';
import Note from '../Note/Note';

export default ({ notes, deleteNote }) => (
  <ul>
    {notes.map(({id, task}) => (
      <li key={id}>
        <Note onDelete={(e) => {deleteNote(id,e)}} task={task} />
      </li>
    ))}
  </ul>
);
