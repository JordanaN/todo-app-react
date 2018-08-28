const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //retorna o objeto atualizado e habilita as validações de required

module.exports = Todo
