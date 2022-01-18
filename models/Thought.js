const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
const moment = require('moment')

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => moment(date).format('DD MMM YYYY, HH:mm'),
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
