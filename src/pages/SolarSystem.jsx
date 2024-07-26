import { useEffect, useRef } from 'react';

const SolarSystem = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Planet data
    const planets = [
      { name: 'Sun', color: '#FFD700', radius: 30, orbit: 0, speed: 0 },
      { name: 'Mercury', color: '#8C7853', radius: 5, orbit: 50, speed: 0.08 },
      { name: 'Venus', color: '#FFA500', radius: 8, orbit: 80, speed: 0.03 },
      { name: 'Earth', color: '#4169E1', radius: 9, orbit: 110, speed: 0.02 },
      { name: 'Mars', color: '#FF4500', radius: 7, orbit: 140, speed: 0.016 },
      { name: 'Jupiter', color: '#DEB887', radius: 20, orbit: 200, speed: 0.004 },
      { name: 'Saturn', color: '#F4A460', radius: 17, orbit: 250, speed: 0.0018 },
    ];

    let time = 0;

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw planets
      planets.forEach((planet) => {
        const x = canvas.width / 2 + Math.cos(time * planet.speed) * planet.orbit;
        const y = canvas.height / 2 + Math.sin(time * planet.speed) * planet.orbit;

        ctx.beginPath();
        ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
        ctx.fillStyle = planet.color;
        ctx.fill();

        // Draw orbit
        if (planet.orbit > 0) {
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, planet.orbit, 0, 2 * Math.PI);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Solar System Animation</h1>
      <canvas
        ref={canvasRef}
        className="mx-auto border border-gray-300 rounded-lg shadow-lg"
      ></canvas>
    </div>
  );
};

export default SolarSystem;
