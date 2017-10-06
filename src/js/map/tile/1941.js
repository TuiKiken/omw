import BaseMap from './base';

export default class WWIIMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'wwii';
        this.name = '1941-44 гг.';
        this.alt = 'Аэрофото-съемка ВОв';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 1;
        this.maxZoom = 18;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        // 2012-10-04 - http://17200.selcdn.ru/AerialWWII/Z14/5267/9447.jpg
        // 2012-05-00 - http://46.182.27.171/AerialWWII/Z18/84308/151142.jpg
        //return `http://46.182.27.171/AerialWWII/Z${zoom}/${normalizedCoord.y}/${normalizedCoord.x}.jpg`;
        return 'http://17200.selcdn.ru/AerialWWII/Z<zoom>/<y>/<x>.jpg';
    }
}

