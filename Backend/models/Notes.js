const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Note Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
    },

    tag: {
        type: String,
        default: "General",
    },
    
}, 
{
    timestamps: true, 
});


const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
