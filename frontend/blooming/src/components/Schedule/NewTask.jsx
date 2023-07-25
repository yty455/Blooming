import { useState } from 'react';
import classes from './NewTask.module.css';

function NewTask({onCancel, onAddTask}) {
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  
  function AuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const taskData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddTask(taskData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={AuthorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>취소</button>
        <button>추가</button>
      </p>
    </form>
  );
}

export default NewTask;