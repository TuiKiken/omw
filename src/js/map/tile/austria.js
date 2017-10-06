import BaseMap from './base';

export default class AustriaMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'austria';
        this.name = 'Австрия';
        this.alt = '2-километровая австро-венгерская карта, начало XX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 12;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/austr/Z<zoom>/<y>/<x>.jpg';
    }
}
