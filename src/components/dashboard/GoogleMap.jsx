import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const GMap = ({empLat, empLng}) => {
  
  const mapStyles = {        
    height: "100%",
    width: "100%",
    padding: "50px"
  };
  
  const defaultCenter = {
    lat: parseFloat(empLat), lng: parseFloat(empLng)
  }
  
  return (
     <LoadScript
      // my api key
       googleMapsApiKey='AIzaSyDdsswT3bAkSpLKwAS01TtjUeNwnyxCLI0'> 
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={2}
          center={defaultCenter}
        >
        <Marker position={defaultCenter}/>
        </GoogleMap>
     </LoadScript>
  )
}

export default GMap;