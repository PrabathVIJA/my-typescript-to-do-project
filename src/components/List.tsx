type Task = {
  id: string;
  title: string;
  done: boolean;
};

type ListProps = {
  listOfTask: Task[];
  deleteHandler: (id: string) => void;
  doneHandler: (id: string) => void;
};

import SingleToDo from "./SingleToDo.tsx";
export default function List({
  listOfTask,
  deleteHandler,
  doneHandler,
}: ListProps) {
  return (
    <>
      {listOfTask.map((task) => (
        <SingleToDo
          singleTask={task}
          key={task.id}
          deleteHandler={deleteHandler}
          doneHandler={doneHandler}
        />
      ))}
    </>
  );
}
