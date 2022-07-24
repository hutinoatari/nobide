import { createCanvas } from "https://deno.land/x/canvas/mod.ts";

const canvas = createCanvas(320, 240);
const context = canvas.getContext("2d");

const titleScene = (frame: number) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, 320, 240);
    context.fillStyle = "black";
    context.font = "30px monospace";
    context.fillText("demo movie", 160 - 15 * 6, 30 + 120 - 15);
    return canvas;
};

export { titleScene };
