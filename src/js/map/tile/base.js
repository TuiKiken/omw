import * as util from './../util';

export default class BaseMap {
    constructor () {
        this.id = 0;
        this.name = '';
        this.alt = '';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 1;
        this.maxZoom = 14;
        this.opacity = 1.00;
    }

    getRemoteTileUrl (coord, zoom) {
        throw new Error('Map Tile class require getRemoteTileUrl() method implementation');
    }

    getCachedTileUrl (coord, zoom) {
        throw new Error('Map Tile class require getCachedTileUrl() method implementation');
    }

    setCachedTileUrl (coord, zoom, url) {
        //TODO: save url
    }

    getTileUrl (coord, zoom) {
        //TODO: check cache
        let normalizedCoord = util.normalizeCoordinates(coord, zoom);

        if (normalizedCoord) {
            return this.getRemoteTileUrl(normalizedCoord, zoom).replace(/<\w+>/g, function (match) {
                switch (match) {
                    case '<zoom>':
                        return zoom;
                    case '<x>':
                        return normalizedCoord.x;
                    case '<y>':
                        return normalizedCoord.y;
                    default:
                        return '';
                }
            });
        } else {
            return null;
        }
    }

    getTile (coord, zoom, ownerDocument) {
        let src = this.getTileUrl(coord, zoom);
        let div = ownerDocument.createElement('div');

        div.style.width = `${this.tileSize.width}px`;
        div.style.height = `${this.tileSize.height}px`;
        div.innerHTML = `<img src=${src} width="${this.tileSize.width}" height="${this.tileSize.height}" />`; // onerror="src=''"

        return div;
    }
}