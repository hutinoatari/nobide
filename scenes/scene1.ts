import { degToRad, LineSegment, Triangle, Vector3 } from "../util.ts";
import { createCanvas } from "https://deno.land/x/canvas/mod.ts";

const canvas = createCanvas(320, 240);
const context = canvas.getContext("2d");
const imageData = context.createImageData(320, 240);

const camera = new Vector3(160, 120, -640);
const topp = new Vector3(160, 20, 160);
const bottom1 = new Vector3(20, 160, 160);
const bottom2 = new Vector3(300, 160, 160);
const tri = new Triangle(topp, bottom1, bottom2);

const scene1 = (frame: number) => {
    for (let x = 0; x < 320; x += 1) {
        for (let y = 0; y < 240; y += 1) {
            const ray = new LineSegment(
                camera,
                new Vector3(
                    camera.x + (x - camera.x) * 1.5,
                    camera.y + (y - camera.y) * 1.5,
                    320,
                ),
            );
            const panels = [
                tri.rotateX(
                    new Vector3(160, 120, 160),
                    degToRad(frame * 3),
                ).rotateY(
                    new Vector3(160, 120, 160),
                    degToRad(frame * 3),
                ).rotateZ(
                    new Vector3(160, 120, 160),
                    degToRad(frame * 3),
                ),
            ];
            const depths = panels.map((p) => p.collide(ray)?.z).filter((z) =>
                z
            );
            let z = 320;
            for (const depth of depths) {
                if (depth < 0 || 320 < depth) continue;
                if (depth < z) z = depth;
            }
            const color = Math.round((z / 320) * 255);
            const idx = y * canvas.width + x;
            imageData.data[4 * idx] = imageData.data[4 * idx + 1] = imageData
                .data[4 * idx + 2] = color;
            imageData.data[4 * idx + 3] = 255;
        }
    }
    context.putImageData(imageData, 0, 0);
    return canvas;
};

export { scene1 };
