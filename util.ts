class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    toString(): string {
        return `[${this.x}, ${this.y}, ${this.z}]`;
    }
    add(vec: Vector3): Vector3 {
        return new Vector3(
            this.x + vec.x,
            this.y + vec.y,
            this.z + vec.z,
        );
    }
    sm(a: number): Vector3 {
        return new Vector3(this.x * a, this.y * a, this.z * a);
    }
    dp(vec: Vector3): number {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    }
    cp(vec: Vector3): Vector3 {
        return new Vector3(
            this.y * vec.z - this.z * vec.y,
            this.z * vec.x - this.x * vec.z,
            this.x * vec.y - this.y * vec.x,
        );
    }
    rotateX(center: Vector3, rad: number) {
        const t = this.add(center.sm(-1));
        const tr = new Vector3(
            t.x,
            t.y * Math.cos(rad) - t.z * Math.sin(rad),
            t.y * Math.sin(rad) + t.z * Math.cos(rad),
        ).add(center);
        return tr;
    }
    rotateY(center: Vector3, rad: number) {
        const t = this.add(center.sm(-1));
        const tr = new Vector3(
            t.x * Math.cos(rad) - t.z * Math.sin(rad),
            t.y,
            t.x * Math.sin(rad) + t.z * Math.cos(rad),
        ).add(center);
        return tr;
    }
    rotateZ(center: Vector3, rad: number) {
        const t = this.add(center.sm(-1));
        const tr = new Vector3(
            t.x * Math.cos(rad) - t.y * Math.sin(rad),
            t.x * Math.sin(rad) + t.y * Math.cos(rad),
            t.z,
        ).add(center);
        return tr;
    }
    size(): number {
        return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
    }
    distance(vec: Vector3): number {
        return vec.add(this.sm(-1)).size();
    }
    normalize(): Vector3 {
        return this.sm(1 / this.size());
    }
}

class LineSegment {
    p1: Vector3;
    p2: Vector3;
    v: Vector3;
    constructor(p1: Vector3, p2: Vector3) {
        this.p1 = p1;
        this.p2 = p2;
        this.v = p2.add(p1.sm(-1)).normalize();
    }
}

class Triangle {
    p1: Vector3;
    p2: Vector3;
    p3: Vector3;
    n: Vector3;
    constructor(p1: Vector3, p2: Vector3, p3: Vector3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        const p1i = p1.sm(-1);
        const v12 = p2.add(p1i);
        const v13 = p3.add(p1i);
        this.n = v12.cp(v13).normalize();
    }
    distance(point: Vector3): number {
        const v1 = point.add(this.p1.sm(-1));
        const d = Math.abs(this.n.dp(v1));
        return d;
    }
    collide(line: LineSegment): Vector3 | null {
        const pi = this.p1.sm(-1);
        const v1 = line.p1.add(pi);
        const v2 = line.p2.add(pi);
        if (v1.dp(this.n) * v2.dp(this.n) > 0) return null;
        const d1 = this.distance(line.p1);
        const d2 = this.distance(line.p2);
        const a = d1 / (d1 + d2);
        const v3 = v1.sm(1 - a).add(v2.sm(a));
        const c = this.p1.add(v3);
        const vcp1 = c.add(this.p1.sm(-1));
        const vcp2 = c.add(this.p2.sm(-1));
        const vcp3 = c.add(this.p3.sm(-1));
        const v12 = this.p2.add(this.p1.sm(-1));
        const v23 = this.p3.add(this.p2.sm(-1));
        const v31 = this.p1.add(this.p3.sm(-1));
        const c1zd = Math.sign(vcp1.cp(v12).z);
        const c2zd = Math.sign(vcp2.cp(v23).z);
        const c3zd = Math.sign(vcp3.cp(v31).z);
        if (c1zd === c2zd && c1zd === c3zd) return c;
        return null;
    }
    rotateX(center: Vector3, rad: number) {
        return new Triangle(
            this.p1.rotateX(center, rad),
            this.p2.rotateX(center, rad),
            this.p3.rotateX(center, rad),
        );
    }
    rotateY(center: Vector3, rad: number) {
        return new Triangle(
            this.p1.rotateY(center, rad),
            this.p2.rotateY(center, rad),
            this.p3.rotateY(center, rad),
        );
    }
    rotateZ(center: Vector3, rad: number) {
        return new Triangle(
            this.p1.rotateZ(center, rad),
            this.p2.rotateZ(center, rad),
            this.p3.rotateZ(center, rad),
        );
    }
    translate(vec: Vector3) {
        return new Triangle(
            this.p1.add(vec),
            this.p2.add(vec),
            this.p3.add(vec),
        );
    }
}

const degToRad = (n) => Math.PI * n / 180;

export { degToRad, LineSegment, Triangle, Vector3 };
