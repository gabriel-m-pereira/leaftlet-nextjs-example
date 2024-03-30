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
    <main className="bg-white h-dvh flex-col flex">
      <header className="py-8 border-b border-neutral-400 flex justify-center items-center w-full text-4xl font-extrabold text-black">
        <p>Leaflet Example</p>
      </header>

      <DynamicMap />
    </main>
  );
}
