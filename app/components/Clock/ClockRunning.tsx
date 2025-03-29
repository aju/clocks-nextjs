'use client'

import React from 'react';
import Clock from './Clock';
import useInterval from '@/app/helpers/useInterval';

export default function ClockRunning() {
    const currentDate = new Date();
    const [time, setTime] = React.useState(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}}`);

    useInterval(() => {
        const currentDate = new Date();
        setTime(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}}`);
    }, 100);

    return <Clock time={time} />
}
