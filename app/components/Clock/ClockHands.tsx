import style from './clockHands.module.css';

export const ClockHands = ({ time }: { time: string }) => {
    const [hours, minutes, seconds] = time.split(':');

    // Include minutes to calculations
    const hoursRotation = (((parseInt(hours) % 12) * 60 + parseInt(minutes)) / (12 * 60)) * 360;
    const minutesRotation = (parseInt(minutes) / 60) * 360;
    const secondsRotation = (parseInt(seconds) / 60) * 360;
    return (<>
        <div className={style.clockHandMinutes} style={{ transform: `rotate(${minutesRotation}deg)` }}></div>
        <div className={style.clockHandHours} style={{ transform: `rotate(${hoursRotation}deg)` }}></div>
        <div className={style.clockHandSeconds} style={{ transform: `rotate(${secondsRotation}deg)` }}></div>
        <div className={style.dot}></div>
    </>)
}
