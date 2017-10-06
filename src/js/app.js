import MapLayer from './map/layer';

import Verstovka1MapType from './map/tile/1verstovka';
// import Verstovka1OfflineMapType from './map/tile/1verstovka_offline';
import Verstovka2MapType from './map/tile/2verstovka';
import Verstovka3MapType from './map/tile/3verstovka';
// import Verstovka3LightMapType from './map/tile/3verstovka-light';
import Verstovka05MapType from './map/tile/05verstovka';
import Verstovka10MapType from './map/tile/10verstovka';
import WWIIMapType from './map/tile/1941';
import AustriaMapType from './map/tile/austria';
import GSMapType from './map/tile/gs';
import GSVMapType from './map/tile/gsv';
import KDWRMapType from './map/tile/kdwr';
import Minsk1964MapType from './map/tile/minsk1964';
import RKKAMapType from './map/tile/rkka';
import RKKA2MapType from './map/tile/rkka2';
import WIG11MapType from './map/tile/wig1-1';
import WIG12MapType from './map/tile/wig1-2';
import WIG3MapType from './map/tile/wig3';

window.run = function() {
    let map = new MapLayer();

    map.addType(new Verstovka1MapType());
    // map.addType(new Verstovka1OfflineMapType());
    map.addType(new Verstovka2MapType());
    map.addType(new Verstovka3MapType());
    // map.addType(new Verstovka3LightMapType());
    map.addType(new KDWRMapType());
    map.addType(new WIG11MapType());
    map.addType(new WIG12MapType());
    map.addType(new WIG3MapType());
    map.addType(new RKKAMapType());
    map.addType(new RKKA2MapType());
    map.addType(new Verstovka05MapType());
    map.addType(new Verstovka10MapType());
    map.addType(new WWIIMapType());
    map.addType(new AustriaMapType());
    map.addType(new GSMapType());
    map.addType(new GSVMapType());
    map.addType(new Minsk1964MapType());

    map.render(document.getElementById('main-map'));

    navigator.geolocation.getCurrentPosition(function (position) {
         map.setCenter(position);
    });

    /** Watch device position */
    // navigator.geolocation.watchPosition(function (position) {
    //     map.setCenter(position);
    // });

    /** Add center button */
    var centerDiv = document.createElement('div');
    centerDiv.className = 'center';
    centerDiv.addEventListener('click', function (e) {
        navigator.geolocation.getCurrentPosition(function (position) {
            map.setCenter(position);
        });
    });
    map.addControl(centerDiv);

}
