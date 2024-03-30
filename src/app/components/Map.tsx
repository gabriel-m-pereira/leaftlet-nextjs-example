"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import { LatLngExpression, MarkerCluster } from "leaflet";
import IconSource from "./IconSource";
import MarkerWrapper from "./MarkerWrapper";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Button } from "./ui/button";
import { useState } from "react";
// import t from "@/app/accesstoken.json";

const CustomIcon = {
  icon: IconSource(MarkerWrapper([MapPin])),
};

const maps = [
  {
    provider: "Stadia",
    attribution:
      '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    skins: [
      {
        name: "Aliade Smooth",
        url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Aliade Smooth Dark",
        url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      },
      {
        name: "OSM Bright",
        url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Outdoors",
        url: "https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Stamen Toner",
        url: "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Stamen Toner Background",
        url: "https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Stamen Toner Light",
        url: "https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Stamen Watercolor",
        url: "https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.png",
      },
      {
        name: "Stamen Terrain",
        url: "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png",
      },
      {
        name: "Stamen Terrain Background",
        url: "https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.png",
      },
    ],
  },
  {
    provider: "Jawg Maps",
    attribution:
      '<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    skins: [
      {
        name: "Streets",
        url: "https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
      {
        name: "Terrain",
        url: "https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
      {
        name: "Lagoon",
        url: "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
      {
        name: "Sunny",
        url: "https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
      {
        name: "Dark",
        url: "https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
      {
        name: "Light",
        url: "https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
      {
        name: "Matrix",
        url: "https://tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}",
      },
    ],
  },
];

const spaces: {
  name: () => JSX.Element;
  location: LatLngExpression;
}[] = [
  {
    name: () => (
      <>
        Jacaranda Studio A <br /> Jacaranda Studio B <br /> Jacaranda Studio C
      </>
    ),
    location: [-23.56593, -46.6348],
  },
  {
    name: () => <>Jardim Paulista House</>,
    location: [-23.5802, -46.66489],
  },
  {
    name: () => <>ClapMe HUB &gt;:3</>,
    location: [-23.55798, -46.68838],
  },
];

const createClusterCustomIcon = function (cluster: MarkerCluster) {
  return IconSource(MarkerWrapper([MapPin, cluster]));
};

const Map = () => {
  const [mapSkin, setMapSkin] = useState(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  );
  const [mapAttribution, setMapAttribution] = useState(
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  );

  const changeMap = (url: string, attribution: string) => {
    setMapSkin(url);
    setMapAttribution(attribution);
    return;
  };

  return (
    <>
      <header className="py-4 border-b border-neutral-400 flex justify-center items-center w-full text-4xl font-extrabold px-8">
        <div className="grid grid-cols-2">
          {maps.map(({ provider, attribution, skins }) => (
            <div
              className="flex justify-between items-center flex-col gap-4 h-full"
              key={provider}
            >
              <p className="text-orange-400">{provider}</p>

              <div className="h-full flex items-center">
                <div className="flex justify-center items-center flex-row flex-wrap gap-x-2 gap-y-1 h-fit">
                  {skins.map((skin) => (
                    <Button
                      variant={"secondary"}
                      key={skin.name}
                      size={"sm"}
                      onClick={() => changeMap(skin.url, attribution)}
                    >
                      {skin.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
      <MapContainer
        center={[-23.569357, -46.656609]}
        zoom={10}
        className="flex-1"
      >
        <TileLayer
          attribution={mapAttribution}
          url={mapSkin}
          // accessToken={t.accesstoken}
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {spaces.map(({ name, location }, index) => (
            <Marker position={location} icon={CustomIcon.icon} key={index}>
              <Popup>{name()}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Map;
