import BaseMap from './base';

export default class Verstovka3MapType extends BaseMap {
    constructor () {
        super();

        this.id = 'verstovka3';
        this.name = '3-верстка+';
        this.alt = '3-верстовая карта (условно Шуберта), 2-я половина XIX в. (скан улучшенного качества, но пока загружено мало листов)';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 10;
        this.maxZoom = 14;
        this.opacity = 1.0;
    }

    getRemoteTileUrl () {
        return 'http://orda.of.by/.tiles/3vq/Z<zoom>/<y>/<x>.jpg';
    }
}
