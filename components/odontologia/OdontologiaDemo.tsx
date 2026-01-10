import React, { useState, useRef } from 'react';
import { Reveal } from '../Reveal';
import { Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const OdontologiaDemo: React.FC = () => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleViewDemo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="w-full mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 ml-0 md:ml-[490px]">
            <h3 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-3">
              {t('odonto.demo.label')}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t('odonto.demo.title')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
              {t('odonto.demo.description')}
            </p>
          </div>
        </Reveal>

        {/* Desktop: Card con márgenes */}
        <Reveal delay={0.1}>
          <div className="hidden md:block relative w-full max-w-[1600px] ml-[430px]">
            <div 
              className="relative rounded-2xl overflow-hidden border-2 border-cyan-100 dark:border-cyan-900 shadow-2xl shadow-cyan-500/10 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 cursor-pointer group"
              style={{ aspectRatio: '16/9', width: '100%', height: 'auto' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Placeholder Image */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-xl">
                    <Play size={40} className="text-white ml-1" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                    {t('odonto.demo.hover')}
                  </p>
                </div>
              </div>

              {/* Video (plays on hover) */}
              <video
                ref={videoRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                muted
                loop
                playsInline
              >
                <source src="/videos/VigaHealth.mp4" type="video/mp4" />
              </video>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Subtle hint text */}
            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6">
              Hover sobre la imagen para ver la preview en acción
            </p>
          </div>
        </Reveal>

        {/* Mobile: Card sin márgenes */}
        <Reveal delay={0.1} width="100%">
          <div className="block md:hidden relative w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-cyan-100 dark:border-cyan-900 shadow-2xl shadow-cyan-500/10 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-xl">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <button
                    onClick={handleViewDemo}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  >
                    {t('odonto.demo.button')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Modal for mobile */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-neutral-900">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/VigaHealth.mp4" type="video/mp4" />
            </video>
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
