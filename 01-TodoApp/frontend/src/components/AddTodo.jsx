import { useState } from "react";
import { useMutation } from "@apollo/client/react/hooks";  // ✅ FIX
import { ADD_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [addTodo] = useMutation(ADD_TODO, {
    refetchQueries: [{ query: GET_TODOS }]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo({ variables: { text } });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-300"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
