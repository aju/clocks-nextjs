'use client'

import React from 'react';
import style from './clock.module.css';
import { ClockMarkings } from './components/ClockMarkings';
import { ClockHands } from './components/ClockHands';
import { ClockNumbers } from './components/ClockNumbers';

export default function Clock({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) {
  return (
    <div className={style.clock}>
      <ClockMarkings />
      <ClockNumbers />www
      <ClockHands hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
}