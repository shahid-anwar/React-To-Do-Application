import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Slice";
import Button from "@mui/material/Button";

const TaskList = () => {
  const todoList = useSelector((state) => state.todos.todoList);
  const dispatch = useDispatch();

  const onDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            {/* <button onClick={() => onDelete(index)}>Delete</button> */}
            <Button
              variant="outlined"
              color="error"
              onClick={() => onDelete(index)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
