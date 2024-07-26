// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Jupiter</h1>
        <p className="text-xl text-gray-600">The Largest Planet in Our Solar System</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/placeholder.svg" alt="Jupiter" className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Facts about Jupiter</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Largest planet in our solar system</li>
            <li>Known as a gas giant, primarily composed of hydrogen and helium</li>
            <li>Has a Great Red Spot, a giant storm that has lasted for centuries</li>
            <li>Has at least 79 moons, including the four large Galilean moons</li>
            <li>Completes one rotation in about 10 hours (Jovian day)</li>
          </ul>
          <Button>Learn More About Jupiter</Button>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Jupiter Fascinates Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Massive Scale</h3>
            <p>Jupiter's enormous size and gravitational influence have shaped the solar system, protecting Earth from many asteroid impacts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Dynamic Atmosphere</h3>
            <p>The planet's colorful bands and swirling storms, including the Great Red Spot, showcase complex atmospheric dynamics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Diverse Moons</h3>
            <p>Jupiter's many moons, especially the Galilean moons, offer potential habitats for extraterrestrial life in our solar system.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
