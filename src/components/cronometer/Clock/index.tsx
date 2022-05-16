import style from "./clock.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Clock({ tempo = 0 }: Props) {
  const min = Math.floor(tempo / 60);
  const sec = tempo % 60;

  const [minutosDezena, minutosUnidade] = String(min).padStart(2, "0");
  const [segundosDezena, segundosUnidade] = String(sec).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minutosDezena}</span>
      <span className={style.clockNumber}>{minutosUnidade}</span>
      <span className={style.divisionClock}>:</span>
      <span className={style.clockNumber}>{segundosDezena}</span>
      <span className={style.clockNumber}>{segundosUnidade}</span>
    </>
  );
}
