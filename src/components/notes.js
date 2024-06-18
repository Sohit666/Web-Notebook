import React, { useContext } from 'react'
import noteContext from "../context/note/notecontext"
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(noteContext);
    const { initialnote } = context;
    return (
        <div className="row my-3">
            <h2>You Notes</h2>
            {initialnote.map((initialnote) => {
                return <Noteitem  note={initialnote} />
            })}
        </div>
    )
}

export default Notes