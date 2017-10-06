// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
export function normalizeCoordinates (coord, zoom) {
    let x = coord.x;
    let y = coord.y;

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    let tileRange = 1 << zoom;

    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange) {
        return null;
    }

    // repeat across x-axis
    if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
    }

    return { x: x, y: y };
}