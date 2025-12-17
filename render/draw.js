import { sampleBezier,bezierPoint, bezierTangent } from "../math/bezier.js";
import { normalize, add, mul } from "../math/vector.js";

export function clear(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export function drawBezier(ctx, P0, P1, P2, P3) {
    const points = sampleBezier(P0, P1, P2, P3, 0.01);

    ctx.strokeStyle = "#00eaff";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let p of points) {
        ctx.lineTo(p.x, p.y);
    }

    ctx.stroke();
}


export function drawControlPoints(ctx, P0, P1, P2, P3) {
    const points = [P0, P1, P2, P3];

    ctx.fillStyle = "#ff3b3b";

    for (let p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
    }
}


export function drawTangents(ctx, P0, P1, P2, P3) {
    ctx.strokeStyle = "#f40810ff";
    ctx.lineWidth = 2;

    for (let t = 0; t <1; t += 0.1) {
        const point = bezierPoint(P0, P1, P2, P3, t);
        const tangent = normalize(bezierTangent(P0, P1, P2, P3, t));
        const end = add(point, mul(tangent, 40));

        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }
}



function samplePoint(P0, P1, P2, P3, t) {
    return sampleBezier(P0, P1, P2, P3, t)[0]; 
}
