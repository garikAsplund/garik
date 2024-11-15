function noise2D(x, y, frequency, amplitude) {
    // This is a simplified noise function, you can replace it with a more complex one
    return Math.sin(x * frequency) * Math.cos(y * frequency) * amplitude;
}

// Mapping function
function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

self.onmessage = function(e) {
    const { frame, points, frequency, amplitude, cols, rows, gw, gh, mx, my, cw, ch } = e.data;

    const updatedPoints = points.map((point, i) => {
        const x = (i % cols) * cw + mx;
        const y = Math.floor(i / cols) * ch + my;
        const n = noise2D(x + frame * 2, y, frequency, amplitude);
        const newX = x + n;
        const newY = y + n;
        const lineWidth = mapRange(n, -amplitude, amplitude, 22, 7);
        const color = `hsl(${mapRange(n, -amplitude, amplitude, 333, 250)}, 70%, 95%)`;

        return { x: newX, y: newY, ix: x, iy: y, lineWidth, color };
    });

    // Post the updated points back to the main thread
    postMessage(updatedPoints);
};