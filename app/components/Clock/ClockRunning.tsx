'use client'

import React from 'react';
import Clock from './Clock';
import useInterval from '@/app/helpers/useInterval';

export default function ClockRunning() {
  const currentDate = new Date();
  const [time, setTime] = React.useState({
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds(),
  });

  useInterval(() => {
    const currentDate = new Date();
    setTime({
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    });
  }, 1000);

  return <Clock hours={time.hours} minutes={time.minutes} seconds={time.seconds} />;
}
