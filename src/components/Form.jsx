import { useState } from 'react';

function Form({ addTodo }) {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task !== '') {
      addTodo(task);
      setError(false);
      setTask('');
    } else {
      setError(true);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Type here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {error && <p className="error">{"You can't add empty task"}</p>}

      <button className="button" type="submit">
        Add task
      </button>
    </form>
  );
}

export default Form;
