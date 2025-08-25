import Todo from "../models/Todo.js";

const resolvers = {
  Query: {
    todos: async () => await Todo.find(),
  },
  Mutation: {
    addTodo: async (_, { text }) => {
      const todo = new Todo({ text });
      return await todo.save();
    },
    toggleTodo: async (_, { id }) => {
      const todo = await Todo.findById(id);
      todo.completed = !todo.completed;
      return await todo.save();
    },
    deleteTodo: async (_, { id }) => {
      await Todo.findByIdAndDelete(id);
      return true;
    }
  }
};

export default resolvers;
