<Fragment>
<leaflet-map {...{ "data-latitude": (latitude), "data-longitude": (longitude), "data-zoom": (zoom), "data-container": (container), "data-tiles": (tileLayer), "data-attribution": (attribution), "data-containerstyle": (containerstyle), "data-markers": (markers) }}>
<div id={container} style={containerstyle}></div>
<script>
{() => {
import L from "leaflet";

class LeafletMap extends HTMLElement {
constructor() {
super();

const latlng: [number, number] = [Number(this.dataset.latitude), Number(this.dataset.longitude)];

var map = L.map(this.dataset.container).setView(latlng, Number(this.dataset.zoom));
var marker = L.marker([Number(this.dataset.latitude), Number(this.dataset.longitude)]).addTo(map);
L.tileLayer(
this.dataset.tiles,
{ attribution: this.dataset.attribution }
).addTo(map);
const marksToAdd = [...this.dataset.markers];
console.log(this.dataset);

marksToAdd.map(markerData => {
var markerX = L.marker([markerData.lat, markerData.lon]).addTo(map);
});

}
}

customElements.define("leaflet-map", LeafletMap);
}}
</script></leaflet-map>
</Fragment>;
