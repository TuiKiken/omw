(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _layer = require('./map/layer');

var _layer2 = _interopRequireDefault(_layer);

var _verstovka = require('./map/tile/1verstovka');

var _verstovka2 = _interopRequireDefault(_verstovka);

var _verstovka3 = require('./map/tile/2verstovka');

var _verstovka4 = _interopRequireDefault(_verstovka3);

var _verstovka5 = require('./map/tile/3verstovka');

var _verstovka6 = _interopRequireDefault(_verstovka5);

var _verstovka7 = require('./map/tile/05verstovka');

var _verstovka8 = _interopRequireDefault(_verstovka7);

var _verstovka9 = require('./map/tile/10verstovka');

var _verstovka10 = _interopRequireDefault(_verstovka9);

var _ = require('./map/tile/1941');

var _2 = _interopRequireDefault(_);

var _austria = require('./map/tile/austria');

var _austria2 = _interopRequireDefault(_austria);

var _gs = require('./map/tile/gs');

var _gs2 = _interopRequireDefault(_gs);

var _gsv = require('./map/tile/gsv');

var _gsv2 = _interopRequireDefault(_gsv);

var _kdwr = require('./map/tile/kdwr');

var _kdwr2 = _interopRequireDefault(_kdwr);

var _minsk = require('./map/tile/minsk1964');

var _minsk2 = _interopRequireDefault(_minsk);

var _rkka = require('./map/tile/rkka');

var _rkka2 = _interopRequireDefault(_rkka);

var _rkka3 = require('./map/tile/rkka2');

var _rkka4 = _interopRequireDefault(_rkka3);

var _wig = require('./map/tile/wig1-1');

var _wig2 = _interopRequireDefault(_wig);

var _wig3 = require('./map/tile/wig1-2');

var _wig4 = _interopRequireDefault(_wig3);

var _wig5 = require('./map/tile/wig3');

var _wig6 = _interopRequireDefault(_wig5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.run = function () {
    var map = new _layer2.default();

    map.addType(new _verstovka2.default());
    // map.addType(new Verstovka1OfflineMapType());
    map.addType(new _verstovka4.default());
    map.addType(new _verstovka6.default());
    // map.addType(new Verstovka3LightMapType());
    map.addType(new _kdwr2.default());
    map.addType(new _wig2.default());
    map.addType(new _wig4.default());
    map.addType(new _wig6.default());
    map.addType(new _rkka2.default());
    map.addType(new _rkka4.default());
    map.addType(new _verstovka8.default());
    map.addType(new _verstovka10.default());
    map.addType(new _2.default());
    map.addType(new _austria2.default());
    map.addType(new _gs2.default());
    map.addType(new _gsv2.default());
    map.addType(new _minsk2.default());

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
};
// import Verstovka3LightMapType from './map/tile/3verstovka-light';

// import Verstovka1OfflineMapType from './map/tile/1verstovka_offline';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJydW4iLCJtYXAiLCJhZGRUeXBlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJzZXRDZW50ZXIiLCJjZW50ZXJEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhZGRDb250cm9sIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxPQUFPQyxHQUFQLEdBQWEsWUFBVztBQUNwQixRQUFJQyxNQUFNLHFCQUFWOztBQUVBQSxRQUFJQyxPQUFKLENBQVkseUJBQVo7QUFDQTtBQUNBRCxRQUFJQyxPQUFKLENBQVkseUJBQVo7QUFDQUQsUUFBSUMsT0FBSixDQUFZLHlCQUFaO0FBQ0E7QUFDQUQsUUFBSUMsT0FBSixDQUFZLG9CQUFaO0FBQ0FELFFBQUlDLE9BQUosQ0FBWSxtQkFBWjtBQUNBRCxRQUFJQyxPQUFKLENBQVksbUJBQVo7QUFDQUQsUUFBSUMsT0FBSixDQUFZLG1CQUFaO0FBQ0FELFFBQUlDLE9BQUosQ0FBWSxvQkFBWjtBQUNBRCxRQUFJQyxPQUFKLENBQVksb0JBQVo7QUFDQUQsUUFBSUMsT0FBSixDQUFZLHlCQUFaO0FBQ0FELFFBQUlDLE9BQUosQ0FBWSwwQkFBWjtBQUNBRCxRQUFJQyxPQUFKLENBQVksZ0JBQVo7QUFDQUQsUUFBSUMsT0FBSixDQUFZLHVCQUFaO0FBQ0FELFFBQUlDLE9BQUosQ0FBWSxrQkFBWjtBQUNBRCxRQUFJQyxPQUFKLENBQVksbUJBQVo7QUFDQUQsUUFBSUMsT0FBSixDQUFZLHFCQUFaOztBQUVBRCxRQUFJRSxNQUFKLENBQVdDLFNBQVNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBWDs7QUFFQUMsY0FBVUMsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQVVDLFFBQVYsRUFBb0I7QUFDeERSLFlBQUlTLFNBQUosQ0FBY0QsUUFBZDtBQUNKLEtBRkQ7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFJRSxZQUFZUCxTQUFTUSxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FELGNBQVVFLFNBQVYsR0FBc0IsUUFBdEI7QUFDQUYsY0FBVUcsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBVUMsQ0FBVixFQUFhO0FBQzdDVCxrQkFBVUMsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDLFVBQVVDLFFBQVYsRUFBb0I7QUFDekRSLGdCQUFJUyxTQUFKLENBQWNELFFBQWQ7QUFDSCxTQUZEO0FBR0gsS0FKRDtBQUtBUixRQUFJZSxVQUFKLENBQWVMLFNBQWY7QUFFSCxDQTNDRDtBQWZBOztBQUhBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXBMYXllciBmcm9tICcuL21hcC9sYXllcic7XG5cbmltcG9ydCBWZXJzdG92a2ExTWFwVHlwZSBmcm9tICcuL21hcC90aWxlLzF2ZXJzdG92a2EnO1xuLy8gaW1wb3J0IFZlcnN0b3ZrYTFPZmZsaW5lTWFwVHlwZSBmcm9tICcuL21hcC90aWxlLzF2ZXJzdG92a2Ffb2ZmbGluZSc7XG5pbXBvcnQgVmVyc3RvdmthMk1hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS8ydmVyc3RvdmthJztcbmltcG9ydCBWZXJzdG92a2EzTWFwVHlwZSBmcm9tICcuL21hcC90aWxlLzN2ZXJzdG92a2EnO1xuLy8gaW1wb3J0IFZlcnN0b3ZrYTNMaWdodE1hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS8zdmVyc3RvdmthLWxpZ2h0JztcbmltcG9ydCBWZXJzdG92a2EwNU1hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS8wNXZlcnN0b3ZrYSc7XG5pbXBvcnQgVmVyc3RvdmthMTBNYXBUeXBlIGZyb20gJy4vbWFwL3RpbGUvMTB2ZXJzdG92a2EnO1xuaW1wb3J0IFdXSUlNYXBUeXBlIGZyb20gJy4vbWFwL3RpbGUvMTk0MSc7XG5pbXBvcnQgQXVzdHJpYU1hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS9hdXN0cmlhJztcbmltcG9ydCBHU01hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS9ncyc7XG5pbXBvcnQgR1NWTWFwVHlwZSBmcm9tICcuL21hcC90aWxlL2dzdic7XG5pbXBvcnQgS0RXUk1hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS9rZHdyJztcbmltcG9ydCBNaW5zazE5NjRNYXBUeXBlIGZyb20gJy4vbWFwL3RpbGUvbWluc2sxOTY0JztcbmltcG9ydCBSS0tBTWFwVHlwZSBmcm9tICcuL21hcC90aWxlL3Jra2EnO1xuaW1wb3J0IFJLS0EyTWFwVHlwZSBmcm9tICcuL21hcC90aWxlL3Jra2EyJztcbmltcG9ydCBXSUcxMU1hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS93aWcxLTEnO1xuaW1wb3J0IFdJRzEyTWFwVHlwZSBmcm9tICcuL21hcC90aWxlL3dpZzEtMic7XG5pbXBvcnQgV0lHM01hcFR5cGUgZnJvbSAnLi9tYXAvdGlsZS93aWczJztcblxud2luZG93LnJ1biA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBtYXAgPSBuZXcgTWFwTGF5ZXIoKTtcblxuICAgIG1hcC5hZGRUeXBlKG5ldyBWZXJzdG92a2ExTWFwVHlwZSgpKTtcbiAgICAvLyBtYXAuYWRkVHlwZShuZXcgVmVyc3RvdmthMU9mZmxpbmVNYXBUeXBlKCkpO1xuICAgIG1hcC5hZGRUeXBlKG5ldyBWZXJzdG92a2EyTWFwVHlwZSgpKTtcbiAgICBtYXAuYWRkVHlwZShuZXcgVmVyc3RvdmthM01hcFR5cGUoKSk7XG4gICAgLy8gbWFwLmFkZFR5cGUobmV3IFZlcnN0b3ZrYTNMaWdodE1hcFR5cGUoKSk7XG4gICAgbWFwLmFkZFR5cGUobmV3IEtEV1JNYXBUeXBlKCkpO1xuICAgIG1hcC5hZGRUeXBlKG5ldyBXSUcxMU1hcFR5cGUoKSk7XG4gICAgbWFwLmFkZFR5cGUobmV3IFdJRzEyTWFwVHlwZSgpKTtcbiAgICBtYXAuYWRkVHlwZShuZXcgV0lHM01hcFR5cGUoKSk7XG4gICAgbWFwLmFkZFR5cGUobmV3IFJLS0FNYXBUeXBlKCkpO1xuICAgIG1hcC5hZGRUeXBlKG5ldyBSS0tBMk1hcFR5cGUoKSk7XG4gICAgbWFwLmFkZFR5cGUobmV3IFZlcnN0b3ZrYTA1TWFwVHlwZSgpKTtcbiAgICBtYXAuYWRkVHlwZShuZXcgVmVyc3RvdmthMTBNYXBUeXBlKCkpO1xuICAgIG1hcC5hZGRUeXBlKG5ldyBXV0lJTWFwVHlwZSgpKTtcbiAgICBtYXAuYWRkVHlwZShuZXcgQXVzdHJpYU1hcFR5cGUoKSk7XG4gICAgbWFwLmFkZFR5cGUobmV3IEdTTWFwVHlwZSgpKTtcbiAgICBtYXAuYWRkVHlwZShuZXcgR1NWTWFwVHlwZSgpKTtcbiAgICBtYXAuYWRkVHlwZShuZXcgTWluc2sxOTY0TWFwVHlwZSgpKTtcblxuICAgIG1hcC5yZW5kZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbWFwJykpO1xuXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgIG1hcC5zZXRDZW50ZXIocG9zaXRpb24pO1xuICAgIH0pO1xuXG4gICAgLyoqIFdhdGNoIGRldmljZSBwb3NpdGlvbiAqL1xuICAgIC8vIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgIC8vICAgICBtYXAuc2V0Q2VudGVyKHBvc2l0aW9uKTtcbiAgICAvLyB9KTtcblxuICAgIC8qKiBBZGQgY2VudGVyIGJ1dHRvbiAqL1xuICAgIHZhciBjZW50ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZW50ZXJEaXYuY2xhc3NOYW1lID0gJ2NlbnRlcic7XG4gICAgY2VudGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIG1hcC5zZXRDZW50ZXIocG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtYXAuYWRkQ29udHJvbChjZW50ZXJEaXYpO1xuXG59XG4iXX0=
},{"./map/layer":2,"./map/tile/05verstovka":3,"./map/tile/10verstovka":4,"./map/tile/1941":5,"./map/tile/1verstovka":6,"./map/tile/2verstovka":7,"./map/tile/3verstovka":8,"./map/tile/austria":9,"./map/tile/gs":11,"./map/tile/gsv":12,"./map/tile/kdwr":13,"./map/tile/minsk1964":14,"./map/tile/rkka":15,"./map/tile/rkka2":16,"./map/tile/wig1-1":17,"./map/tile/wig1-2":18,"./map/tile/wig3":19}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function initGeolocation() {
    (function () {
        'use strict';
        var d,
            e = this;function g(a, b, c) {
            return a.call.apply(a.bind, arguments);
        }function k(a, b, c) {
            if (!a) throw Error();if (2 < arguments.length) {
                var f = Array.prototype.slice.call(arguments, 2);return function () {
                    var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, f);return a.apply(b, c);
                };
            }return function () {
                return a.apply(b, arguments);
            };
        }function n(a, b, c) {
            n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g : k;return n.apply(null, arguments);
        }
        function p(a, b) {
            var c = a.split("."),
                f = e;c[0] in f || !f.execScript || f.execScript("var " + c[0]);for (var h; c.length && (h = c.shift());) {
                c.length || void 0 === b ? f[h] ? f = f[h] : f = f[h] = {} : f[h] = b;
            }
        };function q(a, b, c) {
            var f = { clickable: !1, cursor: "pointer", draggable: !1, flat: !0, icon: { url: "https://chadkillingsworth.github.io/geolocation-marker/images/gpsloc.png", size: new google.maps.Size(34, 34), scaledSize: new google.maps.Size(17, 17), origin: new google.maps.Point(0, 0), anchor: new google.maps.Point(8, 8) }, optimized: !1, position: new google.maps.LatLng(0, 0), title: "Current location", zIndex: 2 };b && (f = this.c(f, b));b = { clickable: !1, radius: 0, strokeColor: "1bb6ff", strokeOpacity: .4, fillColor: "61a0bf", fillOpacity: .4,
                strokeWeight: 1, zIndex: 1 };c && (b = this.c(b, c));this.b = new google.maps.Marker(f);this.a = new google.maps.Circle(b);google.maps.MVCObject.prototype.set.call(this, "accuracy", null);google.maps.MVCObject.prototype.set.call(this, "position", null);google.maps.MVCObject.prototype.set.call(this, "map", null);this.set("minimum_accuracy", null);this.set("position_options", { enableHighAccuracy: !0, maximumAge: 1E3 });this.a.bindTo("map", this.b);a && this.e(a);
        }var r = { map: !0, position: !0, radius: !0 },
            t = /^(?:position|accuracy)$/i;(function () {
            var a = google.maps.MVCObject;function b() {}b.prototype = a.prototype;q.t = a.prototype;q.prototype = new b();q.prototype.constructor = q;q.s = function (b, f, h) {
                for (var m = Array(arguments.length - 2), l = 2; l < arguments.length; l++) {
                    m[l - 2] = arguments[l];
                }return a.prototype[f].apply(b, m);
            };
        })();d = q.prototype;d.set = function (a, b) {
            if (t.test(a)) throw "'" + a + "' is a read-only property.";"map" === a ? this.e(b) : google.maps.MVCObject.prototype.set.apply(this, arguments);
        };d.b = null;d.a = null;d.h = function () {
            return this.get("map");
        };
        d.j = function () {
            return this.get("position_options");
        };d.p = function (a) {
            this.set("position_options", a);
        };d.d = function () {
            return this.get("position");
        };d.k = function () {
            return this.get("position") ? this.a.getBounds() : null;
        };d.i = function () {
            return this.get("accuracy");
        };d.f = function () {
            return this.get("minimum_accuracy");
        };d.o = function (a) {
            this.set("minimum_accuracy", a);
        };d.g = -1;
        d.e = function (a) {
            google.maps.MVCObject.prototype.set.call(this, "map", a);a ? this.r() : (this.b.unbind("position"), this.a.unbind("center"), this.a.unbind("radius"), google.maps.MVCObject.prototype.set.call(this, "accuracy", null), google.maps.MVCObject.prototype.set.call(this, "position", null), navigator.geolocation.clearWatch(this.g), this.g = -1, this.b.setMap(a));
        };d.n = function (a) {
            this.b.setOptions(this.c({}, a));
        };d.m = function (a) {
            this.a.setOptions(this.c({}, a));
        };
        d.q = function (a) {
            var b = new google.maps.LatLng(a.coords.latitude, a.coords.longitude),
                c = null == this.b.getMap();if (c) {
                if (null != this.f() && a.coords.accuracy > this.f()) return;this.b.setMap(this.h());this.b.bindTo("position", this);this.a.bindTo("center", this, "position");this.a.bindTo("radius", this, "accuracy");
            }this.i() != a.coords.accuracy && google.maps.MVCObject.prototype.set.call(this, "accuracy", a.coords.accuracy);!c && null != this.d() && this.d().equals(b) || google.maps.MVCObject.prototype.set.call(this, "position", b);
        };d.r = function () {
            navigator.geolocation && (this.g = navigator.geolocation.watchPosition(n(this.q, this), n(this.l, this), this.j()));
        };d.l = function (a) {
            google.maps.event.trigger(this, "geolocation_error", a);
        };d.c = function (a, b) {
            for (var c in b) {
                !0 !== r[c] && (a[c] = b[c]);
            }return a;
        };p("GeolocationMarker", q);p("GeolocationMarker.prototype.getAccuracy", q.prototype.i);p("GeolocationMarker.prototype.getBounds", q.prototype.k);p("GeolocationMarker.prototype.getMap", q.prototype.h);
        p("GeolocationMarker.prototype.getMinimumAccuracy", q.prototype.f);p("GeolocationMarker.prototype.getPosition", q.prototype.d);p("GeolocationMarker.prototype.getPositionOptions", q.prototype.j);p("GeolocationMarker.prototype.setCircleOptions", q.prototype.m);p("GeolocationMarker.prototype.setMap", q.prototype.e);p("GeolocationMarker.prototype.setMarkerOptions", q.prototype.n);p("GeolocationMarker.prototype.setMinimumAccuracy", q.prototype.o);p("GeolocationMarker.prototype.setPositionOptions", q.prototype.p);
    }).call(window);
}

var MapLayer = function () {
    function MapLayer() {
        _classCallCheck(this, MapLayer);

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

    _createClass(MapLayer, [{
        key: "render",
        value: function render(element) {
            var _this = this;

            this.map = new google.maps.Map(element, this.mapOptions);
            this.mapTypes.forEach(function (map) {
                map.tileSize = new google.maps.Size(map.tileSize || 256, map.tileSize || 256);
                _this.mapTypeIds.push(map.id);
                _this.map.mapTypes.set(map.id, map);
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
    }, {
        key: "addType",
        value: function addType(type) {
            this.mapTypes.push(type);
        }
    }, {
        key: "setUserPosition",
        value: function setUserPosition(position) {
            this.currentLocationMarker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        }
    }, {
        key: "setCenter",
        value: function setCenter(position) {
            this.map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
        }
    }, {
        key: "addControl",
        value: function addControl(element) {
            this.map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(element);
        }
    }]);

    return MapLayer;
}();

//
//Map.prototype.watchPosition = function(successCallback, errorCallback) {
//    navigator.geolocation.watchPosition(successCallback, errorCallback, {timeout: 5000});
//}


exports.default = MapLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheWVyLmpzIl0sIm5hbWVzIjpbImluaXRHZW9sb2NhdGlvbiIsImQiLCJlIiwiZyIsImEiLCJiIiwiYyIsImNhbGwiLCJhcHBseSIsImJpbmQiLCJhcmd1bWVudHMiLCJrIiwiRXJyb3IiLCJsZW5ndGgiLCJmIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsInVuc2hpZnQiLCJuIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsImluZGV4T2YiLCJwIiwic3BsaXQiLCJleGVjU2NyaXB0IiwiaCIsInNoaWZ0IiwicSIsImNsaWNrYWJsZSIsImN1cnNvciIsImRyYWdnYWJsZSIsImZsYXQiLCJpY29uIiwidXJsIiwic2l6ZSIsImdvb2dsZSIsIm1hcHMiLCJTaXplIiwic2NhbGVkU2l6ZSIsIm9yaWdpbiIsIlBvaW50IiwiYW5jaG9yIiwib3B0aW1pemVkIiwicG9zaXRpb24iLCJMYXRMbmciLCJ0aXRsZSIsInpJbmRleCIsInJhZGl1cyIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiTWFya2VyIiwiQ2lyY2xlIiwiTVZDT2JqZWN0Iiwic2V0IiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwibWF4aW11bUFnZSIsImJpbmRUbyIsInIiLCJtYXAiLCJ0IiwiY29uc3RydWN0b3IiLCJzIiwibSIsImwiLCJ0ZXN0IiwiZ2V0IiwiaiIsImdldEJvdW5kcyIsImkiLCJvIiwidW5iaW5kIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJjbGVhcldhdGNoIiwic2V0TWFwIiwic2V0T3B0aW9ucyIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2V0TWFwIiwiYWNjdXJhY3kiLCJlcXVhbHMiLCJ3YXRjaFBvc2l0aW9uIiwiZXZlbnQiLCJ0cmlnZ2VyIiwid2luZG93IiwiTWFwTGF5ZXIiLCJtYXBUeXBlcyIsIm1hcFR5cGVJZHMiLCJNYXBUeXBlSWQiLCJIWUJSSUQiLCJST0FETUFQIiwibWFwT3B0aW9ucyIsImNlbnRlciIsInpvb20iLCJkaXNhYmxlRGVmYXVsdFVJIiwibWFwVHlwZUNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbE9wdGlvbnMiLCJzdHlsZSIsIk1hcFR5cGVDb250cm9sU3R5bGUiLCJEUk9QRE9XTl9NRU5VIiwiZWxlbWVudCIsIk1hcCIsImZvckVhY2giLCJ0aWxlU2l6ZSIsInB1c2giLCJpZCIsImN1cnJlbnRMb2NhdGlvbk1hcmtlciIsIkdlb2xvY2F0aW9uTWFya2VyIiwidHlwZSIsInNldFBvc2l0aW9uIiwic2V0Q2VudGVyIiwiY29udHJvbHMiLCJDb250cm9sUG9zaXRpb24iLCJCT1RUT01fUklHSFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFULEdBQTJCO0FBQ3ZCLEtBQUMsWUFBVTtBQUFDO0FBQWEsWUFBSUMsQ0FBSjtBQUFBLFlBQU1DLElBQUUsSUFBUixDQUFhLFNBQVNDLENBQVQsQ0FBV0MsQ0FBWCxFQUFhQyxDQUFiLEVBQWVDLENBQWYsRUFBaUI7QUFBQyxtQkFBT0YsRUFBRUcsSUFBRixDQUFPQyxLQUFQLENBQWFKLEVBQUVLLElBQWYsRUFBb0JDLFNBQXBCLENBQVA7QUFBc0Msa0JBQVNDLENBQVQsQ0FBV1AsQ0FBWCxFQUFhQyxDQUFiLEVBQWVDLENBQWYsRUFBaUI7QUFBQyxnQkFBRyxDQUFDRixDQUFKLEVBQU0sTUFBTVEsT0FBTixDQUFjLElBQUcsSUFBRUYsVUFBVUcsTUFBZixFQUFzQjtBQUFDLG9CQUFJQyxJQUFFQyxNQUFNQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQlYsSUFBdEIsQ0FBMkJHLFNBQTNCLEVBQXFDLENBQXJDLENBQU4sQ0FBOEMsT0FBTyxZQUFVO0FBQUMsd0JBQUlKLElBQUVTLE1BQU1DLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCVixJQUF0QixDQUEyQkcsU0FBM0IsQ0FBTixDQUE0Q0ssTUFBTUMsU0FBTixDQUFnQkUsT0FBaEIsQ0FBd0JWLEtBQXhCLENBQThCRixDQUE5QixF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QkUsU0FBakUsQ0FBbkI7QUFDSDs7O21DQUVXdUIsTyxFQUFTO0FBQ2pCLGlCQUFLM0MsR0FBTCxDQUFTc0QsUUFBVCxDQUFrQmhGLE9BQU9DLElBQVAsQ0FBWWdGLGVBQVosQ0FBNEJDLFlBQTlDLEVBQTREVCxJQUE1RCxDQUFpRUosT0FBakU7QUFDSDs7Ozs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7OztrQkE1RHFCZixRIiwiZmlsZSI6ImxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdEdlb2xvY2F0aW9uKCkge1xuICAgIChmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt2YXIgZCxlPXRoaXM7ZnVuY3Rpb24gZyhhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1mdW5jdGlvbiBrKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGY9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxmKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIG4oYSxiLGMpe249RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9nOms7cmV0dXJuIG4uYXBwbHkobnVsbCxhcmd1bWVudHMpfVxuICAgIGZ1bmN0aW9uIHAoYSxiKXt2YXIgYz1hLnNwbGl0KFwiLlwiKSxmPWU7Y1swXWluIGZ8fCFmLmV4ZWNTY3JpcHR8fGYuZXhlY1NjcmlwdChcInZhciBcIitjWzBdKTtmb3IodmFyIGg7Yy5sZW5ndGgmJihoPWMuc2hpZnQoKSk7KWMubGVuZ3RofHx2b2lkIDA9PT1iP2ZbaF0/Zj1mW2hdOmY9ZltoXT17fTpmW2hdPWJ9O2Z1bmN0aW9uIHEoYSxiLGMpe3ZhciBmPXtjbGlja2FibGU6ITEsY3Vyc29yOlwicG9pbnRlclwiLGRyYWdnYWJsZTohMSxmbGF0OiEwLGljb246e3VybDpcImh0dHBzOi8vY2hhZGtpbGxpbmdzd29ydGguZ2l0aHViLmlvL2dlb2xvY2F0aW9uLW1hcmtlci9pbWFnZXMvZ3BzbG9jLnBuZ1wiLHNpemU6bmV3IGdvb2dsZS5tYXBzLlNpemUoMzQsMzQpLHNjYWxlZFNpemU6bmV3IGdvb2dsZS5tYXBzLlNpemUoMTcsMTcpLG9yaWdpbjpuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwwKSxhbmNob3I6bmV3IGdvb2dsZS5tYXBzLlBvaW50KDgsOCl9LG9wdGltaXplZDohMSxwb3NpdGlvbjpuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDAsMCksdGl0bGU6XCJDdXJyZW50IGxvY2F0aW9uXCIsekluZGV4OjJ9O2ImJihmPXRoaXMuYyhmLGIpKTtiPXtjbGlja2FibGU6ITEscmFkaXVzOjAsc3Ryb2tlQ29sb3I6XCIxYmI2ZmZcIixzdHJva2VPcGFjaXR5Oi40LGZpbGxDb2xvcjpcIjYxYTBiZlwiLGZpbGxPcGFjaXR5Oi40LFxuICAgICAgICBzdHJva2VXZWlnaHQ6MSx6SW5kZXg6MX07YyYmKGI9dGhpcy5jKGIsYykpO3RoaXMuYj1uZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGYpO3RoaXMuYT1uZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKGIpO2dvb2dsZS5tYXBzLk1WQ09iamVjdC5wcm90b3R5cGUuc2V0LmNhbGwodGhpcyxcImFjY3VyYWN5XCIsbnVsbCk7Z29vZ2xlLm1hcHMuTVZDT2JqZWN0LnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLFwicG9zaXRpb25cIixudWxsKTtnb29nbGUubWFwcy5NVkNPYmplY3QucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsXCJtYXBcIixudWxsKTt0aGlzLnNldChcIm1pbmltdW1fYWNjdXJhY3lcIixudWxsKTt0aGlzLnNldChcInBvc2l0aW9uX29wdGlvbnNcIix7ZW5hYmxlSGlnaEFjY3VyYWN5OiEwLG1heGltdW1BZ2U6MUUzfSk7dGhpcy5hLmJpbmRUbyhcIm1hcFwiLHRoaXMuYik7YSYmdGhpcy5lKGEpfXZhciByPXttYXA6ITAscG9zaXRpb246ITAscmFkaXVzOiEwfSx0PS9eKD86cG9zaXRpb258YWNjdXJhY3kpJC9pOyhmdW5jdGlvbigpe3ZhciBhPWdvb2dsZS5tYXBzLk1WQ09iamVjdDtmdW5jdGlvbiBiKCl7fWIucHJvdG90eXBlPWEucHJvdG90eXBlO3EudD1hLnByb3RvdHlwZTtxLnByb3RvdHlwZT1uZXcgYjtxLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1xO3Eucz1mdW5jdGlvbihiLGYsaCl7Zm9yKHZhciBtPUFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMiksbD0yO2w8YXJndW1lbnRzLmxlbmd0aDtsKyspbVtsLTJdPWFyZ3VtZW50c1tsXTtyZXR1cm4gYS5wcm90b3R5cGVbZl0uYXBwbHkoYixtKX19KSgpO2Q9cS5wcm90b3R5cGU7ZC5zZXQ9ZnVuY3Rpb24oYSxiKXtpZih0LnRlc3QoYSkpdGhyb3dcIidcIithK1wiJyBpcyBhIHJlYWQtb25seSBwcm9wZXJ0eS5cIjtcIm1hcFwiPT09YT90aGlzLmUoYik6Z29vZ2xlLm1hcHMuTVZDT2JqZWN0LnByb3RvdHlwZS5zZXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtkLmI9bnVsbDtkLmE9bnVsbDtkLmg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJtYXBcIil9O1xuICAgIGQuaj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInBvc2l0aW9uX29wdGlvbnNcIil9O2QucD1mdW5jdGlvbihhKXt0aGlzLnNldChcInBvc2l0aW9uX29wdGlvbnNcIixhKX07ZC5kPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwicG9zaXRpb25cIil9O2Quaz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldChcInBvc2l0aW9uXCIpP3RoaXMuYS5nZXRCb3VuZHMoKTpudWxsfTtkLmk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXQoXCJhY2N1cmFjeVwiKX07ZC5mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0KFwibWluaW11bV9hY2N1cmFjeVwiKX07ZC5vPWZ1bmN0aW9uKGEpe3RoaXMuc2V0KFwibWluaW11bV9hY2N1cmFjeVwiLGEpfTtkLmc9LTE7XG4gICAgZC5lPWZ1bmN0aW9uKGEpe2dvb2dsZS5tYXBzLk1WQ09iamVjdC5wcm90b3R5cGUuc2V0LmNhbGwodGhpcyxcIm1hcFwiLGEpO2E/dGhpcy5yKCk6KHRoaXMuYi51bmJpbmQoXCJwb3NpdGlvblwiKSx0aGlzLmEudW5iaW5kKFwiY2VudGVyXCIpLHRoaXMuYS51bmJpbmQoXCJyYWRpdXNcIiksZ29vZ2xlLm1hcHMuTVZDT2JqZWN0LnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLFwiYWNjdXJhY3lcIixudWxsKSxnb29nbGUubWFwcy5NVkNPYmplY3QucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsXCJwb3NpdGlvblwiLG51bGwpLG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHRoaXMuZyksdGhpcy5nPS0xLHRoaXMuYi5zZXRNYXAoYSkpfTtkLm49ZnVuY3Rpb24oYSl7dGhpcy5iLnNldE9wdGlvbnModGhpcy5jKHt9LGEpKX07ZC5tPWZ1bmN0aW9uKGEpe3RoaXMuYS5zZXRPcHRpb25zKHRoaXMuYyh7fSxhKSl9O1xuICAgIGQucT1mdW5jdGlvbihhKXt2YXIgYj1uZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGEuY29vcmRzLmxhdGl0dWRlLGEuY29vcmRzLmxvbmdpdHVkZSksYz1udWxsPT10aGlzLmIuZ2V0TWFwKCk7aWYoYyl7aWYobnVsbCE9dGhpcy5mKCkmJmEuY29vcmRzLmFjY3VyYWN5PnRoaXMuZigpKXJldHVybjt0aGlzLmIuc2V0TWFwKHRoaXMuaCgpKTt0aGlzLmIuYmluZFRvKFwicG9zaXRpb25cIix0aGlzKTt0aGlzLmEuYmluZFRvKFwiY2VudGVyXCIsdGhpcyxcInBvc2l0aW9uXCIpO3RoaXMuYS5iaW5kVG8oXCJyYWRpdXNcIix0aGlzLFwiYWNjdXJhY3lcIil9dGhpcy5pKCkhPWEuY29vcmRzLmFjY3VyYWN5JiZnb29nbGUubWFwcy5NVkNPYmplY3QucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsXCJhY2N1cmFjeVwiLGEuY29vcmRzLmFjY3VyYWN5KTshYyYmbnVsbCE9dGhpcy5kKCkmJnRoaXMuZCgpLmVxdWFscyhiKXx8Z29vZ2xlLm1hcHMuTVZDT2JqZWN0LnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLFwicG9zaXRpb25cIixcbiAgICAgICAgYil9O2Qucj1mdW5jdGlvbigpe25hdmlnYXRvci5nZW9sb2NhdGlvbiYmKHRoaXMuZz1uYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihuKHRoaXMucSx0aGlzKSxuKHRoaXMubCx0aGlzKSx0aGlzLmooKSkpfTtkLmw9ZnVuY3Rpb24oYSl7Z29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLFwiZ2VvbG9jYXRpb25fZXJyb3JcIixhKX07ZC5jPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpITAhPT1yW2NdJiYoYVtjXT1iW2NdKTtyZXR1cm4gYX07cChcIkdlb2xvY2F0aW9uTWFya2VyXCIscSk7cChcIkdlb2xvY2F0aW9uTWFya2VyLnByb3RvdHlwZS5nZXRBY2N1cmFjeVwiLHEucHJvdG90eXBlLmkpO3AoXCJHZW9sb2NhdGlvbk1hcmtlci5wcm90b3R5cGUuZ2V0Qm91bmRzXCIscS5wcm90b3R5cGUuayk7cChcIkdlb2xvY2F0aW9uTWFya2VyLnByb3RvdHlwZS5nZXRNYXBcIixxLnByb3RvdHlwZS5oKTtcbiAgICBwKFwiR2VvbG9jYXRpb25NYXJrZXIucHJvdG90eXBlLmdldE1pbmltdW1BY2N1cmFjeVwiLHEucHJvdG90eXBlLmYpO3AoXCJHZW9sb2NhdGlvbk1hcmtlci5wcm90b3R5cGUuZ2V0UG9zaXRpb25cIixxLnByb3RvdHlwZS5kKTtwKFwiR2VvbG9jYXRpb25NYXJrZXIucHJvdG90eXBlLmdldFBvc2l0aW9uT3B0aW9uc1wiLHEucHJvdG90eXBlLmopO3AoXCJHZW9sb2NhdGlvbk1hcmtlci5wcm90b3R5cGUuc2V0Q2lyY2xlT3B0aW9uc1wiLHEucHJvdG90eXBlLm0pO3AoXCJHZW9sb2NhdGlvbk1hcmtlci5wcm90b3R5cGUuc2V0TWFwXCIscS5wcm90b3R5cGUuZSk7cChcIkdlb2xvY2F0aW9uTWFya2VyLnByb3RvdHlwZS5zZXRNYXJrZXJPcHRpb25zXCIscS5wcm90b3R5cGUubik7cChcIkdlb2xvY2F0aW9uTWFya2VyLnByb3RvdHlwZS5zZXRNaW5pbXVtQWNjdXJhY3lcIixxLnByb3RvdHlwZS5vKTtwKFwiR2VvbG9jYXRpb25NYXJrZXIucHJvdG90eXBlLnNldFBvc2l0aW9uT3B0aW9uc1wiLHEucHJvdG90eXBlLnApO1xuICAgIH0pLmNhbGwod2luZG93KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBMYXllciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgICAgIHRoaXMubWFwVHlwZXMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXBUeXBlSWRzID0gW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5IWUJSSUQsIGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXTtcbiAgICAgICAgdGhpcy5tYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUzLjg5NjQ3NSwgMjcuNTQ3NjE4KSxcbiAgICAgICAgICAgIHpvb206IDE3LFxuICAgICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxuICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLk1hcFR5cGVDb250cm9sU3R5bGUuRFJPUERPV05fTUVOVSxcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFRfVE9QLFxuICAgICAgICAgICAgICAgIG1hcFR5cGVJZHM6IHRoaXMubWFwVHlwZUlkc1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlciAoZWxlbWVudCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWxlbWVudCwgdGhpcy5tYXBPcHRpb25zKTtcbiAgICAgICAgdGhpcy5tYXBUeXBlcy5mb3JFYWNoKG1hcCA9PiB7XG4gICAgICAgICAgICBtYXAudGlsZVNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShtYXAudGlsZVNpemUgfHwgMjU2LCBtYXAudGlsZVNpemUgfHwgMjU2KTtcbiAgICAgICAgICAgIHRoaXMubWFwVHlwZUlkcy5wdXNoKG1hcC5pZCk7XG4gICAgICAgICAgICB0aGlzLm1hcC5tYXBUeXBlcy5zZXQobWFwLmlkLCBtYXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50TG9jYXRpb25NYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzMiwgMzIpLFxuICAgICAgICAgICAgICAgIHVybDogJ2ltZy9waW5fcG9zaXRpb24ucG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwgMCksXG4gICAgICAgICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgzMiwgMzIpLFxuICAgICAgICAgICAgbWFwOiB0aGlzLm1hcFxuICAgICAgICB9KTtcblxuICAgICAgICBpbml0R2VvbG9jYXRpb24oKTtcbiAgICAgICAgbmV3IEdlb2xvY2F0aW9uTWFya2VyKHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICBhZGRUeXBlICh0eXBlKSB7XG4gICAgICAgIHRoaXMubWFwVHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG5cbiAgICBzZXRVc2VyUG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExvY2F0aW9uTWFya2VyLnNldFBvc2l0aW9uKG5ldyBnb29nbGUubWFwcy5MYXRMbmcocG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlKSk7XG4gICAgfVxuXG4gICAgc2V0Q2VudGVyIChwb3NpdGlvbikge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpKTtcbiAgICB9XG5cbiAgICBhZGRDb250cm9sIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMubWFwLmNvbnRyb2xzW2dvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5CT1RUT01fUklHSFRdLnB1c2goZWxlbWVudCk7XG4gICAgfVxufVxuXG4vL1xuLy9NYXAucHJvdG90eXBlLndhdGNoUG9zaXRpb24gPSBmdW5jdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbi8vICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaywge3RpbWVvdXQ6IDUwMDB9KTtcbi8vfVxuIl19
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verstovka05MapType = function (_BaseMap) {
    _inherits(Verstovka05MapType, _BaseMap);

    function Verstovka05MapType() {
        _classCallCheck(this, Verstovka05MapType);

        var _this = _possibleConstructorReturn(this, (Verstovka05MapType.__proto__ || Object.getPrototypeOf(Verstovka05MapType)).call(this));

        _this.id = 'verstovka05';
        _this.name = '1/2-версты';
        _this.alt = 'Полуверстовая карта, 1-я половина XX в.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 7;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(Verstovka05MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/polv/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return Verstovka05MapType;
}(_base2.default);

exports.default = Verstovka05MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjA1dmVyc3RvdmthLmpzIl0sIm5hbWVzIjpbIlZlcnN0b3ZrYTA1TWFwVHlwZSIsImlkIiwibmFtZSIsImFsdCIsInRpbGVTaXplIiwiaXNQbmciLCJtaW5ab29tIiwibWF4Wm9vbSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7OztBQUNqQixrQ0FBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxhQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcseUNBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyxtREFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsa0IiLCJmaWxlIjoiMDV2ZXJzdG92a2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZU1hcCBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzdG92a2EwNU1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICd2ZXJzdG92a2EwNSc7XG4gICAgICAgIHRoaXMubmFtZSA9ICcxLzIt0LLQtdGA0YHRgtGLJztcbiAgICAgICAgdGhpcy5hbHQgPSAn0J/QvtC70YPQstC10YDRgdGC0L7QstCw0Y8g0LrQsNGA0YLQsCwgMS3RjyDQv9C+0LvQvtCy0LjQvdCwIFhYINCyLic7XG4gICAgICAgIHRoaXMudGlsZVNpemUgPSAyNTY7XG4gICAgICAgIHRoaXMuaXNQbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5taW5ab29tID0gNztcbiAgICAgICAgdGhpcy5tYXhab29tID0gMTQ7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDEuMDtcbiAgICB9XG5cbiAgICBnZXRSZW1vdGVUaWxlVXJsICgpIHtcbiAgICAgICAgcmV0dXJuICdodHRwOi8vb3JkYS5vZi5ieS8udGlsZXMvcG9sdi9aPHpvb20+Lzx5Pi88eD4uanBnJztcbiAgICB9XG59XG4iXX0=
},{"./base":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verstovka10MapType = function (_BaseMap) {
    _inherits(Verstovka10MapType, _BaseMap);

    function Verstovka10MapType() {
        _classCallCheck(this, Verstovka10MapType);

        var _this = _possibleConstructorReturn(this, (Verstovka10MapType.__proto__ || Object.getPrototypeOf(Verstovka10MapType)).call(this));

        _this.id = 'verstovka10';
        _this.name = '10-верстка';
        _this.alt = '10-верстовая карта (Стрельбицкого), 2-я половина XIX в.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 6;
        _this.maxZoom = 12;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(Verstovka10MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            //return 'http://orda.of.by/.tiles/10v-worst/Z<zoom>/<y>/<x>.jpg';
            return 'http://orda.of.by/.tiles/10v/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return Verstovka10MapType;
}(_base2.default);

exports.default = Verstovka10MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjEwdmVyc3RvdmthLmpzIl0sIm5hbWVzIjpbIlZlcnN0b3ZrYTEwTWFwVHlwZSIsImlkIiwibmFtZSIsImFsdCIsInRpbGVTaXplIiwiaXNQbmciLCJtaW5ab29tIiwibWF4Wm9vbSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsa0I7OztBQUNqQixrQ0FBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxhQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcseURBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQjtBQUNBLG1CQUFPLGtEQUFQO0FBQ0g7Ozs7OztrQkFqQmdCUixrQiIsImZpbGUiOiIxMHZlcnN0b3ZrYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlTWFwIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnN0b3ZrYTEwTWFwVHlwZSBleHRlbmRzIEJhc2VNYXAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gJ3ZlcnN0b3ZrYTEwJztcbiAgICAgICAgdGhpcy5uYW1lID0gJzEwLdCy0LXRgNGB0YLQutCwJztcbiAgICAgICAgdGhpcy5hbHQgPSAnMTAt0LLQtdGA0YHRgtC+0LLQsNGPINC60LDRgNGC0LAgKNCh0YLRgNC10LvRjNCx0LjRhtC60L7Qs9C+KSwgMi3RjyDQv9C+0LvQvtCy0LjQvdCwIFhJWCDQsi4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDY7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDEyO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gICAgfVxuXG4gICAgZ2V0UmVtb3RlVGlsZVVybCAoKSB7XG4gICAgICAgIC8vcmV0dXJuICdodHRwOi8vb3JkYS5vZi5ieS8udGlsZXMvMTB2LXdvcnN0L1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9vcmRhLm9mLmJ5Ly50aWxlcy8xMHYvWjx6b29tPi88eT4vPHg+LmpwZyc7XG4gICAgfVxufVxuIl19
},{"./base":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WWIIMapType = function (_BaseMap) {
    _inherits(WWIIMapType, _BaseMap);

    function WWIIMapType() {
        _classCallCheck(this, WWIIMapType);

        var _this = _possibleConstructorReturn(this, (WWIIMapType.__proto__ || Object.getPrototypeOf(WWIIMapType)).call(this));

        _this.id = 'wwii';
        _this.name = '1941-44 гг.';
        _this.alt = 'Аэрофото-съемка ВОв';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 1;
        _this.maxZoom = 18;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(WWIIMapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            // 2012-10-04 - http://17200.selcdn.ru/AerialWWII/Z14/5267/9447.jpg
            // 2012-05-00 - http://46.182.27.171/AerialWWII/Z18/84308/151142.jpg
            //return `http://46.182.27.171/AerialWWII/Z${zoom}/${normalizedCoord.y}/${normalizedCoord.x}.jpg`;
            return 'http://17200.selcdn.ru/AerialWWII/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return WWIIMapType;
}(_base2.default);

exports.default = WWIIMapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjE5NDEuanMiXSwibmFtZXMiOlsiV1dJSU1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQUNqQiwyQkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxNQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLGFBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcscUJBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxtQkFBTyx1REFBUDtBQUNIOzs7Ozs7a0JBbkJnQlIsVyIsImZpbGUiOiIxOTQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV1dJSU1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICd3d2lpJztcbiAgICAgICAgdGhpcy5uYW1lID0gJzE5NDEtNDQg0LPQsy4nO1xuICAgICAgICB0aGlzLmFsdCA9ICfQkNGN0YDQvtGE0L7RgtC+LdGB0YrQtdC80LrQsCDQktCe0LInO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDE7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDE4O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gICAgfVxuXG4gICAgZ2V0UmVtb3RlVGlsZVVybCAoKSB7XG4gICAgICAgIC8vIDIwMTItMTAtMDQgLSBodHRwOi8vMTcyMDAuc2VsY2RuLnJ1L0FlcmlhbFdXSUkvWjE0LzUyNjcvOTQ0Ny5qcGdcbiAgICAgICAgLy8gMjAxMi0wNS0wMCAtIGh0dHA6Ly80Ni4xODIuMjcuMTcxL0FlcmlhbFdXSUkvWjE4Lzg0MzA4LzE1MTE0Mi5qcGdcbiAgICAgICAgLy9yZXR1cm4gYGh0dHA6Ly80Ni4xODIuMjcuMTcxL0FlcmlhbFdXSUkvWiR7em9vbX0vJHtub3JtYWxpemVkQ29vcmQueX0vJHtub3JtYWxpemVkQ29vcmQueH0uanBnYDtcbiAgICAgICAgcmV0dXJuICdodHRwOi8vMTcyMDAuc2VsY2RuLnJ1L0FlcmlhbFdXSUkvWjx6b29tPi88eT4vPHg+LmpwZyc7XG4gICAgfVxufVxuXG4iXX0=
},{"./base":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verstovka1MapType = function (_BaseMap) {
    _inherits(Verstovka1MapType, _BaseMap);

    function Verstovka1MapType() {
        _classCallCheck(this, Verstovka1MapType);

        var _this = _possibleConstructorReturn(this, (Verstovka1MapType.__proto__ || Object.getPrototypeOf(Verstovka1MapType)).call(this));

        _this.id = 'verstovka1';
        _this.name = '1-верстка';
        _this.alt = '1-верстовая карта, 1-я половина XX в.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 6;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(Verstovka1MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/1v/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return Verstovka1MapType;
}(_base2.default);

exports.default = Verstovka1MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjF2ZXJzdG92a2EuanMiXSwibmFtZXMiOlsiVmVyc3RvdmthMU1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFDakIsaUNBQWU7QUFBQTs7QUFBQTs7QUFHWCxjQUFLQyxFQUFMLEdBQVUsWUFBVjtBQUNBLGNBQUtDLElBQUwsR0FBWSxXQUFaO0FBQ0EsY0FBS0MsR0FBTCxHQUFXLHVDQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxHQUFmO0FBVlc7QUFXZDs7OzsyQ0FFbUI7QUFDaEIsbUJBQU8saURBQVA7QUFDSDs7Ozs7O2tCQWhCZ0JSLGlCIiwiZmlsZSI6IjF2ZXJzdG92a2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZU1hcCBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzdG92a2ExTWFwVHlwZSBleHRlbmRzIEJhc2VNYXAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gJ3ZlcnN0b3ZrYTEnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnMS3QstC10YDRgdGC0LrQsCc7XG4gICAgICAgIHRoaXMuYWx0ID0gJzEt0LLQtdGA0YHRgtC+0LLQsNGPINC60LDRgNGC0LAsIDEt0Y8g0L/QvtC70L7QstC40L3QsCBYWCDQsi4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDY7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDE0O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gICAgfVxuXG4gICAgZ2V0UmVtb3RlVGlsZVVybCAoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cDovL29yZGEub2YuYnkvLnRpbGVzLzF2L1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgIH1cbn0iXX0=
},{"./base":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verstovka2MapType = function (_BaseMap) {
    _inherits(Verstovka2MapType, _BaseMap);

    function Verstovka2MapType() {
        _classCallCheck(this, Verstovka2MapType);

        var _this = _possibleConstructorReturn(this, (Verstovka2MapType.__proto__ || Object.getPrototypeOf(Verstovka2MapType)).call(this));

        _this.id = 'verstovka2';
        _this.name = '2-верстка';
        _this.alt = '2-верстовая карта, 1-я половина XX в.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 6;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(Verstovka2MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/2v/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return Verstovka2MapType;
}(_base2.default);

exports.default = Verstovka2MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjJ2ZXJzdG92a2EuanMiXSwibmFtZXMiOlsiVmVyc3RvdmthMk1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFDakIsaUNBQWU7QUFBQTs7QUFBQTs7QUFHWCxjQUFLQyxFQUFMLEdBQVUsWUFBVjtBQUNBLGNBQUtDLElBQUwsR0FBWSxXQUFaO0FBQ0EsY0FBS0MsR0FBTCxHQUFXLHVDQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxHQUFmO0FBVlc7QUFXZDs7OzsyQ0FFbUI7QUFDaEIsbUJBQU8saURBQVA7QUFDSDs7Ozs7O2tCQWhCZ0JSLGlCIiwiZmlsZSI6IjJ2ZXJzdG92a2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZU1hcCBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzdG92a2EyTWFwVHlwZSBleHRlbmRzIEJhc2VNYXAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gJ3ZlcnN0b3ZrYTInO1xuICAgICAgICB0aGlzLm5hbWUgPSAnMi3QstC10YDRgdGC0LrQsCc7XG4gICAgICAgIHRoaXMuYWx0ID0gJzIt0LLQtdGA0YHRgtC+0LLQsNGPINC60LDRgNGC0LAsIDEt0Y8g0L/QvtC70L7QstC40L3QsCBYWCDQsi4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDY7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDE0O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gICAgfVxuXG4gICAgZ2V0UmVtb3RlVGlsZVVybCAoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cDovL29yZGEub2YuYnkvLnRpbGVzLzJ2L1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgIH1cbn0iXX0=
},{"./base":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verstovka3MapType = function (_BaseMap) {
    _inherits(Verstovka3MapType, _BaseMap);

    function Verstovka3MapType() {
        _classCallCheck(this, Verstovka3MapType);

        var _this = _possibleConstructorReturn(this, (Verstovka3MapType.__proto__ || Object.getPrototypeOf(Verstovka3MapType)).call(this));

        _this.id = 'verstovka3';
        _this.name = '3-верстка+';
        _this.alt = '3-верстовая карта (условно Шуберта), 2-я половина XIX в. (скан улучшенного качества, но пока загружено мало листов)';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 10;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(Verstovka3MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/3vq/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return Verstovka3MapType;
}(_base2.default);

exports.default = Verstovka3MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjN2ZXJzdG92a2EuanMiXSwibmFtZXMiOlsiVmVyc3RvdmthM01hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFDakIsaUNBQWU7QUFBQTs7QUFBQTs7QUFHWCxjQUFLQyxFQUFMLEdBQVUsWUFBVjtBQUNBLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS0MsR0FBTCxHQUFXLHFIQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxHQUFmO0FBVlc7QUFXZDs7OzsyQ0FFbUI7QUFDaEIsbUJBQU8sa0RBQVA7QUFDSDs7Ozs7O2tCQWhCZ0JSLGlCIiwiZmlsZSI6IjN2ZXJzdG92a2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZU1hcCBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzdG92a2EzTWFwVHlwZSBleHRlbmRzIEJhc2VNYXAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gJ3ZlcnN0b3ZrYTMnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnMy3QstC10YDRgdGC0LrQsCsnO1xuICAgICAgICB0aGlzLmFsdCA9ICczLdCy0LXRgNGB0YLQvtCy0LDRjyDQutCw0YDRgtCwICjRg9GB0LvQvtCy0L3QviDQqNGD0LHQtdGA0YLQsCksIDIt0Y8g0L/QvtC70L7QstC40L3QsCBYSVgg0LIuICjRgdC60LDQvSDRg9C70YPRh9GI0LXQvdC90L7Qs9C+INC60LDRh9C10YHRgtCy0LAsINC90L4g0L/QvtC60LAg0LfQsNCz0YDRg9C20LXQvdC+INC80LDQu9C+INC70LjRgdGC0L7QsiknO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDEwO1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxNDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9vcmRhLm9mLmJ5Ly50aWxlcy8zdnEvWjx6b29tPi88eT4vPHg+LmpwZyc7XG4gICAgfVxufVxuIl19
},{"./base":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AustriaMapType = function (_BaseMap) {
    _inherits(AustriaMapType, _BaseMap);

    function AustriaMapType() {
        _classCallCheck(this, AustriaMapType);

        var _this = _possibleConstructorReturn(this, (AustriaMapType.__proto__ || Object.getPrototypeOf(AustriaMapType)).call(this));

        _this.id = 'austria';
        _this.name = 'Австрия';
        _this.alt = '2-километровая австро-венгерская карта, начало XX в.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 6;
        _this.maxZoom = 12;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(AustriaMapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/austr/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return AustriaMapType;
}(_base2.default);

exports.default = AustriaMapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1c3RyaWEuanMiXSwibmFtZXMiOlsiQXVzdHJpYU1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGM7OztBQUNqQiw4QkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxTQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFNBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcsc0RBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyxvREFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsYyIsImZpbGUiOiJhdXN0cmlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVzdHJpYU1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdhdXN0cmlhJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ9CQ0LLRgdGC0YDQuNGPJztcbiAgICAgICAgdGhpcy5hbHQgPSAnMi3QutC40LvQvtC80LXRgtGA0L7QstCw0Y8g0LDQstGB0YLRgNC+LdCy0LXQvdCz0LXRgNGB0LrQsNGPINC60LDRgNGC0LAsINC90LDRh9Cw0LvQviBYWCDQsi4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDY7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDEyO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gICAgfVxuXG4gICAgZ2V0UmVtb3RlVGlsZVVybCAoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cDovL29yZGEub2YuYnkvLnRpbGVzL2F1c3RyL1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgIH1cbn1cbiJdfQ==
},{"./base":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./../util');

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseMap = function () {
    function BaseMap() {
        _classCallCheck(this, BaseMap);

        this.id = 0;
        this.name = '';
        this.alt = '';
        this.tileSize = 256;
        this.isPng = false;
        this.minZoom = 1;
        this.maxZoom = 14;
        this.opacity = 1.00;
    }

    _createClass(BaseMap, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl(coord, zoom) {
            throw new Error('Map Tile class require getRemoteTileUrl() method implementation');
        }
    }, {
        key: 'getCachedTileUrl',
        value: function getCachedTileUrl(coord, zoom) {
            throw new Error('Map Tile class require getCachedTileUrl() method implementation');
        }
    }, {
        key: 'setCachedTileUrl',
        value: function setCachedTileUrl(coord, zoom, url) {
            //TODO: save url
        }
    }, {
        key: 'getTileUrl',
        value: function getTileUrl(coord, zoom) {
            //TODO: check cache
            var normalizedCoord = util.normalizeCoordinates(coord, zoom);

            if (normalizedCoord) {
                return this.getRemoteTileUrl(normalizedCoord, zoom).replace(/<\w+>/g, function (match) {
                    switch (match) {
                        case '<zoom>':
                            return zoom;
                        case '<x>':
                            return normalizedCoord.x;
                        case '<y>':
                            return normalizedCoord.y;
                        default:
                            return '';
                    }
                });
            } else {
                return null;
            }
        }
    }, {
        key: 'getTile',
        value: function getTile(coord, zoom, ownerDocument) {
            var src = this.getTileUrl(coord, zoom);
            var div = ownerDocument.createElement('div');

            div.style.width = this.tileSize.width + 'px';
            div.style.height = this.tileSize.height + 'px';
            div.innerHTML = '<img src=' + src + ' width="' + this.tileSize.width + '" height="' + this.tileSize.height + '" />'; // onerror="src=''"

            return div;
        }
    }]);

    return BaseMap;
}();

exports.default = BaseMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsidXRpbCIsIkJhc2VNYXAiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5IiwiY29vcmQiLCJ6b29tIiwiRXJyb3IiLCJ1cmwiLCJub3JtYWxpemVkQ29vcmQiLCJub3JtYWxpemVDb29yZGluYXRlcyIsImdldFJlbW90ZVRpbGVVcmwiLCJyZXBsYWNlIiwibWF0Y2giLCJ4IiwieSIsIm93bmVyRG9jdW1lbnQiLCJzcmMiLCJnZXRUaWxlVXJsIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBQVlBLEk7Ozs7OztJQUVTQyxPO0FBQ2pCLHVCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxhQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0g7Ozs7eUNBRWlCQyxLLEVBQU9DLEksRUFBTTtBQUMzQixrQkFBTSxJQUFJQyxLQUFKLENBQVUsaUVBQVYsQ0FBTjtBQUNIOzs7eUNBRWlCRixLLEVBQU9DLEksRUFBTTtBQUMzQixrQkFBTSxJQUFJQyxLQUFKLENBQVUsaUVBQVYsQ0FBTjtBQUNIOzs7eUNBRWlCRixLLEVBQU9DLEksRUFBTUUsRyxFQUFLO0FBQ2hDO0FBQ0g7OzttQ0FFV0gsSyxFQUFPQyxJLEVBQU07QUFDckI7QUFDQSxnQkFBSUcsa0JBQWtCZCxLQUFLZSxvQkFBTCxDQUEwQkwsS0FBMUIsRUFBaUNDLElBQWpDLENBQXRCOztBQUVBLGdCQUFJRyxlQUFKLEVBQXFCO0FBQ2pCLHVCQUFPLEtBQUtFLGdCQUFMLENBQXNCRixlQUF0QixFQUF1Q0gsSUFBdkMsRUFBNkNNLE9BQTdDLENBQXFELFFBQXJELEVBQStELFVBQVVDLEtBQVYsRUFBaUI7QUFDbkYsNEJBQVFBLEtBQVI7QUFDSSw2QkFBSyxRQUFMO0FBQ0ksbUNBQU9QLElBQVA7QUFDSiw2QkFBSyxLQUFMO0FBQ0ksbUNBQU9HLGdCQUFnQkssQ0FBdkI7QUFDSiw2QkFBSyxLQUFMO0FBQ0ksbUNBQU9MLGdCQUFnQk0sQ0FBdkI7QUFDSjtBQUNJLG1DQUFPLEVBQVA7QUFSUjtBQVVILGlCQVhNLENBQVA7QUFZSCxhQWJELE1BYU87QUFDSCx1QkFBTyxJQUFQO0FBQ0g7QUFDSjs7O2dDQUVRVixLLEVBQU9DLEksRUFBTVUsYSxFQUFlO0FBQ2pDLGdCQUFJQyxNQUFNLEtBQUtDLFVBQUwsQ0FBZ0JiLEtBQWhCLEVBQXVCQyxJQUF2QixDQUFWO0FBQ0EsZ0JBQUlhLE1BQU1ILGNBQWNJLGFBQWQsQ0FBNEIsS0FBNUIsQ0FBVjs7QUFFQUQsZ0JBQUlFLEtBQUosQ0FBVUMsS0FBVixHQUFxQixLQUFLdEIsUUFBTCxDQUFjc0IsS0FBbkM7QUFDQUgsZ0JBQUlFLEtBQUosQ0FBVUUsTUFBVixHQUFzQixLQUFLdkIsUUFBTCxDQUFjdUIsTUFBcEM7QUFDQUosZ0JBQUlLLFNBQUosaUJBQTRCUCxHQUE1QixnQkFBMEMsS0FBS2pCLFFBQUwsQ0FBY3NCLEtBQXhELGtCQUEwRSxLQUFLdEIsUUFBTCxDQUFjdUIsTUFBeEYsVUFOaUMsQ0FNcUU7O0FBRXRHLG1CQUFPSixHQUFQO0FBQ0g7Ozs7OztrQkF2RGdCdkIsTyIsImZpbGUiOiJiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLy4uL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5hbHQgPSAnJztcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDI1NjtcbiAgICAgICAgdGhpcy5pc1BuZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pblpvb20gPSAxO1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxNDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wMDtcbiAgICB9XG5cbiAgICBnZXRSZW1vdGVUaWxlVXJsIChjb29yZCwgem9vbSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcCBUaWxlIGNsYXNzIHJlcXVpcmUgZ2V0UmVtb3RlVGlsZVVybCgpIG1ldGhvZCBpbXBsZW1lbnRhdGlvbicpO1xuICAgIH1cblxuICAgIGdldENhY2hlZFRpbGVVcmwgKGNvb3JkLCB6b29tKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWFwIFRpbGUgY2xhc3MgcmVxdWlyZSBnZXRDYWNoZWRUaWxlVXJsKCkgbWV0aG9kIGltcGxlbWVudGF0aW9uJyk7XG4gICAgfVxuXG4gICAgc2V0Q2FjaGVkVGlsZVVybCAoY29vcmQsIHpvb20sIHVybCkge1xuICAgICAgICAvL1RPRE86IHNhdmUgdXJsXG4gICAgfVxuXG4gICAgZ2V0VGlsZVVybCAoY29vcmQsIHpvb20pIHtcbiAgICAgICAgLy9UT0RPOiBjaGVjayBjYWNoZVxuICAgICAgICBsZXQgbm9ybWFsaXplZENvb3JkID0gdXRpbC5ub3JtYWxpemVDb29yZGluYXRlcyhjb29yZCwgem9vbSk7XG5cbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRDb29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVtb3RlVGlsZVVybChub3JtYWxpemVkQ29vcmQsIHpvb20pLnJlcGxhY2UoLzxcXHcrPi9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzx6b29tPic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gem9vbTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPHg+JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkQ29vcmQueDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnPHk+JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemVkQ29vcmQueTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGlsZSAoY29vcmQsIHpvb20sIG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0VGlsZVVybChjb29yZCwgem9vbSk7XG4gICAgICAgIGxldCBkaXYgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMudGlsZVNpemUud2lkdGh9cHhgO1xuICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy50aWxlU2l6ZS5oZWlnaHR9cHhgO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7c3JjfSB3aWR0aD1cIiR7dGhpcy50aWxlU2l6ZS53aWR0aH1cIiBoZWlnaHQ9XCIke3RoaXMudGlsZVNpemUuaGVpZ2h0fVwiIC8+YDsgLy8gb25lcnJvcj1cInNyYz0nJ1wiXG5cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG59Il19
},{"./../util":20}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GSMapType = function (_BaseMap) {
    _inherits(GSMapType, _BaseMap);

    function GSMapType() {
        _classCallCheck(this, GSMapType);

        var _this = _possibleConstructorReturn(this, (GSMapType.__proto__ || Object.getPrototypeOf(GSMapType)).call(this));

        _this.id = 'gs';
        _this.name = 'Генштаб';
        _this.alt = '1-километровая карта Генштаба СССР, 1950-1980-е гг.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 8;
        _this.maxZoom = 14;
        _this.opacity = 1.00;
        return _this;
    }

    _createClass(GSMapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl(coord, zoom) {
            var oob = false;
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
    }]);

    return GSMapType;
}(_base2.default);

exports.default = GSMapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdzLmpzIl0sIm5hbWVzIjpbIkdTTWFwVHlwZSIsImlkIiwibmFtZSIsImFsdCIsInRpbGVTaXplIiwiaXNQbmciLCJtaW5ab29tIiwibWF4Wm9vbSIsIm9wYWNpdHkiLCJjb29yZCIsInpvb20iLCJvb2IiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7QUFDakIseUJBQWU7QUFBQTs7QUFBQTs7QUFHWCxjQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNBLGNBQUtDLElBQUwsR0FBWSxTQUFaO0FBQ0EsY0FBS0MsR0FBTCxHQUFXLHFEQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBVlc7QUFXZDs7Ozt5Q0FFaUJDLEssRUFBT0MsSSxFQUFNO0FBQzNCLGdCQUFJQyxNQUFNLEtBQVY7QUFDQSxnQkFBSUQsUUFBUSxFQUFaLEVBQWdCO0FBQ1osb0JBQUlBLFFBQVEsRUFBWixFQUFnQjtBQUNaQywwQkFBTSxJQUFOO0FBQ0gsaUJBRkQsTUFFTyxJQUFJRCxRQUFRLEVBQVosRUFBZ0I7QUFDbkIsd0JBQUlELE1BQU1HLENBQU4sR0FBVSxJQUFWLElBQWtCSCxNQUFNSSxDQUFOLEdBQVUsSUFBaEMsRUFBc0NGLE1BQU0sSUFBTjtBQUN6QyxpQkFGTSxNQUVBLElBQUlELFFBQVEsRUFBWixFQUFnQjtBQUNuQix3QkFBSUQsTUFBTUcsQ0FBTixHQUFVLElBQVYsSUFBa0JILE1BQU1JLENBQU4sR0FBVSxJQUFoQyxFQUFzQ0YsTUFBTSxJQUFOO0FBQ3pDO0FBQ0o7O0FBRUQsZ0JBQUlBLEdBQUosRUFBUztBQUNMLHVCQUFPLGdEQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8sbUVBQVA7QUFDSDtBQUNKOzs7Ozs7a0JBL0JnQlgsUyIsImZpbGUiOiJncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlTWFwIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdTTWFwVHlwZSBleHRlbmRzIEJhc2VNYXAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gJ2dzJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ9CT0LXQvdGI0YLQsNCxJztcbiAgICAgICAgdGhpcy5hbHQgPSAnMS3QutC40LvQvtC80LXRgtGA0L7QstCw0Y8g0LrQsNGA0YLQsCDQk9C10L3RiNGC0LDQsdCwINCh0KHQodCgLCAxOTUwLTE5ODAt0LUg0LPQsy4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDg7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDE0O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjAwO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKGNvb3JkLCB6b29tKSB7XG4gICAgICAgIGxldCBvb2IgPSBmYWxzZTtcbiAgICAgICAgaWYgKHpvb20gPj0gMTIpIHtcbiAgICAgICAgICAgIGlmICh6b29tID49IDE0KSB7XG4gICAgICAgICAgICAgICAgb29iID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoem9vbSA9PSAxMykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZC54IDwgNDc0NCAmJiBjb29yZC55IDwgMjY1NSkgb29iID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoem9vbSA9PSAxMikge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZC54IDwgMjM3MiAmJiBjb29yZC55IDwgMTMyNykgb29iID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvb2IpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cDovL29yZGEub2YuYnkvLnRpbGVzL2UvWjx6b29tPi88eT4vPHg+LmpwZyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHA6Ly92Yi1tYXBzLmdvb2dsZWNvZGUuY29tL3N2bi90cnVuay90aWxlcy9aPHpvb20+Lzx5Pi88eD4uanBnJztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
},{"./base":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GSVMapType = function (_BaseMap) {
    _inherits(GSVMapType, _BaseMap);

    function GSVMapType() {
        _classCallCheck(this, GSVMapType);

        var _this = _possibleConstructorReturn(this, (GSVMapType.__proto__ || Object.getPrototypeOf(GSVMapType)).call(this));

        _this.id = 'gsv';
        _this.name = 'Генш(вект)';
        _this.alt = '1-километровая карта Генштаба СССР (векторная), 2-я половина XX в.';
        _this.tileSize = 256;
        _this.isPng = true;
        _this.minZoom = 6;
        _this.maxZoom = 13;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(GSVMapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://globus.tut.by/.tiles/ev/Z<zoom>/<y>/<x>.png';
        }
    }]);

    return GSVMapType;
}(_base2.default);

exports.default = GSVMapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdzdi5qcyJdLCJuYW1lcyI6WyJHU1ZNYXBUeXBlIiwiaWQiLCJuYW1lIiwiYWx0IiwidGlsZVNpemUiLCJpc1BuZyIsIm1pblpvb20iLCJtYXhab29tIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7QUFDakIsMEJBQWU7QUFBQTs7QUFBQTs7QUFHWCxjQUFLQyxFQUFMLEdBQVUsS0FBVjtBQUNBLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS0MsR0FBTCxHQUFXLG9FQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxHQUFmO0FBVlc7QUFXZDs7OzsyQ0FFbUI7QUFDaEIsbUJBQU8sb0RBQVA7QUFDSDs7Ozs7O2tCQWhCZ0JSLFUiLCJmaWxlIjoiZ3N2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1NWTWFwVHlwZSBleHRlbmRzIEJhc2VNYXAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmlkID0gJ2dzdic7XG4gICAgICAgIHRoaXMubmFtZSA9ICfQk9C10L3RiCjQstC10LrRgiknO1xuICAgICAgICB0aGlzLmFsdCA9ICcxLdC60LjQu9C+0LzQtdGC0YDQvtCy0LDRjyDQutCw0YDRgtCwINCT0LXQvdGI0YLQsNCx0LAg0KHQodCh0KAgKNCy0LXQutGC0L7RgNC90LDRjyksIDIt0Y8g0L/QvtC70L7QstC40L3QsCBYWCDQsi4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5taW5ab29tID0gNjtcbiAgICAgICAgdGhpcy5tYXhab29tID0gMTM7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDEuMDtcbiAgICB9XG5cbiAgICBnZXRSZW1vdGVUaWxlVXJsICgpIHtcbiAgICAgICAgcmV0dXJuICdodHRwOi8vZ2xvYnVzLnR1dC5ieS8udGlsZXMvZXYvWjx6b29tPi88eT4vPHg+LnBuZyc7XG4gICAgfVxufVxuIl19
},{"./base":10}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KDWRMapType = function (_BaseMap) {
    _inherits(KDWRMapType, _BaseMap);

    function KDWRMapType() {
        _classCallCheck(this, KDWRMapType);

        var _this = _possibleConstructorReturn(this, (KDWRMapType.__proto__ || Object.getPrototypeOf(KDWRMapType)).call(this));

        _this.id = 'kdwr';
        _this.name = 'KdwR 1км';
        _this.alt = '1-километровая немецкая карта (KdwR), начало XX в.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 6;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(KDWRMapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://globus.tut.by/.tiles/kdwr/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return KDWRMapType;
}(_base2.default);

exports.default = KDWRMapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtkd3IuanMiXSwibmFtZXMiOlsiS0RXUk1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQUNqQiwyQkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxNQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFVBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcsb0RBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyxzREFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsVyIsImZpbGUiOiJrZHdyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS0RXUk1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdrZHdyJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ0tkd1IgMdC60LwnO1xuICAgICAgICB0aGlzLmFsdCA9ICcxLdC60LjQu9C+0LzQtdGC0YDQvtCy0LDRjyDQvdC10LzQtdGG0LrQsNGPINC60LDRgNGC0LAgKEtkd1IpLCDQvdCw0YfQsNC70L4gWFgg0LIuJztcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDI1NjtcbiAgICAgICAgdGhpcy5pc1BuZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pblpvb20gPSA2O1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxNDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9nbG9idXMudHV0LmJ5Ly50aWxlcy9rZHdyL1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgIH1cbn1cbiJdfQ==
},{"./base":10}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Minsk1964MapType = function (_BaseMap) {
    _inherits(Minsk1964MapType, _BaseMap);

    function Minsk1964MapType() {
        _classCallCheck(this, Minsk1964MapType);

        var _this = _possibleConstructorReturn(this, (Minsk1964MapType.__proto__ || Object.getPrototypeOf(Minsk1964MapType)).call(this));

        _this.id = 'minsk1964';
        _this.name = 'Минск 1964';
        _this.alt = 'Аэрофотосъемка Минска, октябрь 1964 г.';
        _this.tileSize = 256;
        _this.isPng = true;
        _this.minZoom = 5;
        _this.maxZoom = 17;
        _this.opacity = 1.00;
        return _this;
    }

    _createClass(Minsk1964MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl(coord, zoom) {
            return 'http://orda.of.by/.tiles/minsk1964/Z<zoom>/<y>/<x>.' + (zoom >= 16 ? 'jpg' : 'png');
        }
    }]);

    return Minsk1964MapType;
}(_base2.default);

exports.default = Minsk1964MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbnNrMTk2NC5qcyJdLCJuYW1lcyI6WyJNaW5zazE5NjRNYXBUeXBlIiwiaWQiLCJuYW1lIiwiYWx0IiwidGlsZVNpemUiLCJpc1BuZyIsIm1pblpvb20iLCJtYXhab29tIiwib3BhY2l0eSIsImNvb3JkIiwiem9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7O0FBQ2pCLGdDQUFlO0FBQUE7O0FBQUE7O0FBR1gsY0FBS0MsRUFBTCxHQUFVLFdBQVY7QUFDQSxjQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLGNBQUtDLEdBQUwsR0FBVyx3Q0FBWDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxjQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsSUFBZjtBQVZXO0FBV2Q7Ozs7eUNBRWlCQyxLLEVBQU9DLEksRUFBTTtBQUMzQiw0RUFBNkRBLFFBQVEsRUFBUixHQUFhLEtBQWIsR0FBcUIsS0FBbEY7QUFDSDs7Ozs7O2tCQWhCZ0JWLGdCIiwiZmlsZSI6Im1pbnNrMTk2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlTWFwIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbnNrMTk2NE1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdtaW5zazE5NjQnO1xuICAgICAgICB0aGlzLm5hbWUgPSAn0JzQuNC90YHQuiAxOTY0JztcbiAgICAgICAgdGhpcy5hbHQgPSAn0JDRjdGA0L7RhNC+0YLQvtGB0YrQtdC80LrQsCDQnNC40L3RgdC60LAsINC+0LrRgtGP0LHRgNGMIDE5NjQg0LMuJztcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDI1NjtcbiAgICAgICAgdGhpcy5pc1BuZyA9IHRydWU7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDU7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDE3O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjAwO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKGNvb3JkLCB6b29tKSB7XG4gICAgICAgIHJldHVybiBgaHR0cDovL29yZGEub2YuYnkvLnRpbGVzL21pbnNrMTk2NC9aPHpvb20+Lzx5Pi88eD4uJHt6b29tID49IDE2ID8gJ2pwZycgOiAncG5nJ31gO1xuICAgIH1cbn0iXX0=
},{"./base":10}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RKKAMapType = function (_BaseMap) {
    _inherits(RKKAMapType, _BaseMap);

    function RKKAMapType() {
        _classCallCheck(this, RKKAMapType);

        var _this = _possibleConstructorReturn(this, (RKKAMapType.__proto__ || Object.getPrototypeOf(RKKAMapType)).call(this));

        _this.id = 'rkka';
        _this.name = 'РККА 500м';
        _this.alt = '500-метровая карта РККА, 1920-1930-е гг.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 1;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(RKKAMapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/rkka/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return RKKAMapType;
}(_base2.default);

exports.default = RKKAMapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJra2EuanMiXSwibmFtZXMiOlsiUktLQU1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQUNqQiwyQkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxNQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcsMENBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyxtREFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsVyIsImZpbGUiOiJya2thLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUktLQU1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdya2thJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ9Cg0JrQmtCQIDUwMNC8JztcbiAgICAgICAgdGhpcy5hbHQgPSAnNTAwLdC80LXRgtGA0L7QstCw0Y8g0LrQsNGA0YLQsCDQoNCa0JrQkCwgMTkyMC0xOTMwLdC1INCz0LMuJztcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDI1NjtcbiAgICAgICAgdGhpcy5pc1BuZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pblpvb20gPSAxO1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxNDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9vcmRhLm9mLmJ5Ly50aWxlcy9ya2thL1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgIH1cbn1cblxuIl19
},{"./base":10}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RKKA2MapType = function (_BaseMap) {
    _inherits(RKKA2MapType, _BaseMap);

    function RKKA2MapType() {
        _classCallCheck(this, RKKA2MapType);

        var _this = _possibleConstructorReturn(this, (RKKA2MapType.__proto__ || Object.getPrototypeOf(RKKA2MapType)).call(this));

        _this.id = 'rkka2';
        _this.name = 'РККА 500м+';
        _this.alt = '500-метровая карта РККА (предыдущая версия, с частичным покрытием территории Беларуси), 1920-1930-е гг.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 10;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(RKKA2MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/rkka_v2/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return RKKA2MapType;
}(_base2.default);

exports.default = RKKA2MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJra2EyLmpzIl0sIm5hbWVzIjpbIlJLS0EyTWFwVHlwZSIsImlkIiwibmFtZSIsImFsdCIsInRpbGVTaXplIiwiaXNQbmciLCJtaW5ab29tIiwibWF4Wm9vbSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7O0FBQ2pCLDRCQUFlO0FBQUE7O0FBQUE7O0FBR1gsY0FBS0MsRUFBTCxHQUFVLE9BQVY7QUFDQSxjQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLGNBQUtDLEdBQUwsR0FBVyx5R0FBWDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxjQUFLQyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsR0FBZjtBQVZXO0FBV2Q7Ozs7MkNBRW1CO0FBQ2hCLG1CQUFPLHNEQUFQO0FBQ0g7Ozs7OztrQkFoQmdCUixZIiwiZmlsZSI6InJra2EyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUktLQTJNYXBUeXBlIGV4dGVuZHMgQmFzZU1hcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuaWQgPSAncmtrYTInO1xuICAgICAgICB0aGlzLm5hbWUgPSAn0KDQmtCa0JAgNTAw0LwrJztcbiAgICAgICAgdGhpcy5hbHQgPSAnNTAwLdC80LXRgtGA0L7QstCw0Y8g0LrQsNGA0YLQsCDQoNCa0JrQkCAo0L/RgNC10LTRi9C00YPRidCw0Y8g0LLQtdGA0YHQuNGPLCDRgSDRh9Cw0YHRgtC40YfQvdGL0Lwg0L/QvtC60YDRi9GC0LjQtdC8INGC0LXRgNGA0LjRgtC+0YDQuNC4INCR0LXQu9Cw0YDRg9GB0LgpLCAxOTIwLTE5MzAt0LUg0LPQsy4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDEwO1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxNDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9vcmRhLm9mLmJ5Ly50aWxlcy9ya2thX3YyL1o8em9vbT4vPHk+Lzx4Pi5qcGcnO1xuICAgIH1cbn1cblxuIl19
},{"./base":10}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WIG11MapType = function (_BaseMap) {
    _inherits(WIG11MapType, _BaseMap);

    function WIG11MapType() {
        _classCallCheck(this, WIG11MapType);

        var _this = _possibleConstructorReturn(this, (WIG11MapType.__proto__ || Object.getPrototypeOf(WIG11MapType)).call(this));

        _this.id = 'wig1-1';
        _this.name = 'WIG 1км';
        _this.alt = '1-километровая польская карта (WIG), 1920-1930-е гг.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 9;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(WIG11MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/wig/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return WIG11MapType;
}(_base2.default);

exports.default = WIG11MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZzEtMS5qcyJdLCJuYW1lcyI6WyJXSUcxMU1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7OztBQUNqQiw0QkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxRQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFNBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcsc0RBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyxrREFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsWSIsImZpbGUiOiJ3aWcxLTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZU1hcCBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXSUcxMU1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICd3aWcxLTEnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV0lHIDHQutC8JztcbiAgICAgICAgdGhpcy5hbHQgPSAnMS3QutC40LvQvtC80LXRgtGA0L7QstCw0Y8g0L/QvtC70YzRgdC60LDRjyDQutCw0YDRgtCwIChXSUcpLCAxOTIwLTE5MzAt0LUg0LPQsy4nO1xuICAgICAgICB0aGlzLnRpbGVTaXplID0gMjU2O1xuICAgICAgICB0aGlzLmlzUG5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluWm9vbSA9IDk7XG4gICAgICAgIHRoaXMubWF4Wm9vbSA9IDE0O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxLjA7XG4gICAgfVxuXG4gICAgZ2V0UmVtb3RlVGlsZVVybCAoKSB7XG4gICAgICAgIHJldHVybiAnaHR0cDovL29yZGEub2YuYnkvLnRpbGVzL3dpZy9aPHpvb20+Lzx5Pi88eD4uanBnJztcbiAgICB9XG59Il19
},{"./base":10}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WIG12MapType = function (_BaseMap) {
    _inherits(WIG12MapType, _BaseMap);

    function WIG12MapType() {
        _classCallCheck(this, WIG12MapType);

        var _this = _possibleConstructorReturn(this, (WIG12MapType.__proto__ || Object.getPrototypeOf(WIG12MapType)).call(this));

        _this.id = 'wig1-2';
        _this.name = 'WIG 1км+';
        _this.alt = '1-километровая польская карта (WIG), 1920-1930-е гг. - ТЕСТОВАЯ версия карты, сейчас дорабатывается, при ссылках пока лучше не использовать';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 9;
        _this.maxZoom = 14;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(WIG12MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://globus.tut.by/.tiles/wig_v2/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return WIG12MapType;
}(_base2.default);

exports.default = WIG12MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZzEtMi5qcyJdLCJuYW1lcyI6WyJXSUcxMk1hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7OztBQUNqQiw0QkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxRQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFVBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcsNklBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyx3REFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsWSIsImZpbGUiOiJ3aWcxLTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZU1hcCBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXSUcxMk1hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICd3aWcxLTInO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV0lHIDHQutC8Kyc7XG4gICAgICAgIHRoaXMuYWx0ID0gJzEt0LrQuNC70L7QvNC10YLRgNC+0LLQsNGPINC/0L7Qu9GM0YHQutCw0Y8g0LrQsNGA0YLQsCAoV0lHKSwgMTkyMC0xOTMwLdC1INCz0LMuIC0g0KLQldCh0KLQntCS0JDQryDQstC10YDRgdC40Y8g0LrQsNGA0YLRiywg0YHQtdC50YfQsNGBINC00L7RgNCw0LHQsNGC0YvQstCw0LXRgtGB0Y8sINC/0YDQuCDRgdGB0YvQu9C60LDRhSDQv9C+0LrQsCDQu9GD0YfRiNC1INC90LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMJztcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDI1NjtcbiAgICAgICAgdGhpcy5pc1BuZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pblpvb20gPSA5O1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxNDtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9nbG9idXMudHV0LmJ5Ly50aWxlcy93aWdfdjIvWjx6b29tPi88eT4vPHg+LmpwZyc7XG4gICAgfVxufVxuIl19
},{"./base":10}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WIG3MapType = function (_BaseMap) {
    _inherits(WIG3MapType, _BaseMap);

    function WIG3MapType() {
        _classCallCheck(this, WIG3MapType);

        var _this = _possibleConstructorReturn(this, (WIG3MapType.__proto__ || Object.getPrototypeOf(WIG3MapType)).call(this));

        _this.id = 'wig3';
        _this.name = 'WIG 3км';
        _this.alt = '3-километровая польская карта (WIG), 1920-1930-е гг.';
        _this.tileSize = 256;
        _this.isPng = false;
        _this.minZoom = 6;
        _this.maxZoom = 12;
        _this.opacity = 1.0;
        return _this;
    }

    _createClass(WIG3MapType, [{
        key: 'getRemoteTileUrl',
        value: function getRemoteTileUrl() {
            return 'http://orda.of.by/.tiles/wig3km/Z<zoom>/<y>/<x>.jpg';
        }
    }]);

    return WIG3MapType;
}(_base2.default);

exports.default = WIG3MapType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZzMuanMiXSwibmFtZXMiOlsiV0lHM01hcFR5cGUiLCJpZCIsIm5hbWUiLCJhbHQiLCJ0aWxlU2l6ZSIsImlzUG5nIiwibWluWm9vbSIsIm1heFpvb20iLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQUNqQiwyQkFBZTtBQUFBOztBQUFBOztBQUdYLGNBQUtDLEVBQUwsR0FBVSxNQUFWO0FBQ0EsY0FBS0MsSUFBTCxHQUFZLFNBQVo7QUFDQSxjQUFLQyxHQUFMLEdBQVcsc0RBQVg7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsY0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFWVztBQVdkOzs7OzJDQUVtQjtBQUNoQixtQkFBTyxxREFBUDtBQUNIOzs7Ozs7a0JBaEJnQlIsVyIsImZpbGUiOiJ3aWczLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VNYXAgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV0lHM01hcFR5cGUgZXh0ZW5kcyBCYXNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICd3aWczJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dJRyAz0LrQvCc7XG4gICAgICAgIHRoaXMuYWx0ID0gJzMt0LrQuNC70L7QvNC10YLRgNC+0LLQsNGPINC/0L7Qu9GM0YHQutCw0Y8g0LrQsNGA0YLQsCAoV0lHKSwgMTkyMC0xOTMwLdC1INCz0LMuJztcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IDI1NjtcbiAgICAgICAgdGhpcy5pc1BuZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pblpvb20gPSA2O1xuICAgICAgICB0aGlzLm1heFpvb20gPSAxMjtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMS4wO1xuICAgIH1cblxuICAgIGdldFJlbW90ZVRpbGVVcmwgKCkge1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9vcmRhLm9mLmJ5Ly50aWxlcy93aWcza20vWjx6b29tPi88eT4vPHg+LmpwZyc7XG4gICAgfVxufVxuIl19
},{"./base":10}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeCoordinates = normalizeCoordinates;
// Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function normalizeCoordinates(coord, zoom) {
    var x = coord.x;
    var y = coord.y;

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;

    // don't repeat across y-axis (vertically)
    if (y < 0 || y >= tileRange) {
        return null;
    }

    // repeat across x-axis
    if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
    }

    return { x: x, y: y };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsibm9ybWFsaXplQ29vcmRpbmF0ZXMiLCJjb29yZCIsInpvb20iLCJ4IiwieSIsInRpbGVSYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLG9CLEdBQUFBLG9CO0FBRmhCO0FBQ0E7QUFDTyxTQUFTQSxvQkFBVCxDQUErQkMsS0FBL0IsRUFBc0NDLElBQXRDLEVBQTRDO0FBQy9DLFFBQUlDLElBQUlGLE1BQU1FLENBQWQ7QUFDQSxRQUFJQyxJQUFJSCxNQUFNRyxDQUFkOztBQUVBO0FBQ0E7QUFDQSxRQUFJQyxZQUFZLEtBQUtILElBQXJCOztBQUVBO0FBQ0EsUUFBSUUsSUFBSSxDQUFKLElBQVNBLEtBQUtDLFNBQWxCLEVBQTZCO0FBQ3pCLGVBQU8sSUFBUDtBQUNIOztBQUVEO0FBQ0EsUUFBSUYsSUFBSSxDQUFKLElBQVNBLEtBQUtFLFNBQWxCLEVBQTZCO0FBQ3pCRixZQUFJLENBQUNBLElBQUlFLFNBQUosR0FBZ0JBLFNBQWpCLElBQThCQSxTQUFsQztBQUNIOztBQUVELFdBQU8sRUFBRUYsR0FBR0EsQ0FBTCxFQUFRQyxHQUFHQSxDQUFYLEVBQVA7QUFDSCIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTm9ybWFsaXplcyB0aGUgY29vcmRzIHRoYXQgdGlsZXMgcmVwZWF0IGFjcm9zcyB0aGUgeCBheGlzIChob3Jpem9udGFsbHkpXG4vLyBsaWtlIHRoZSBzdGFuZGFyZCBHb29nbGUgbWFwIHRpbGVzLlxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvb3JkaW5hdGVzIChjb29yZCwgem9vbSkge1xuICAgIGxldCB4ID0gY29vcmQueDtcbiAgICBsZXQgeSA9IGNvb3JkLnk7XG5cbiAgICAvLyB0aWxlIHJhbmdlIGluIG9uZSBkaXJlY3Rpb24gcmFuZ2UgaXMgZGVwZW5kZW50IG9uIHpvb20gbGV2ZWxcbiAgICAvLyAwID0gMSB0aWxlLCAxID0gMiB0aWxlcywgMiA9IDQgdGlsZXMsIDMgPSA4IHRpbGVzLCBldGNcbiAgICBsZXQgdGlsZVJhbmdlID0gMSA8PCB6b29tO1xuXG4gICAgLy8gZG9uJ3QgcmVwZWF0IGFjcm9zcyB5LWF4aXMgKHZlcnRpY2FsbHkpXG4gICAgaWYgKHkgPCAwIHx8IHkgPj0gdGlsZVJhbmdlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJlcGVhdCBhY3Jvc3MgeC1heGlzXG4gICAgaWYgKHggPCAwIHx8IHggPj0gdGlsZVJhbmdlKSB7XG4gICAgICAgIHggPSAoeCAlIHRpbGVSYW5nZSArIHRpbGVSYW5nZSkgJSB0aWxlUmFuZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSB9O1xufSJdfQ==
},{}]},{},[1])