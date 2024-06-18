import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                </div>
                <div className="d-flex align-items-center mx-2">
                      <EditIcon className="iconE mx-2" /> <DeleteIcon className="iconD mx-1" />
                </div>

            </div>
        </div>
    )
}

export default Noteitem