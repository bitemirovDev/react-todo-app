function Actions({ removeTodo, completeTodo, setModal, setTaskForEdit, todo }) {
  const handleEdit = () => {
    setTaskForEdit(todo);
    setModal(true);
  };
  return (
    <div className="actions">
      <button className="complete" onClick={() => completeTodo(todo.id)}>
        Complete task
      </button>
      <button className="edit" onClick={handleEdit}>
        Edit task
      </button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>
        Remove task
      </button>
    </div>
  );
}

export default Actions;
