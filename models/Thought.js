const { Schema, model } = require('mongoose');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
  }
);


// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
