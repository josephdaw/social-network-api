const { Schema, model } = require('mongoose');

// Schema to create reaction model
const reactionSchema = new Schema(
  {
    
  },
 
);


// Initialize our reaction model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
