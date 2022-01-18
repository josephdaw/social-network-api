# Social Network API
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F.svg?&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express-000000?&logo=express&logoColor=white)
![Mongo](https://img.shields.io/badge/mongoDB-47A248?&logo=MongoDB&logoColor=white)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

### API Routes

**`/api/users`**
* `GET` all users
* `POST` a new user

**`/api/users/:userId`**
* `GET` a single user by its `_id` and populated thought and friend data
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`

**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list

**`/api/thoughts`**
* `GET` to get all thoughts
* `POST` to create a new thought

**`/api/thoughts/:thoughtId`**
* `GET` to get a single thought by its `_id`
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`

**`/api/thoughts/:thoughtId/reactions`**
* `POST` to create a reaction stored in a single thought's `reactions` array field

**`/api/thoughts/:thoughtId/reactions/:reactionId`**
* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value


## Installation
After cloning the repository, run the command `npm i` to install the project dependencies. You will also need to ensure you have MongoDB installed on your computer.

## Usage
Start the server by running the command `node index.js`.

## Credits
This project idea is part of the [Adelaide University Coding Boot Camp](https://bootcamps.adelaide.edu.au).

## License
This project is released under the [MIT License](LICENSE).