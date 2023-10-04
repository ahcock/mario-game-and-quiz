export class SpriteSheet {
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