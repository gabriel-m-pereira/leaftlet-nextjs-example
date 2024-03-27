import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../app/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-white h-dvh flex-col flex">
      <header className="h-36 bg-neutral-200/30 flex justify-center items-center w-full text-4xl font-extrabold">
        <p>Leaflet Example</p>
      </header>

      <DynamicMap />
    </main>
  );
}
