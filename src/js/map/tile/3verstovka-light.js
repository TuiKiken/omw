import BaseMap from './base';

export default class Verstovka3LightMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka3-light';
        this.name = '3-верстка';
        this.alt = '3-верстовая карта (условно Шуберта), 2-я половина XIX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 10;
        this.maxZoom = 13;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://globus.tut.by/.tiles/3v/Z<zoom>/<y>/<x>.jpg';
    }
}