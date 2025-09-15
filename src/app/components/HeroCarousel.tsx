'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FileText, Calculator, TrendingUp, Shield } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Excellence Comptable',
      subtitle: 'Solutions Financières Modernes',
      description: 'Expertise comptable digitalisée, conseil stratégique personnalisé et conformité garantie depuis plus de 20 ans',
      backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      buttonText: 'Consultation Gratuite',
      buttonLink: '/contact',
      icon: <Calculator className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Conseil Stratégique',
      subtitle: 'Optimisation Fiscale',
      description: 'Accompagnement personnalisé pour l\'optimisation de votre stratégie fiscale et financière',
      backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      buttonText: 'Découvrir nos Services',
      buttonLink: '/services',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Audit & Conformité',
      subtitle: 'Sécurité Réglementaire',
      description: 'Audit complet de vos processus financiers et mise en conformité avec les normes en vigueur',
      backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      buttonText: 'Planifier un Audit',
      buttonLink: '/audit',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Protection & Sécurité',
      subtitle: 'Données Sécurisées',
      description: 'Protection maximale de vos données financières avec nos systèmes de sécurité avancés',
      backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
      buttonText: 'En Savoir Plus',
      buttonLink: '/securite',
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Préchargement des images */}
      <div className="hidden">
        {slides.map((slide) => (
          <img 
            key={slide.id} 
            src={slide.backgroundImage.slice(5, -2)} // Retire url(' et ')
            alt="Preload"
          />
        ))}
      </div>

      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.05
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: slide.backgroundImage,
            zIndex: index === currentSlide ? 1 : 0
          }}
        >
          {/* Overlay graduel pour meilleure lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    x: index === currentSlide ? 0 : -50
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center mb-6"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mr-4 border border-white/20">
                    <div className="text-white">
                      {slide.icon}
                    </div>
                  </div>
                  <span className="text-white text-lg font-medium tracking-wide">
                    {slide.subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 50
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 30
                  }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-2xl"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 30
                  }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 focus:ring-4 focus:ring-amber-300"
                    aria-label={slide.buttonText}
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Contrôles de navigation */}
      <button
        onClick={prevSlide}
        aria-label="Slide précédent"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-white focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Slide suivant"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-white focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicateurs de pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Barre de progression */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;