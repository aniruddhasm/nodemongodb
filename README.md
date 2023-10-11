# A simple CRUD application with Node.js (Express), MongoDB.

This is a basic create, read, update, delete (CRUD) operations example in Node.js (Express) and MongoDB.

# Installation

Clone or download zip to your machine then hit this:

```javascript
npm install
```

# Database configuration

- We are using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- If you are using the same then you only need to create the database name: easy-notes
- Change the url in config->database.config.js

```javascript
url: "";
```

# Run the project

```javascript
node app.js
```

# API Endpoints

GET / : lists the notes in the collection called "notes" in the database named "easy-notes" inside your cluster ; the URI of which we have to supply in the database.config file


POST /add : expects a data object in the request payload of the http request

GET /update/:id : expects an ID of the note as a param ; which can be fetched from your Mongo Atlas Collection "notes" 
    - Eg: 6526f8b76d1b4be393cb0e7c

POST /update/:id : 
- expects an ID of the note that u wish to update; as a param
- expects a data object in the request payload of the http request which would supersede the note already at that ID

GET /delete/:id
- expects an ID of the note that u wish to be deleted; as a param
