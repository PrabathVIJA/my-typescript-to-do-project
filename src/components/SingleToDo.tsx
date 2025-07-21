import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
type TaskProps = {
  id: string;
  title: string;
  done: boolean;
};
type singleProp = {
  singleTask: TaskProps;
  deleteHandler: (id: string) => void;
  doneHandler: (id: string) => void;
};
export default function SingleToDo({
  singleTask,
  deleteHandler,
  doneHandler,
}: singleProp) {
  const [taskValue, setTaskValue] = useState<string>(singleTask.title);
  const [edit, setEdit] = useState<boolean>(false);

  function taskValueHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskValue(e.target.value);
  }

  return (
    <>
      <div className="container">
        {edit ? (
          <input value={taskValue} onChange={taskValueHandler} />
        ) : (
          <p className={singleTask.done ? "strike" : ""}>{taskValue}</p>
        )}
        <button onClick={() => doneHandler(singleTask.id)}>
          <MdDone />
        </button>

        <button onClick={() => deleteHandler(singleTask.id)}>
          <MdDelete />
        </button>
        <button onClick={() => setEdit(true)}>
          <MdEdit />
        </button>
        <button onClick={() => setEdit(false)}>Save</button>
      </div>
    </>
  );
}
