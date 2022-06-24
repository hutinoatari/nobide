import { emptyDir } from "https://deno.land/std@0.139.0/fs/mod.ts";
import { timeline } from "./timeline.ts";

const framerate = 30;

const tmpDir = "./tmp";
await emptyDir(tmpDir);
for (let i = 0; i < 120; i += 1) {
    const canvas = timeline(i);
    await Deno.writeFile(`${tmpDir}/img${i}.png`, canvas.toBuffer());
    console.log(`img${i}.png`);
}
const p = Deno.run({
    cmd: [
        "ffmpeg",
        "-framerate",
        "" + framerate,
        "-y",
        "-i",
        `${tmpDir}/img%d.png`,
        "-vcodec",
        "libx264",
        "-pix_fmt",
        "yuv420p",
        "out.mp4",
    ],
});
await p.status();
