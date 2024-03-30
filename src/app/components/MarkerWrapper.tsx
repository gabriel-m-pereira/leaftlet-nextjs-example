import { MarkerCluster } from "leaflet";
import { LucideProps } from "lucide-react";
import { FunctionComponent } from "react";

const MarkerWrapper = ([icon, cluster]: [
  FunctionComponent<LucideProps>,
  MarkerCluster?
]) => {
  const IconFC = icon;

  return cluster ? (
    <div className="inline-flex w-fit h-fit relative">
      <div className="absolute h-5 w-5 rounded-full bg-orange-400 text-white/70 border border-white/60 -top-0.5 -right-0.5 flex justify-center items-center">
        {cluster.getChildCount()}
      </div>
      <div>
        <IconFC size={42} fill="Orange" className="text-white/70" />
      </div>
    </div>
  ) : (
    <div className="inline-flex w-fit h-fit">
      <IconFC size={42} fill="Orange" className="text-white/70" />
    </div>
  );
};

export default MarkerWrapper;
