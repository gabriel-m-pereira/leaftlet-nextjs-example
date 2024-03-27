"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[-23.569357, -46.656609]}
      zoom={14}
      className="flex-1"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-23.56593, -46.6348]}>
        <Popup>
          Jacaranda Studio A <br /> Jacaranda Studio B <br /> Jacaranda Studio C
        </Popup>
      </Marker>
      <Marker position={[-23.5802, -46.66489]}>
        <Popup>Jardim Paulista House</Popup>
      </Marker>
      <Marker position={[-23.55798, -46.68838]}>
        <Popup>ClapMe HUB &gt;:3</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
