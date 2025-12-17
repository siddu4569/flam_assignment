export const mouse = {
    x: 0,
    y: 0,
    isDown: false,

    init(canvas) {
        // Mouse move → track coordinates
        window.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            this.x = e.clientX - rect.left;
            this.y = e.clientY - rect.top;
        });

        // Optional drag input
        window.addEventListener("mousedown", () => {
            this.isDown = true;
        });

        window.addEventListener("mouseup", () => {
            this.isDown = false;
        });
    }
};
