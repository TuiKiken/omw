import BaseMap from './base';

export default class Verstovka10MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka10';
        this.name = '10-верстка';
        this.alt = '10-верстовая карта (Стрельбицкого), 2-я половина XIX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 12;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        //return 'http://orda.of.by/.tiles/10v-worst/Z<zoom>/<y>/<x>.jpg';
        return 'http://orda.of.by/.tiles/10v/Z<zoom>/<y>/<x>.jpg';
    }
}
