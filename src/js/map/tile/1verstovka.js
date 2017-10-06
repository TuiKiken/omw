import BaseMap from './base';

export default class Verstovka1MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka1';
        this.name = '1-верстка';
        this.alt = '1-верстовая карта, 1-я половина XX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/1v/Z<zoom>/<y>/<x>.jpg';
    }
}