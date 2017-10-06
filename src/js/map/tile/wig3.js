import BaseMap from './base';

export default class WIG3MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'wig3';
        this.name = 'WIG 3км';
        this.alt = '3-километровая польская карта (WIG), 1920-1930-е гг.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 12;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/wig3km/Z<zoom>/<y>/<x>.jpg';
    }
}
