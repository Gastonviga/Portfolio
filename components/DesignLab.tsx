import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Eye, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DesignProject {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  colorClasses: string;
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "Viga & Assoc",
    category: "Legal / Corporate",
    description: "Identidad minimalista con tipografía serif diseñada para transmitir autoridad y elegancia profesional.",
    imageUrl: "/imagenes/estudiojuridico.webp",
    videoUrl: "/videos/estudiojuridico.mp4",
    colorClasses: "border-slate-400/50 shadow-slate-700/20"
  },
  {
    id: 2,
    title: "Nexus Security",
    category: "Cybersecurity / Sci-Fi",
    description: "Interfaz estilo terminal con efectos glitch y mapas de amenazas en tiempo real.",
    imageUrl: "/imagenes/nexus.webp",
    videoUrl: "/videos/nexus.mp4",
    colorClasses: "border-green-500/50 shadow-green-900/20"
  },
  {
    id: 3,
    title: "Apex Motors",
    category: "Automotive / Dark",
    description: "Landing inmersiva con fondos de video a pantalla completa y telemetría en movimiento.",
    imageUrl: "/imagenes/apex-motors.webp",
    videoUrl: "/videos/apex-motors.mp4",
    colorClasses: "border-red-600/50 shadow-red-900/20"
  },
  {
    id: 4,
    title: "Vivid Commerce",
    category: "E-Commerce / Neo-Brutalist",
    description: "Experiencia de compra vibrante con micro-interacciones y tipografía audaz.",
    imageUrl: "/imagenes/vivid-commerce.webp",
    videoUrl: "/videos/vivid-commerce.mp4",
    colorClasses: "border-orange-500/50 shadow-orange-900/20"
  },
  {
    id: 5,
    title: "Landing App",
    category: "SaaS / Mobile First",
    description: "Landing moderna para aplicación móvil con animaciones fluidas y diseño centrado en conversión.",
    imageUrl: "/imagenes/landingapp.webp",
    videoUrl: "/videos/landingapp.mp4",
    colorClasses: "border-violet-500/50 shadow-violet-900/20"
  }
];

// ============================================
// Video Modal Component
// ============================================
interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50"
            onClick={handleClose}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            aria-label="Close video modal"
          >
            <X size={24} />
          </motion.button>

          {/* Video Container */}
          <motion.div
            className="w-full max-w-4xl mx-4"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DesignCardProps {
  project: DesignProject;
  height: string;
  minHeight?: string;
  featured?: boolean;
  onOpenModal: (videoUrl: string) => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ project, height, minHeight, featured, onOpenModal }) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleViewConcept = () => {
    onOpenModal(project.videoUrl);
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl border transition-all duration-500 spotlight-card ${project.colorClasses} ${featured ? 'h-full' : ''}`}
      style={{ height: featured ? undefined : height, minHeight: minHeight || (featured ? '580px' : undefined) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        <div>
          <p className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-2">
            {project.category}
          </p>
          <h3 className="text-white text-xl md:text-2xl font-bold">
            {project.title}
          </h3>
        </div>

        <div>
          <p className="text-neutral-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>

          {/* View Concept Button */}
          <motion.button
            className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-900 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white/90 cursor-pointer"
            initial={{ y: 10 }}
            animate={{ y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            onClick={handleViewConcept}
          >
            <Eye size={16} />
            {t('designLab.viewConcept')}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export const DesignLab: React.FC = () => {
  const { t } = useLanguage();
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  const handleOpenModal = (videoUrl: string) => {
    setModalVideoUrl(videoUrl);
  };

  const handleCloseModal = () => {
    setModalVideoUrl(null);
  };

  return (
    <>
      <section id="design-lab" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-sm font-bold text-accent dark:text-slate-accent tracking-widest uppercase mb-2">
                {t('designLab.label')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {t('designLab.title')}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-2xl">
                {t('designLab.description')}
              </p>
            </div>
          </Reveal>

          {/* Bento Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Card - Viga & Assoc (Large) */}
            <div className="md:col-span-1 lg:col-span-2">
              <Reveal width="100%">
                <DesignCard project={designProjects[0]} height="350px" minHeight="350px" onOpenModal={handleOpenModal} featured />
              </Reveal>
            </div>
            
            {/* Nexus Security */}
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.1}>
                <DesignCard project={designProjects[1]} height="350px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>

            {/* Apex Motors */}
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.2}>
                <DesignCard project={designProjects[2]} height="350px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>

            {/* Vivid Commerce */}
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.3}>
                <DesignCard project={designProjects[3]} height="350px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>

            {/* Landing App */}
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.4}>
                <DesignCard project={designProjects[4]} height="350px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        videoUrl={modalVideoUrl || ''}
        isOpen={modalVideoUrl !== null}
        onClose={handleCloseModal}
      />
    </>
  );
};
