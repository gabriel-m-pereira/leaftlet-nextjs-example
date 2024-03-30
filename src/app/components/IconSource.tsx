import Leaflet from "leaflet";
import { renderToString } from "react-dom/server";

const IconSource = (source: JSX.Element) =>
  Leaflet?.divIcon({
    html: renderToString(source),
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -30],
  });

export default IconSource;
