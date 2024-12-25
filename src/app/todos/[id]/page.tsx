import React from 'react';

interface TodosProps {
  params: {
    id: string;
  };
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todos = async (props: TodosProps) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}/todos`);
  const todos: Todo[] = await url.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`p-4 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-1 shadow-md hover:shadow-xl font-semibold cursor-pointer ${
              todo.completed 
                ? 'bg-green-500 text-black' 
                : 'bg-red-500 text-white'
            }`}
          >
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
