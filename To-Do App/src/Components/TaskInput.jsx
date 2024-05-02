import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slice";
import TaskList from "./TaskList";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const TaskInput = () => {
  const [addToDo, setAddTodo] = useState("");
  const dispatch = useDispatch();

  const onAddToDoList = () => {
    if (addToDo.trim() === "") return;
    dispatch(addTodo(addToDo));
    setAddTodo("");
  };

  return (
    <div className="main-div">
      <div className="textfield">
        <TextField
          id="outlined-basic"
          label="Add To Do"
          variant="outlined"
          onChange={(e) => setAddTodo(e.target.value)}
          placeholder="Enter your to-do"
          value={addToDo}
        />
      </div>
      {/* <input
        onChange={(e) => setAddTodo(e.target.value)}
        placeholder="Enter your to-do"
        value={addToDo}
      /> */}
      <div className="button">
        <Button variant="contained" color="success" onClick={onAddToDoList}>
          Add To Do
        </Button>
      </div>
      {/* <button onClick={onAddToDoList}>Add To Do</button> */}
      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default TaskInput;
