import BaseMap from './base';

export default class GSVMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'gsv';
        this.name = 'Генш(вект)';
        this.alt = '1-километровая карта Генштаба СССР (векторная), 2-я половина XX в.';
        this.tileSize = 256;
        this.isPng = true;
        this.minZoom = 6;
        this.maxZoom = 13;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://globus.tut.by/.tiles/ev/Z<zoom>/<y>/<x>.png';
    }
}
