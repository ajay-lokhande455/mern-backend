const express = require('express');
const { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } = require('../controller/todoController');

const router = express.Router();

router.post('/create', createTodo);
router.get('/', getAllTodos);
router.get('/:id', getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);


module.exports = router;
