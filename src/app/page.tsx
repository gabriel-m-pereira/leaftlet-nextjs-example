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
      <DynamicMap />
    </main>
  );
}
