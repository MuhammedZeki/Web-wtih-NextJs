import About from "@/components/About/About";
import Archive from "@/components/Archive/Archive";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-mycolor-400">
        <Navbar />
        <div className="!container !mx-auto mt-24 md:mt-36 px-12 py-4">
          <Hero />
          <Archive />
          <About />
        </div>
      </main>
    </>
  );
}
