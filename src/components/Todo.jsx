import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import TodoList from './TodoList';

import EditModal from './EditModal';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);
  const [taskForEdit, setTaskForEdit] = useState(null);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), task: task, done: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo)));
  };

  return (
    <div className="todo">
      <h1>React JS Todo</h1>
      <Form addTodo={addTodo} />
      <TodoList
        list={todos}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        setModal={setModal}
        setTaskForEdit={setTaskForEdit}
      />

      {modal && (
        <>
          <div className="overlay" onClick={() => setModal(false)}></div>
          <EditModal editTodo={editTodo} todo={taskForEdit} setModal={setModal} />
        </>
      )}
    </div>
  );
}

export default Todo;
