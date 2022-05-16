import { ListProps } from "../../../types/task";
import style from "./item.module.scss";

interface Props extends ListProps {
  selectedTask: (taskSelected: ListProps) => void;
}

const Item = ({ task, time, selected, completed, id, selectedTask }: Props) => {
  return (
    <li
      className={`${style.item} ${selected && style.itemSelecionado} ${
        completed && style.itemCompletado
      }`}
      onClick={() =>
        !completed && selectedTask({ task, time, selected, completed, id })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido}></span>}
    </li>
  );
};
export default Item;
