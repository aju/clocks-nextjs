import style from './clockMarkings.module.css';

export const ClockMarkings = () => {
    return (
        <>
            <div className={`${style.marking} ${style.markingBold}`}></div>
            <div className={style.marking} style={{ transform: `rotate(30deg)` }}></div>
            <div className={style.marking} style={{ transform: `rotate(60deg)` }}></div>
            <div className={`${style.marking} ${style.markingBold}`} style={{ transform: `rotate(90deg)` }}></div>
            <div className={style.marking} style={{ transform: `rotate(120deg)` }}></div>
            <div className={style.marking} style={{ transform: `rotate(150deg)` }}></div>
        </>);
}
