import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";

type Type = {
  id: string;
  title: string;
  done: boolean;
};
type singleProp = {
  singleTask: Type;
  deleteHandler: (id: string) => void;
  doneHandler: (id: string) => void;
  editHandler: (id: string, title: string) => void;
};
export default function SingleToDo({
  singleTask,
  deleteHandler,
  editHandler,
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
        {!edit && (
          <button onClick={() => doneHandler(singleTask.id)}>
            <MdDone />
          </button>
        )}

        <button onClick={() => deleteHandler(singleTask.id)}>
          <MdDelete />
        </button>
        <button onClick={() => setEdit(true)}>
          <MdEdit />
        </button>
        {edit && (
          <button
            onClick={() => {
              setEdit(false);
              editHandler(singleTask.id, taskValue);
            }}
          >
            Save
          </button>
        )}
      </div>
    </>
  );
}
