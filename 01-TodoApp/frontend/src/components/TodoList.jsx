import { useQuery, useMutation } from "@apollo/client/react/hooks"; // ✅ FIX
import { GET_TODOS } from "../graphql/queries";
import { TOGGLE_TODO, DELETE_TODO } from "../graphql/mutations";

const TodoList = () => {
  const { data, loading, error } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading todos</p>;

  return (
    <ul className="mt-6 space-y-3">
      {data.todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
        >
          <span
            onClick={() => toggleTodo({ variables: { id: todo.id } })}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo({ variables: { id: todo.id } })}
            className="text-red-500 hover:text-red-700"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
