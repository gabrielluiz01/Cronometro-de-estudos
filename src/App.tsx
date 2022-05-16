import React, { useState } from "react";
import style from "./App.module.scss";
import Cronometer from "./components/cronometer";

import Form from "./components/form/form";
import List from "./components/list/list";
import { ListProps } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<ListProps[] | []>([]);
  const [selected, setSelected] = useState<ListProps>();

  function selectedTask(taskSelected: ListProps) {
    setSelected(taskSelected);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selected) {
      setSelected(undefined);
      setTasks((previousTask) =>
        previousTask.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectedTask={selectedTask} />
      <Cronometer selected={selected} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
