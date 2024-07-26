// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover Pluto</h1>
        <p className="text-xl text-gray-600">The Fascinating Dwarf Planet at the Edge of Our Solar System</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/placeholder.svg" alt="Pluto" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Facts about Pluto</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Discovered in 1930 by Clyde Tombaugh</li>
            <li>Reclassified as a dwarf planet in 2006</li>
            <li>Has five known moons, including Charon</li>
            <li>Takes 248 Earth years to orbit the Sun</li>
            <li>Surface composed of nitrogen ice, methane, and carbon monoxide</li>
          </ul>
          <Button>Learn More About Pluto</Button>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Pluto Fascinates Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Mysterious Origins</h3>
            <p>Pluto's formation and history continue to intrigue scientists, offering clues about the early solar system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Unique Characteristics</h3>
            <p>From its heart-shaped glacier to its hazy atmosphere, Pluto's features challenge our understanding of planetary bodies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Ongoing Discoveries</h3>
            <p>New Horizons mission data continues to reveal surprising facts about Pluto, keeping it in the scientific spotlight.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
