import Item from "./Item";
import style from "./list.module.scss";
import { ListProps } from "../../types/task";

interface Props {
  tasks: ListProps[];
  selectedTask: (taskSelected: ListProps) => void;
}

const List = ({ tasks, selectedTask }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item {...item} key={item.id} selectedTask={selectedTask} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
