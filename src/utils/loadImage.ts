export const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
  });
};