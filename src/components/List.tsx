type Task = {
  id: string;
  title: string;
};

type ListProps = {
  listOfTasks: Task[];
};
export default function List({ listOfTasks }: ListProps) {
  return (
    <>
      {listOfTasks.map((task) => (
        <div>{task.title}</div>
      ))}
    </>
  );
}
