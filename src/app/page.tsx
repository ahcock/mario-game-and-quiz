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
        if(!ctx) return;

        const sprite = new SpriteSheet(image, 16, 16);
        sprite.define("ground", 0, 0);
        sprite.define('sky', 3, 23);

        for(let x = 0; x < 25; x++) {
          for(let y = 0; y < 14; y++) {
            sprite.drawTile('sky', ctx, x, y);
          }
        }

        for(let x = 0; x < 25; x++) {
          for(let y = 12; y < 14; y++) {
            sprite.drawTile('ground', ctx, x, y);
          }
        }
      },
    );
  }, []);

  return (
    <div>
      <canvas width={640} height={640} ref={canvans}></canvas>
    </div>
  );
}
