
import { useState } from 'react';
import NoteContext from './notecontext';

const NoteState = (props) => {
    const notes = [
        {
          "tag": "General",
          "_id": "665d3d620a39f679aac5c051",
          "title": "hello world",
          "content": "worlddddddddddddddddddddd",
          "createdAt": "2024-06-03T03:49:54.261Z",
          "updatedAt": "2024-06-03T03:49:54.261Z",
          "__v": 0
        },
        {
          "_id": "665eb52b5e7a7e5467df871c",
          "title": "hello world",
          "content": "worlddddddddddddddddddddd",
          "tag": "test",
          "createdAt": "2024-06-04T06:33:15.511Z",
          "updatedAt": "2024-06-04T06:33:15.511Z",
          "__v": 0
        },
        {
          "_id": "665eb52c5e7a7e5467df871e",
          "title": "hello world",
          "content": "worlddddddddddddddddddddd",
          "tag": "test",
          "createdAt": "2024-06-04T06:33:16.725Z",
          "updatedAt": "2024-06-04T06:33:16.725Z",
          "__v": 0
        },
        {
          "_id": "665eb52d5e7a7e5467df8720",
          "title": "hello world",
          "content": "worlddddddddddddddddddddd",
          "tag": "test",
          "createdAt": "2024-06-04T06:33:17.664Z",
          "updatedAt": "2024-06-04T06:33:17.664Z",
          "__v": 0
        }
      ]
      const [initialnote, setnote] = useState(notes)
    return(
        <NoteContext.Provider value = {{initialnote, setnote}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
      