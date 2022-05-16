import React, { useState } from "react";
import { ListProps } from "../../types/task";
import Button from "../button/button";
import { v4 as uuidv4 } from "uuid";

import style from "./form.module.scss";

const Form = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ListProps[]>>;
}) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setTasks((previous) => [
      ...previous,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={(ev) => addTask(ev)}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar"
          required
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="time"
          min="00:00:00"
          max="1:30:00"
          value={time}
          onChange={(ev) => setTime(ev.target.value)}
          required
        />
      </div>
      <Button text="Adicionar" type="submit" />
    </form>
  );
};

export default Form;
