import BaseMap from './base';

export default class Verstovka1OfflineMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka1_offlien';
        this.name = '1-верстка(offline)';
        this.alt = '1-верстовая карта, 1-я половина XX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return '../.tiles/1v/<zoom>/<x>_<y>.jpg';
    }
}