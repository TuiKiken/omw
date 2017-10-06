import BaseMap from './base';

export default class WIG12MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'wig1-2';
        this.name = 'WIG 1км+';
        this.alt = '1-километровая польская карта (WIG), 1920-1930-е гг. - ТЕСТОВАЯ версия карты, сейчас дорабатывается, при ссылках пока лучше не использовать';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 9;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://globus.tut.by/.tiles/wig_v2/Z<zoom>/<y>/<x>.jpg';
    }
}
