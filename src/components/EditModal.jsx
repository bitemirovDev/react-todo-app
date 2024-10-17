import { useState } from 'react';

function EditModal({ setModal, editTodo, todo }) {
  const [newTask, setNewTask] = useState(todo.task);
  const [error, setError] = useState(false);

  const handleSave = (id) => {
    if (newTask === '') {
      setError(true);
      return;
    }
    editTodo(id, newTask);
    setModal(false);
  };

  return (
    <div className="modal">
      <h2>Edit task</h2>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        {error && <p className="error">{"You can't add empty task"}</p>}
      </div>

      <div className="modal-actions">
        <button className="cancel" onClick={() => setModal(false)}>
          Cancel
        </button>
        <button className="save" onClick={() => handleSave(todo.id)}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditModal;
