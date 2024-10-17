import Actions from './Actions';
import { useState, useEffect, useRef } from 'react';

function TodoListItem({ todo, removeTodo, completeTodo, setTaskForEdit, setModal }) {
  const [actions, setActions] = useState(false);

  const itemRef = useRef(null); // Ссылка на элемент списка

  const handleActions = () => {
    setActions((prevActions) => !prevActions); // Переключение состояния actions
  };

  // Закрытие actions при клике вне элемента списка
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (itemRef.current && !itemRef.current.contains(e.target)) {
        setActions(false); // Закрываем actions при клике вне
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li ref={itemRef} className={`list__item ${todo.done ? 'done' : ''}`} onClick={handleActions}>
      {todo.task}

      {actions && (
        <Actions
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          setModal={setModal}
          setTaskForEdit={setTaskForEdit}
          todo={todo}
        />
      )}
    </li>
  );
}

export default TodoListItem;
