import { mouse } from "./input/mouse.js";
import { SpringPoint } from "./physics/spring.js";
import { drawBezier, drawControlPoints, drawTangents, clear } from "./render/draw.js";

// Canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

mouse.init(canvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// -------------------------------------------------------
//  CONTROL POINTS
// -------------------------------------------------------

// Fixed endpoints
const P0 = { x: canvas.width * 0.1, y: canvas.height * 0.5 };
const P3 = { x: canvas.width * 0.9, y: canvas.height * 0.5 };

// Dynamic control points (spring motion)
const P1 = new SpringPoint(canvas.width * 0.3, canvas.height * 0.3);
const P2 = new SpringPoint(canvas.width * 0.7, canvas.height * 0.7);

// -------------------------------------------------------
//  ANIMATION LOOP
// -------------------------------------------------------

function animate() {
    requestAnimationFrame(animate);

    // Mouse position controls the target
    P1.setTarget(mouse.x -150, mouse.y+150);
    P2.setTarget(mouse.x +150, mouse.y-150);

    // Update physics
    P1.update();
    P2.update();

    // Clear screen
    clear(ctx, canvas);

    // Draw everything
    drawBezier(ctx, P0, P1.position, P2.position, P3);
    drawControlPoints(ctx, P0, P1.position, P2.position, P3);
    drawTangents(ctx, P0, P1.position, P2.position, P3);
}

animate();
