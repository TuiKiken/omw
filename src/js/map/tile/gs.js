import BaseMap from './base';

export default class GSMapType extends BaseMap {
    constructor () {
        super();

        this.id = 'gs';
        this.name = 'Генштаб';
        this.alt = '1-километровая карта Генштаба СССР, 1950-1980-е гг.';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 8;
        this.maxZoom = 14;
        this.opacity = 1.00;
    }

    getRemoteTileUrl (coord, zoom) {
        let oob = false;
        if (zoom >= 12) {
            if (zoom >= 14) {
                oob = true;
            } else if (zoom == 13) {
                if (coord.x < 4744 && coord.y < 2655) oob = true;
            } else if (zoom == 12) {
                if (coord.x < 2372 && coord.y < 1327) oob = true;
            }
        }

        if (oob) {
            return 'http://orda.of.by/.tiles/e/Z<zoom>/<y>/<x>.jpg';
        } else {
            return 'http://vb-maps.googlecode.com/svn/trunk/tiles/Z<zoom>/<y>/<x>.jpg';
        }
    }
}

