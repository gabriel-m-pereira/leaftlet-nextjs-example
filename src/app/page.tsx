import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../app/components/Map"), {
  loading: () => (
    <div className="h-full w-full flex justify-center items-center text-3xl text-black/40">
      <p>Loading...</p>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-neutral-200 h-dvh flex-col flex">
      <header className="h-28 bg-neutral-400/10 flex justify-center items-center w-full text-4xl font-extrabold">
        <p>Leaflet Example</p>
      </header>

      <DynamicMap />
    </main>
  );
}
