// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover Mars</h1>
        <p className="text-xl text-gray-600">The Red Planet: Our Celestial Neighbor</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/placeholder.svg" alt="Mars" className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Facts about Mars</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Fourth planet from the Sun in our solar system</li>
            <li>Known as the Red Planet due to its reddish appearance</li>
            <li>Has the largest volcano in the solar system, Olympus Mons</li>
            <li>Features a grand canyon, Valles Marineris, spanning 1/4 of the planet's circumference</li>
            <li>Has two small, irregularly shaped moons: Phobos and Deimos</li>
          </ul>
          <Button>Explore Mars Further</Button>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Mars Captivates Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Potential for Life</h3>
            <p>Mars' similarity to Earth and evidence of past water make it a prime candidate in the search for extraterrestrial life.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Future Colonization</h3>
            <p>As the most habitable planet besides Earth, Mars is the focus of future human exploration and potential colonization efforts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Geological Wonders</h3>
            <p>Mars' unique geological features, like Olympus Mons and Valles Marineris, offer insights into planetary formation and evolution.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
