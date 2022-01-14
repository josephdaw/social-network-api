const { Schema, model } = require('mongoose');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: { 
      type: String, 
      required: true,
    minlength: 1,
    maxlength: 280 },
    createdAt: { 
      type: Date, 
      default: Date.now },
    username: { 
      type: String, 
      required: true },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reaction',
      }
    ],
  }
);


// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
