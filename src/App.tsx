import * as React from 'react';
import {useState} from 'react';
import Map from 'react-map-gl';
import ControlPanel from './components/control-panel';
import './App.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamJ1Y2hhY2hlciIsImEiOiJja3o5ZXc5YTQwamI0Mm5wNHhhNnAwcXI4In0.o5tAGqNTfiNwWt0r4QGscg'; // Set your mapbox token here

export default function App() {
  const [mapStyle, setMapStyle] = useState(null);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.805,
          longitude: -122.447,
          zoom: 15.5
        }}
        mapStyle={mapStyle && mapStyle.toJS()}
        styleDiffing
        mapboxAccessToken={MAPBOX_TOKEN}
      />

      <ControlPanel onChange={setMapStyle} />
    </>
  );
}
