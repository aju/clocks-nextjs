import React from 'react';
import style from './ClockNumbers.module.css';
import { getNumbersInRange } from '@/utils/getNumbersInRange';

export const ClockNumbers = () => {
  return (
    <div className={style.innerCircle}>
      {getNumbersInRange(1, 12).map((number) => (
        <div
          key={number}
          className={style.digitContainer}
          style={{
            transform: `rotate(${number * 30}deg) translateY(8px)`,
          }}
        >
          <div
            style={{
              transform: `rotate(-${number * 30}deg)`,
            }}
          >
            {number}
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default ClockNumbers;