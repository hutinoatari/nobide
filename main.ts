import { ensureDir } from "https://deno.land/std@0.139.0/fs/mod.ts";
import { createCanvas } from "https://deno.land/x/canvas/mod.ts";

const tmpDir = "./tmp";
const canvas = createCanvas(640, 480);
const context = canvas.getContext("2d");

const degToRad = (n) => Math.PI * n / 180;

await ensureDir(tmpDir);
for (let i = 0; i < 60; i += 1) {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.beginPath();
    context.arc(
        canvas.width / 2 + Math.cos(degToRad(i * 6)) * 200,
        canvas.height / 2 + Math.sin(degToRad(i * 6)) * 200,
        20,
        0,
        2 * Math.PI,
    );
    context.fill();
    await Deno.writeFile(`${tmpDir}/img${i}.png`, canvas.toBuffer());
}
const p = Deno.run({
    cmd: ["ffmpeg", "-r", "10", "-i", `${tmpDir}/img%d.png`, "out.mp4"],
});
const status = await p.status();
console.log(status);
