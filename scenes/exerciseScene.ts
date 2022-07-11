import {
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

const pointO = new Vector3(0, 0, 0);

const thumb1 = () => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -40, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Sphere(
            new Vector3(0, -40, 0),
            15,
        ),
    ]);
    return bone;
};
const thumb2 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -40, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        thumb1().rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -40, 0),
        ),
    ]);
    return bone;
};
const thumb3 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            pointO,
            new Vector3(0, -60, 0),
            new Vector3(30, -30, 0),
        ),
        thumb2(deg).rotateX(pointO, degToRad(deg)).rotateZ(pointO, degToRad(45))
            .translate(new Vector3(15, -45, 0)),
    ]);
    return bone;
};
const firstFinger1 = () => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -37, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Sphere(
            new Vector3(0, -37, 0),
            15,
        ),
    ]);
    return bone;
};
const firstFinger2 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -37, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        firstFinger1().rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -37, 0),
        ),
    ]);
    return bone;
};
const firstFinger3 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -37, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        firstFinger2(deg).rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -37, 0),
        ),
    ]);
    return bone;
};
const secondFinger1 = () => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -40, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Sphere(
            new Vector3(0, -40, 0),
            15,
        ),
    ]);
    return bone;
};
const secondFinger2 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -40, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        secondFinger1().rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -40, 0),
        ),
    ]);
    return bone;
};
const secondFinger3 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -40, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -40, 0),
            new Vector3(-15, 0, 0),
        ),
        secondFinger2(deg).rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -40, 0),
        ),
    ]);
    return bone;
};
const thirdFinger1 = () => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -37, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Sphere(
            new Vector3(0, -37, 0),
            15,
        ),
    ]);
    return bone;
};
const thirdFinger2 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -37, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        thirdFinger1().rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -37, 0),
        ),
    ]);
    return bone;
};
const thirdFinger3 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -37, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -37, 0),
            new Vector3(-15, 0, 0),
        ),
        thirdFinger2(deg).rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -37, 0),
        ),
    ]);
    return bone;
};
const forthFinger1 = () => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -30, 0),
            new Vector3(15, -30, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -30, 0),
            new Vector3(-15, 0, 0),
        ),
        new Sphere(
            new Vector3(0, -30, 0),
            15,
        ),
    ]);
    return bone;
};
const forthFinger2 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -30, 0),
            new Vector3(15, -30, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -30, 0),
            new Vector3(-15, 0, 0),
        ),
        forthFinger1().rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -30, 0),
        ),
    ]);
    return bone;
};
const forthFinger3 = (deg) => {
    const bone = new Polyhedron([
        new Triangle(
            new Vector3(-15, -30, 0),
            new Vector3(15, -30, 0),
            new Vector3(-15, 0, 0),
        ),
        new Triangle(
            new Vector3(15, 0, 0),
            new Vector3(15, -30, 0),
            new Vector3(-15, 0, 0),
        ),
        forthFinger2(deg).rotateX(pointO, degToRad(deg)).translate(
            new Vector3(0, -30, 0),
        ),
    ]);
    return bone;
};
const hand = (frame) => {
    let degs = [0, 0, 0, 0, 0];
    const phase = Math.floor(frame / 30);
    if (phase === 0) {
        degs[0] = 3 * (frame % 30);
        degs[1] = degs[2] = degs[3] = degs[4] = 0;
    } else if (phase === 1) {
        degs[0] = 90;
        degs[1] = 3 * (frame % 30);
        degs[2] = degs[3] = degs[4] = 0;
    } else if (phase === 2) {
        degs[0] = degs[1] = 90;
        degs[2] = 3 * (frame % 30);
        degs[3] = degs[4] = 0;
    } else if (phase === 3) {
        degs[0] = degs[1] = degs[2] = 90;
        degs[3] = 3 * (frame % 30);
        degs[4] = 0;
    } else if (phase === 4) {
        degs[0] = degs[1] = degs[2] = degs[3] = 90;
        degs[4] = 3 * (frame % 30);
    } else if (phase === 5) {
        degs[0] = degs[3] = degs[4] = 90;
        degs[1] = degs[2] = 90 - 3 * (frame % 30);
    } else if (phase === 6) {
        degs[0] = degs[3] = degs[4] = 90 - 3 * (frame % 30);
        degs[1] = degs[2] = 0;
    } else if (phase === 7) {
        degs[0] = degs[1] = degs[2] = degs[3] = degs[4] = 3 * (frame % 30);
    }
    const palm = new Polyhedron([
        new Triangle(
            new Vector3(-75, -120, 0),
            new Vector3(-75, 0, 0),
            new Vector3(75, -120, 0),
        ),
        new Triangle(
            new Vector3(75, 0, 0),
            new Vector3(-75, 0, 0),
            new Vector3(75, -120, 0),
        ),
        thumb3(degs[0]).rotateY(pointO, degToRad(-degs[0] / 2)).translate(
            new Vector3(75, 0, 0),
        ),
        firstFinger3(degs[1]).rotateX(pointO, degToRad(degs[1])).translate(
            new Vector3(60, -120, 0),
        ),
        secondFinger3(degs[2]).rotateX(pointO, degToRad(degs[2])).translate(
            new Vector3(20, -120, 0),
        ),
        thirdFinger3(degs[3]).rotateX(pointO, degToRad(degs[3])).translate(
            new Vector3(-20, -120, 0),
        ),
        forthFinger3(degs[4]).rotateX(pointO, degToRad(degs[4])).translate(
            new Vector3(-60, -120, 0),
        ),
    ]);
    return palm;
};

const exerciseScene = (frame: number) => {
    render(canvas, camera, [
        hand(frame).rotateY(pointO, degToRad(-360 * frame / 240)).translate(
            new Vector3(160, 240, 160),
        ),
    ]);
    return canvas;
};

export { exerciseScene };
