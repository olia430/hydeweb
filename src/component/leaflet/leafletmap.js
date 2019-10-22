import L from 'leaflet'
import React  , { Component} from 'react'

class MapIndex extends Component{
    constructor(){
        super()
        this.map=null;
    } 
    componentDidMount()
    {   
        let mapOptions={
            attributionControl:false
          }
        this.map = L.map('map',mapOptions).setView([51.505, -0.09], 13);
        this.marker = L.marker([51.5, -0.09]).addTo(this.map);
        this.circle = L.circle([51.508, -0.11], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(this.map);
        this.polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
        ]).addTo(this.map);
        this.marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
this.circle.bindPopup("I am a circle.");
this.polygon.bindPopup("I am a polygon.");
this.popup = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent("I am a standalone popup.")
	.openOn(this.map);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(this.map);
        L.marker([50.5, 30.5]).addTo(this.map);
    }
  render()
  {
    return( //这里(不能写到下一行，否则react认为render中没有返回任何内容
       <div id='map' style={{height:"100vh"}}></div>
    )
  }
}
export default MapIndex
