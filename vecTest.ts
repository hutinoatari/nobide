import { Line, LineSegment, Plane, Triangle, Vector3 } from "./util.ts";

const line = new LineSegment(new Vector3(0, 0, 0), new Vector3(10, 10, 10));
const triangle = new Triangle(
    new Vector3(10, 0, 0),
    new Vector3(0, 10, 0),
    new Vector3(0, 0, 10),
);
const c = triangle.collide(line);
console.log(c ? c.toString() : "null");
