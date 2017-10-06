import BaseMap from './base';

export default class RKKA2MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'rkka2';
        this.name = 'РККА 500м+';
        this.alt = '500-метровая карта РККА (предыдущая версия, с частичным покрытием территории Беларуси), 1920-1930-е гг.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 10;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/rkka_v2/Z<zoom>/<y>/<x>.jpg';
    }
}

