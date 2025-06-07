import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-mycolor-400">
        <Navbar />
        <div className="container mt-24 md:mt-36 px-12 py-4">
          <Hero />
        </div>
      </main>
    </>
  );
}
