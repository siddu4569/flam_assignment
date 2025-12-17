import { add, sub, mul } from "../math/vector.js";

export class SpringPoint {
    constructor(x, y, k = 0.1, damping = 0.15) {
        this.position = { x, y };
        this.velocity = { x: 0, y: 0 };
        this.target = { x, y };
        this.k = k;           
        this.damping = damping; 
    }

    setTarget(x, y) {
        this.target.x = x;
        this.target.y = y;
    }

    update() {
       
        const diff = sub(this.position, this.target);
        const acc = sub(
            mul(diff, -this.k),
            mul(this.velocity, this.damping)
        );
        this.velocity = add(this.velocity, acc);
        this.position = add(this.position, this.velocity);
    }
}
