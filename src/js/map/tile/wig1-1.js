import BaseMap from './base';

export default class WIG11MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'wig1-1';
        this.name = 'WIG 1км';
        this.alt = '1-километровая польская карта (WIG), 1920-1930-е гг.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 9;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/wig/Z<zoom>/<y>/<x>.jpg';
    }
}