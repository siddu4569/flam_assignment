import { add, sub, mul } from "../math/vector.js";

export class SpringPoint {
    constructor(x, y, k = 0.1, damping = 0.15) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.target = { x, y };

        this.k = k;            // spring stiffness
        this.damping = damping; // damping factor
    }

    setTarget(x, y) {
        this.target.x = x;
        this.target.y = y;
    }

    update() {
        // displacement (pos - target)
        const diff = sub(this.position, this.target);

        // acceleration = -k * diff - damping * velocity
        const acc = sub(
            mul(diff, -this.k),
            mul(this.velocity, this.damping)
        );

        // velocity += acc
        this.velocity = add(this.velocity, acc);

        // position += velocity
        this.position = add(this.position, this.velocity);
    }
}
