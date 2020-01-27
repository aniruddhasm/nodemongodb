const notes = {}
const dbConfig = require('../../config/database.config')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

notes.list = (req, res) => {
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    let db = client.db('easy-notes')
    db.collection('notes').find().toArray().then(function (docs) {
      client.close()
      res.send(docs)
    })
  })
}

notes.save = (req, res) => {
  let data = req.body.data
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    let db = client.db('easy-notes')
    db.collection('notes').insertOne(data, function (err, r) {
      if (err) return console.log(err)
      client.close()
      res.send(r.ops)
    })
  })
}

notes.edit = (req, res) => {
  let id = req.params.id
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    let db = client.db('easy-notes')
    db.collection('notes').find({ '_id': ObjectId(id) }).toArray().then(function (docs) {
      client.close()
      res.send(docs)
    })
  })
}

notes.update = (req, res) => {
  let id = req.params.id
  let data = req.body.data
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    let db = client.db('easy-notes')
    let whereQuery = { _id: ObjectId(id) }
    let setData = { $set: data }
    db.collection('notes').updateOne(whereQuery, setData, function (err, docs) {
      if (err) return console.log(err)
      client.close()
      res.send(docs)
    })
  })
}

notes.delete = (req, res) => {
  let id = req.params.id
  MongoClient.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    let db = client.db('easy-notes')
    let whereQuery = { _id: ObjectId(id) }
    db.collection('notes').deleteOne(whereQuery, function (err, docs) {
      if (err) return console.log(err)
      client.close()
      res.send(docs)
    })
  })
}

module.exports = notes
