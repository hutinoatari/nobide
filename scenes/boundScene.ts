import {
    cube,
    degToRad,
    LineSegment,
    Polyhedron,
    render,
    Sphere,
    Triangle,
    Vector3,
} from "../util.ts";
import { createCanvas } from "https://deno.land/x/canvas/mod.ts";

const canvas = createCanvas(320, 240);

const camera = new Vector3(160, 120, -640);

const ys: number[] = [];
let y = 25;
let a = 0;
const e = -0.8;
const g = 5;
for (let i = 0; i < 90; i += 1) {
    a += g;
    y += a;
    if (215 < y) {
        y = 215;
        a *= e;
    }
    ys.push(y);
}

const ball = (time: number) => {
    return new Sphere(new Vector3(160, ys[time], 160), 25);
};
const floor = cube(new Vector3(110, 240, 110), new Vector3(100, 10, 100))
    .rotateX(new Vector3(160, 240, 160), degToRad(1)).rotateZ(
        new Vector3(160, 240, 160),
        degToRad(1),
    );

const boundScene = (frame: number) => {
    render(canvas, camera, [
        ball(frame),
        floor.rotateY(new Vector3(160, 240, 160), degToRad(8 * frame)),
    ]);
    return canvas;
};

export { boundScene };
