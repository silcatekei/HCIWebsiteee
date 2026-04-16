
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary"></div>
       <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
       <div className="absolute bottom-0 left-0 -mb-24 -ml-12 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="font-semibold text-primary uppercase tracking-wider">Virtual Assistant Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark mt-4 mb-6">
              Hi, I'm Carlisle! <br /> Let's Make Your Life <span className="text-primary">Easier</span>.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              "I handle the details so you can focus on the big picture. Your efficient, reliable partner for administrative, creative, and technical tasks."
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#portfolio" className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
                View My Work
              </a>
              <a href="#contact" className="bg-white text-dark font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
             <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full transform -rotate-12"></div>
                <img 
                    src="Jaja1.jpeg" 
                    alt="Bella the Virtual Assistant" 
                    className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
                />
             </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-4000 {
          animation-delay: -4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
