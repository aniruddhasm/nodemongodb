const express = require('express')
const router = express.Router()

var notesController = require('../api/controllers/notes')

module.exports = () => {
  router.get('/', notesController.list)
  router.post('/add', notesController.save)
  router.get('/update/:id', notesController.edit)
  router.post('/update/:id', notesController.update)
  router.get('/delete/:id', notesController.delete)
  return router
}
