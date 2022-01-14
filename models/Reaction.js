const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
  {
    reactionId: Schema.Types.ObjectId,
    reactionBody: { 
      type: String,
      required: true,
    },
    username: { 
      type: String,
      required: true,
    },
    createdAt: { 
      type: Date, 
      default: Date.now },
  },
);


// Initialize our reaction model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
