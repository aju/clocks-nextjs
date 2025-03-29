'use client'

import React from 'react';
import style from './clock.module.css';
import { getNumbersInRange } from '@/utils/getNumbersInRange';
import { ClockMarkings } from './ClockMarkings';
import { ClockHands } from './ClockHands';

export default function Clock({ time }: { time: string }) {
  // const [rotationDegrees, setRotationDegrees] = useState<number>(90);
  // const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  // const [rotationDegrees, setRotationDegrees] = React.useState(90);
  // useEffect(() => {
  //   document.addEventListener('mousemove', (event) => {
  //     // Get the center of the screen
  //     const centerX = window.innerWidth / 2;
  //     const centerY = window.innerHeight / 2;

  //     // Get the mouse position relative to the center of the screen
  //     const mouseX = event.clientX - centerX;
  //     const mouseY = event.clientY - centerY;

  //     // Calculate the angle in radians using atan2
  //     const angleRadians = Math.atan2(mouseY, mouseX);

  //     // Convert the angle to degrees
  //     const angleDegrees = angleRadians * (180 / Math.PI) + 90;

  //     setRotationDegrees(angleDegrees);
  //   })
  // }, []);

  return (
    <div className={style.clock}>
      <ClockMarkings />
      <div className={style.innerCircle}>
        {getNumbersInRange(1, 12).map((number) => (
          <div key={number} className={style.digitContainer} style={{
            transform: `rotate(${number * 30}deg) translateY(8px)`,
          }}>
            <div style={{
              transform: `rotate(-${number * 30}deg)`,
            }}>{number}</div>
          </div>
        ))}
      </div>
      <ClockHands time={time} />
    </div >);
}
