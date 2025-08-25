import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-2xl font-bold text-center text-blue-600">
        📝 GraphQL Todo App
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
