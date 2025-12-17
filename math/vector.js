// Basic 2D vector operations

export function vec(x, y) {
    return { x, y };
}

export function add(a, b) {
    return { x: a.x + b.x, y: a.y + b.y };
}

export function sub(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}

export function mul(a, s) {
    return { x: a.x * s, y: a.y * s };
}

export function length(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y);
}

export function normalize(a) {
    const len = length(a);
    if (len === 0) return { x: 0, y: 0 };
    return { x: a.x / len, y: a.y / len };
}
