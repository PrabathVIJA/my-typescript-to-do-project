import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List.tsx";

import "./App.css";
import Input from "./components/Input.tsx";
type Type = {
  id: string;
  title: string;
  done: boolean;
};

function App() {
  const [listOfTasks, setListOfTasks] = useState<Type[]>([
    {
      id: "1",
      title: "reading",
      done: false,
    },
  ]);
  const [task, setTask] = useState<string>("");

  function setTaskHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function addTaskHandler() {
    if (task === "") {
      alert("please enter something");
      return;
    }
    setListOfTasks([
      ...listOfTasks,
      { id: nanoid(), title: task, done: false },
    ]);
    setTask("");
  }

  function deleteHandler(id: string) {
    const updatedTasks = listOfTasks.filter((task) => task.id !== id);
    setListOfTasks(updatedTasks);
  }

  function doneHandler(id: string) {
    const updatedTask = listOfTasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      } else {
        return task;
      }
    });
    setListOfTasks(updatedTask);
  }

  function editHandler(id: string, editedTitle: string) {
    const updatedTask = listOfTasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: editedTitle };
      } else {
        return task;
      }
    });
    setListOfTasks(updatedTask);
  }

  return (
    <>
      <Input
        value={task}
        onChange={setTaskHandler}
        placeholder="enter the task"
      />
      <button onClick={addTaskHandler}>Add</button>
      <List
        listOfTask={listOfTasks}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
        editHandler={editHandler}
      />
    </>
  );
}

export default App;
