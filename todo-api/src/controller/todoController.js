const Todo = require('../model/Todo');

const createTodo = async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const todo = new Todo({
            title: req.body.title,
            description: req.body.description || '',
            completed: req.body.completed || false
        });

        const savedTodo = await todo.save();
        res.status(201).json({ message: "Todo created successfully", todo: savedTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo updated successfully", todo: updatedTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };
