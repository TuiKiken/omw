function initGeolocation() {
    (function(){'use strict';var d,e=this;function g(a,b,c){return a.call.apply(a.bind,arguments)}function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,f);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:k;return n.apply(null,arguments)}
    function p(a,b){var c=a.split("."),f=e;c[0]in f||!f.execScript||f.execScript("var "+c[0]);for(var h;c.length&&(h=c.shift());)c.length||void 0===b?f[h]?f=f[h]:f=f[h]={}:f[h]=b};function q(a,b,c){var f={clickable:!1,cursor:"pointer",draggable:!1,flat:!0,icon:{url:"https://chadkillingsworth.github.io/geolocation-marker/images/gpsloc.png",size:new google.maps.Size(34,34),scaledSize:new google.maps.Size(17,17),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(8,8)},optimized:!1,position:new google.maps.LatLng(0,0),title:"Current location",zIndex:2};b&&(f=this.c(f,b));b={clickable:!1,radius:0,strokeColor:"1bb6ff",strokeOpacity:.4,fillColor:"61a0bf",fillOpacity:.4,
        strokeWeight:1,zIndex:1};c&&(b=this.c(b,c));this.b=new google.maps.Marker(f);this.a=new google.maps.Circle(b);google.maps.MVCObject.prototype.set.call(this,"accuracy",null);google.maps.MVCObject.prototype.set.call(this,"position",null);google.maps.MVCObject.prototype.set.call(this,"map",null);this.set("minimum_accuracy",null);this.set("position_options",{enableHighAccuracy:!0,maximumAge:1E3});this.a.bindTo("map",this.b);a&&this.e(a)}var r={map:!0,position:!0,radius:!0},t=/^(?:position|accuracy)$/i;(function(){var a=google.maps.MVCObject;function b(){}b.prototype=a.prototype;q.t=a.prototype;q.prototype=new b;q.prototype.constructor=q;q.s=function(b,f,h){for(var m=Array(arguments.length-2),l=2;l<arguments.length;l++)m[l-2]=arguments[l];return a.prototype[f].apply(b,m)}})();d=q.prototype;d.set=function(a,b){if(t.test(a))throw"'"+a+"' is a read-only property.";"map"===a?this.e(b):google.maps.MVCObject.prototype.set.apply(this,arguments)};d.b=null;d.a=null;d.h=function(){return this.get("map")};
    d.j=function(){return this.get("position_options")};d.p=function(a){this.set("position_options",a)};d.d=function(){return this.get("position")};d.k=function(){return this.get("position")?this.a.getBounds():null};d.i=function(){return this.get("accuracy")};d.f=function(){return this.get("minimum_accuracy")};d.o=function(a){this.set("minimum_accuracy",a)};d.g=-1;
    d.e=function(a){google.maps.MVCObject.prototype.set.call(this,"map",a);a?this.r():(this.b.unbind("position"),this.a.unbind("center"),this.a.unbind("radius"),google.maps.MVCObject.prototype.set.call(this,"accuracy",null),google.maps.MVCObject.prototype.set.call(this,"position",null),navigator.geolocation.clearWatch(this.g),this.g=-1,this.b.setMap(a))};d.n=function(a){this.b.setOptions(this.c({},a))};d.m=function(a){this.a.setOptions(this.c({},a))};
    d.q=function(a){var b=new google.maps.LatLng(a.coords.latitude,a.coords.longitude),c=null==this.b.getMap();if(c){if(null!=this.f()&&a.coords.accuracy>this.f())return;this.b.setMap(this.h());this.b.bindTo("position",this);this.a.bindTo("center",this,"position");this.a.bindTo("radius",this,"accuracy")}this.i()!=a.coords.accuracy&&google.maps.MVCObject.prototype.set.call(this,"accuracy",a.coords.accuracy);!c&&null!=this.d()&&this.d().equals(b)||google.maps.MVCObject.prototype.set.call(this,"position",
        b)};d.r=function(){navigator.geolocation&&(this.g=navigator.geolocation.watchPosition(n(this.q,this),n(this.l,this),this.j()))};d.l=function(a){google.maps.event.trigger(this,"geolocation_error",a)};d.c=function(a,b){for(var c in b)!0!==r[c]&&(a[c]=b[c]);return a};p("GeolocationMarker",q);p("GeolocationMarker.prototype.getAccuracy",q.prototype.i);p("GeolocationMarker.prototype.getBounds",q.prototype.k);p("GeolocationMarker.prototype.getMap",q.prototype.h);
    p("GeolocationMarker.prototype.getMinimumAccuracy",q.prototype.f);p("GeolocationMarker.prototype.getPosition",q.prototype.d);p("GeolocationMarker.prototype.getPositionOptions",q.prototype.j);p("GeolocationMarker.prototype.setCircleOptions",q.prototype.m);p("GeolocationMarker.prototype.setMap",q.prototype.e);p("GeolocationMarker.prototype.setMarkerOptions",q.prototype.n);p("GeolocationMarker.prototype.setMinimumAccuracy",q.prototype.o);p("GeolocationMarker.prototype.setPositionOptions",q.prototype.p);
    }).call(window)
}

export default class MapLayer {
    constructor () {
        this.map = null;
        this.mapTypes = [];
        this.mapTypeIds = [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP];
        this.mapOptions = {
            center: new google.maps.LatLng(53.896475, 27.547618),
            zoom: 17,
            disableDefaultUI: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                //position: google.maps.ControlPosition.RIGHT_TOP,
                mapTypeIds: this.mapTypeIds
            }
        };
    }

    render (element) {
        this.map = new google.maps.Map(element, this.mapOptions);
        this.mapTypes.forEach(map => {
            map.tileSize = new google.maps.Size(map.tileSize || 256, map.tileSize || 256);
            this.mapTypeIds.push(map.id);
            this.map.mapTypes.set(map.id, map);
        });
        this.currentLocationMarker = new google.maps.Marker({
            icon: {
                scaledSize: new google.maps.Size(32, 32),
                url: 'img/pin_position.png'
            },
            zIndex: 999,
            position: new google.maps.LatLng(0, 0),
            anchor: new google.maps.Point(32, 32),
            map: this.map
        });

        initGeolocation();
        new GeolocationMarker(this.map);
    }

    addType (type) {
        this.mapTypes.push(type);
    }

    setUserPosition (position) {
        this.currentLocationMarker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }

    setCenter (position) {
        this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    }

    addControl (element) {
        this.map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(element);
    }
}

//
//Map.prototype.watchPosition = function(successCallback, errorCallback) {
//    navigator.geolocation.watchPosition(successCallback, errorCallback, {timeout: 5000});
//}
