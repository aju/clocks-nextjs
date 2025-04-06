import style from './clockHands.module.css';

export const ClockHands = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const hoursRotation = (((hours % 12) * 60 + minutes) / (12 * 60)) * 360;
  const minutesRotation = (minutes / 60) * 360;
  const secondsRotation = (seconds / 60) * 360;

  return (
    <>
      <div
        className={style.clockHandMinutes}
        style={{ transform: `rotate(${minutesRotation}deg)` }}
      ></div>
      <div
        className={style.clockHandHours}
        style={{ transform: `rotate(${hoursRotation}deg)` }}
      ></div>
      <div
        className={style.clockHandSeconds}
        style={{ transform: `rotate(${secondsRotation}deg)` }}
      ></div>
      <div className={style.dot}></div>
    </>
  );
};
