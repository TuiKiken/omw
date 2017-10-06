import BaseMap from './base';

export default class Verstovka2MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka2';
        this.name = '2-верстка';
        this.alt = '2-верстовая карта, 1-я половина XX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/2v/Z<zoom>/<y>/<x>.jpg';
    }
}