import React, { useEffect } from 'react';
    import { MessageCircle } from 'lucide-react';
    // ... other imports

    const Hero: React.FC = () => {
      useEffect(() => {
        // Initialize particlesJS
        particlesJS.load('particles-js', '/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
      }, []);

      return (
        <section id="início" className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
          <div id="particles-js" className="absolute inset-0 z-0"></div> {/* Add particle effect container */}
          {/* ... (rest of the hero content) */}
        </section>
      );
    };

    export default Hero;
