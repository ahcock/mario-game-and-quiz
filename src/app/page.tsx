"use client";

import { useEffect, useRef } from "react";
import {SpriteSheet} from "@/SpriteSheet";
import {loadImage} from "@/utils/loadImage";


export default function Home() {
  const canvans = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvans.current?.getContext("2d");

    ctx?.fillRect(0, 0, 50, 50);
    loadImage("/images/super-mario-tile-set.png").then(
      (image: HTMLImageElement) => {
        const sprite = new SpriteSheet(image, 16, 16);
        ctx?.drawImage(image, 0, 0, 32, 32, 32, 32, 16, 16);
      },
    );
  }, []);

  return (
    <div>
      <canvas width={640} height={640} ref={canvans}></canvas>
    </div>
  );
}
