import BaseMap from './base';

export default class RKKAMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'rkka';
        this.name = 'РККА 500м';
        this.alt = '500-метровая карта РККА, 1920-1930-е гг.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 1;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/rkka/Z<zoom>/<y>/<x>.jpg';
    }
}

