export const inViewport = (x: number, y: number, w: number, h: number): boolean => {
    return x >= 0 && y >= 0 && x + w <= window.innerWidth && y + h <= window.innerHeight;
};
