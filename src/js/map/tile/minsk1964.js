import BaseMap from './base';

export default class Minsk1964MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'minsk1964';
        this.name = 'Минск 1964';
        this.alt = 'Аэрофотосъемка Минска, октябрь 1964 г.';
        this.tileSize = 256;
        this.isPng = true;
        this.minZoom = 5;
        this.maxZoom = 17;
        this.opacity = 1.00;
    }

    getRemoteTileUrl (coord, zoom) {
        return `http://orda.of.by/.tiles/minsk1964/Z<zoom>/<y>/<x>.${zoom >= 16 ? 'jpg' : 'png'}`;
    }
}