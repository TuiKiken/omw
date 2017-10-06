import BaseMap from './base';

export default class Verstovka05MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka05';
        this.name = '1/2-версты';
        this.alt = 'Полуверстовая карта, 1-я половина XX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 7;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/polv/Z<zoom>/<y>/<x>.jpg';
    }
}
