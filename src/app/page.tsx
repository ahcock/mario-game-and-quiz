"use client";
import { useEffect, useRef } from "react";

const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
  });
};

class SpriteSheet {
  image: HTMLImageElement;
  width: number;
  height: number;
  tiles: Map<string, HTMLCanvasElement>;

  constructor(image: HTMLImageElement, width: number, height: number) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map();
  }

  define(name: string, x: number, y: number) {
    const buffer = document.createElement("canvas");
    buffer.width = this.width;
    buffer.height = this.height;
    buffer
      .getContext("2d")
      ?.drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height,
      );
    this.tiles.set(name, buffer);
  }

  draw(name: string, ctx: CanvasRenderingContext2D, x: number, y: number) {
    const buffer = this.tiles.get(name);
    if (buffer) {
      ctx.drawImage(buffer, x, y);
    }
  }
}

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
