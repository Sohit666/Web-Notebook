const mongoose = require('mongoose');
const URI="mongodb://localhost:27017/NOTEBOOK?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log('You are connected to MONGODB!');
  } catch (err) {
    console.error('Something Went Wrong', err);
  }
}

module.exports = connectDB;
