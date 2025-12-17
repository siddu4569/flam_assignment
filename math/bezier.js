import { add, sub, mul } from "./vector.js";



export function bezierPoint(P0, P1, P2, P3, t) {
    const u = 1 - t;
    const p0 = mul(P0, u * u * u);
    const p1 = mul(P1, 3 * u * u * t);
    const p2 = mul(P2, 3 * u * t * t);
    const p3 = mul(P3, t * t * t);

    return add(add(p0, p1), add(p2, p3));
}
export function bezierTangent(P0, P1, P2, P3, t) {
    const u = 1 - t;
    const term1 = mul(sub(P1, P0), 3 * u * u);
    const term2 = mul(sub(P2, P1), 6 * u * t);
    const term3 = mul(sub(P3, P2), 3 * t * t);

    return add(add(term1, term2), term3);
}

export function sampleBezier(P0, P1, P2, P3, step = 0.01) {
    const points = [];
    for (let t = 0; t <= 1; t += step) {
        points.push(bezierPoint(P0, P1, P2, P3, t));
    }
    return points;
}
