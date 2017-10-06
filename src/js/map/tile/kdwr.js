import BaseMap from './base';

export default class KDWRMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'kdwr';
        this.name = 'KdwR 1км';
        this.alt = '1-километровая немецкая карта (KdwR), начало XX в.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 6;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://globus.tut.by/.tiles/kdwr/Z<zoom>/<y>/<x>.jpg';
    }
}
