import { emptyDir } from "https://deno.land/std@0.139.0/fs/mod.ts";
import { createCanvas } from "https://deno.land/x/canvas/mod.ts";
import { Line, LineSegment, Plane, Triangle, Vector3 } from "./util.ts";

const tmpDir = "./tmp";
const canvas = createCanvas(320, 240);
const context = canvas.getContext("2d");

const degToRad = (n) => Math.PI * n / 180;

const camera = new Vector3(
    canvas.width / 2,
    canvas.height / 2,
    -canvas.width * 2,
);

await emptyDir(tmpDir);
for (let i = 0; i < 360; i += 1) {
    const imageData = context.createImageData(canvas.width, canvas.height);
    for (let x = 0; x < canvas.width; x += 1) {
        for (let y = 0; y < canvas.height; y += 1) {
            const ray = new LineSegment(
                camera,
                new Vector3(
                    camera.x + (x - camera.x) * 1.5,
                    camera.y + (y - camera.y) * 1.5,
                    canvas.width,
                ),
            );
            const topp = new Vector3(
                160,
                60 - 135 * Math.sin(degToRad(i * 2)),
                160,
            );
            const bottom1 = new Vector3(
                160 + 140 * Math.cos(degToRad(i * 2)),
                180 - 135 * Math.sin(degToRad(i * 2)),
                160 + 140 * Math.sin(degToRad(i * 2)),
            );
            const bottom2 = new Vector3(
                160 + 140 * Math.cos(degToRad(i * 2 + 120)),
                180 - 135 * Math.sin(degToRad(i * 2)),
                160 + 140 * Math.sin(degToRad(i * 2 + 120)),
            );
            const bottom3 = new Vector3(
                160 + 140 * Math.cos(degToRad(i * 2 + 240)),
                180 - 135 * Math.sin(degToRad(i * 2)),
                160 + 140 * Math.sin(degToRad(i * 2 + 240)),
            );
            const panels = [
                new Triangle(topp, bottom1, bottom2),
                new Triangle(topp, bottom2, bottom3),
                new Triangle(topp, bottom3, bottom1),
                new Triangle(bottom1, bottom2, bottom1),
            ];
            const depths = panels.map((p) => p.collide(ray)).filter((e) =>
                e !== null
            );
            let color = 255;
            if (depths.length !== 0) {
                const depth = Math.min(...depths.map((v) => v.z));
                if (0 <= depth || depth <= canvas.width) {
                    color = Math.round((depth / canvas.width) * 255);
                }
            }
            const idx = y * canvas.width + x;
            imageData.data[4 * idx] = color;
            imageData.data[4 * idx + 1] = color;
            imageData.data[4 * idx + 2] = color;
            imageData.data[4 * idx + 3] = 255;
        }
    }
    context.putImageData(imageData, 0, 0);
    await Deno.writeFile(`${tmpDir}/img${i}.png`, canvas.toBuffer());
    console.log(`img${i}.png`);
}
const p = Deno.run({
    cmd: ["ffmpeg", "-r", "30", "-i", `${tmpDir}/img%d.png`, "out.mp4"],
});
const status = await p.status();
console.log(status);
