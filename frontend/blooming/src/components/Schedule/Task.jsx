import classes from './Task.module.css'

function Task ({author, body}) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.body}>{body}</p>
    </li>
  );
}

export default Task;