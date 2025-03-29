'use client'

import React, { useEffect } from 'react';
import Clock from './Clock';
import useInterval from '@/app/helpers/useInterval';

export default function ClockRunning() {
    useEffect(() => {
        console.log(
            'Dashboard Component is being mounted! ################################',
        );

        return () => {
            console.trace();
            console.log('Dashboard Component is being unmounted!');
        };
    }, []);
    const currentDate = new Date();
    const [time, setTime] = React.useState(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}}`);

    useInterval(() => {
        const currentDate = new Date();
        setTime(`${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}}`);
    }, 100);

    return <Clock time={time} />
}
