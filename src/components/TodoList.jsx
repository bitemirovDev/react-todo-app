import TodoListItem from './TodoListItem';

function TodoList({ list, removeTodo, completeTodo, setTaskForEdit, setModal }) {
  return (
    <ul className="list">
      {list.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          setTaskForEdit={setTaskForEdit}
          setModal={setModal}
        />
      ))}
    </ul>
  );
}

export default TodoList;
