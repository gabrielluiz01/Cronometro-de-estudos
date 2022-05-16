import { ListProps } from "../../types/task";
import { convertTime } from "../../utils/time";
import Button from "../button/button";
import Clock from "./Clock";
import style from "./cronometer.module.scss";
import { useEffect, useState } from "react";

interface Props {
  selected: ListProps | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometer({ selected, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTempo(convertTime(selected.time));
    }
  }, [selected]);

  function startCronometer(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return startCronometer(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button text="Começar" onClick={() => startCronometer(tempo)} />
    </div>
  );
}
