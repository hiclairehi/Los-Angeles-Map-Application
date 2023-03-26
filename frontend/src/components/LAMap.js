import React  from "react";
import dataCIP from "../data/cip_projects.json"
import dataEV from "../data/ev_chargers.json"
import { MapContainer,GeoJSON, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

function LAMap() {
  const coordinatesOfCIP = dataCIP.features.map(features => features.geometry.coordinates[0])
  
  function pointToLayer(feature, latlng) {
    let markerOptions;
    console.log(latlng)
    for (let i = 0; i < coordinatesOfCIP.length; i++) {
      if (inside([latlng.lng, latlng.lat], coordinatesOfCIP[i])) {
        markerOptions = {
          radius: 10,
          color: "yellow",
          fillColor: "yellow",
          fillOpacity: .7,
          weight: 1,
        };
        break;
      } else {
        markerOptions = {
          radius: 3,
          color: "black",
          fillColor: "black",
          fillOpacity: .3,
          weight: 1,
        };
      }
    }
  
    return L.circleMarker(latlng, markerOptions);
  }

  function inside(point, vs) {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
  };

  return (
    <div>
      <MapContainer  style = {{height: "80vh", width:"100vw"}} zoom={10} center={[34.052235, -118.243683]}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data = {dataCIP.features}/>
        <GeoJSON data = {dataEV.features} pointToLayer={pointToLayer} />

      </MapContainer>
    </div>

  );
}

export default LAMap;
