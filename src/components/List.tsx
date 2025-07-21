type Type = {
  id: string;
  title: string;
  done: boolean;
};

type ListProps = {
  listOfTask: Type[];
  deleteHandler: (id: string) => void;
  doneHandler: (id: string) => void;
  editHandler: (id: string, title: string) => void;
};

import SingleToDo from "./SingleToDo.tsx";
export default function List({
  listOfTask,
  deleteHandler,
  doneHandler,
  editHandler,
}: ListProps) {
  return (
    <>
      {listOfTask.map((task) => (
        <SingleToDo
          singleTask={task}
          key={task.id}
          deleteHandler={deleteHandler}
          doneHandler={doneHandler}
          editHandler={editHandler}
        />
      ))}
    </>
  );
}
