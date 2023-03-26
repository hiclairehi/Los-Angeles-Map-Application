import React  from "react";
import dataEV from "../data/ev_chargers.json"
import { useNavigate } from 'react-router-dom';


function EVData() {
    let navigate = useNavigate();
    const tableRows = dataEV.features.map(feature => {
        const id = feature.properties.OBJECTID
        const latitutde = feature.geometry.coordinates[0];
        const longitutde = feature.geometry.coordinates[1];
        return (
          <tr key={feature.id}>
            <td>{id}</td>
            <td>{longitutde} , </td>
            <td>{latitutde}</td>
          </tr>
        );
      });
    
      return (
        <div>
          <button onClick={() => {navigate('/')}}>Back</button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Latitutde</th>
                <th>Longitutde</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      );
}

export default EVData;
