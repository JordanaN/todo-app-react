const express = require('express')

module.exports = function(server) {

  //Api Routes
  const router = express.Router()
  server.use('/api', router) //middleware para rotas começarem com /api

  //Todo Routes
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos') // registrando os metódos da api setados no arquivo todoService
}
