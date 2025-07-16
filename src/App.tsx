import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List.tsx";

import "./App.css";
type Type = {
  id: string;
  title: string;
};
function App() {
  const [listOfTasks, setListOfTasks] = useState<Type[]>([
    {
      id: "1",
      title: "reading",
    },
  ]);
  const [task, setTask] = useState<string>("");

  function setTaskHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function addTaskHandler() {
    setListOfTasks([...listOfTasks, { id: nanoid(), title: task }]);
    setTask("");
  }

  return (
    <>
      <input
        placeholder="enter the task"
        value={task}
        onChange={setTaskHandler}
      />
      <button onClick={addTaskHandler}>Add</button>
      <List listOfTasks={listOfTasks} />
    </>
  );
}

export default App;
