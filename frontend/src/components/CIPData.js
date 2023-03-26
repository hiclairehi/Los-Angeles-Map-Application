import React  from "react";
import dataCIP from "../data/cip_projects.json"
import { useNavigate } from 'react-router-dom';


function CIPData() {
    // console.log(dataCIP.features);
    let navigate = useNavigate();
    const tableRows = dataCIP.features.map(feature => {
        const id = feature.properties.OBJECTID
        const projectName = feature.properties.ProjectTitle;
        const projectNumber = feature.properties.ProjectNumber;
        const programName = feature.properties.ProgramName;
        const geocodeID = feature.properties.GeocodingID;
        const pmName = feature.properties.PM_Name;
        return (
          <tr key={feature.id}>
            <td>{id}</td>
            <td>{projectName}</td>
            <td>{projectNumber}</td>
            <td>{programName}</td>
            <td>{geocodeID}</td>
            <td>{pmName}</td>
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
                <th>Project Name</th>
                <th>Project Number</th>
                <th>Program Name</th>
                <th>Geocode ID</th>
                <th>PM name</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      );
}

export default CIPData;
