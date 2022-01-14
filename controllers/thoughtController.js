const User = require('../models/User');
const Thought = require('../models/Thought')
const Reaction = require('../models/Reaction')

module.exports = {
  // get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // find a thought user by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        console.log(dbThoughtData)
        console.log(req.body.username)
        
        User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: dbThoughtData._id } },
          { runValidators: true, new: true }
          )
          .then((user) =>
          !user
          ? res
          .status(404)
          .json({ message: 'error with user' })
          : res.json(dbThoughtData)
          )
          
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      });
  },
  // update thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete thought by ID
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.findOneAndUpdate(
            { _id: { $in: user.thoughts } },
            { $pull: { thoughts: req.params.thoughtId } },
            { runValidators: true, new: true })
      )
      .then(() => res.json({ message: 'Thoughts deleted!' }))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)});
  },
  // add a reaction to specified thought
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reaction: req.params.reactionId } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res
            .status(404)
            .json({ message: 'No reaction found with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete friend from user
  deleteReaction(req, res) {
    Reaction.findOneAndDelete(
      { _id: req.params.reactionId }
    )
      .then((reaction) =>
        !reaction
          ? res
            .status(404)
            .json({ message: 'No reaction found with that ID' })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};
