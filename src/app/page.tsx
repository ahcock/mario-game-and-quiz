'use client'
import {useEffect, useRef} from "react";

export default function Home() {
  const canvans = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const ctx = canvans.current?.getContext('2d');
    ctx?.fillRect(0, 0, 50, 50);

  }, []);


  return (
    <div>
      <canvas width={640} height={640} ref={canvans}></canvas>
    </div>
  )
}
