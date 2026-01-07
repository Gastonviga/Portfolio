import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Eye, X } from 'lucide-react';

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
    title: "Nexus Security",
    category: "Cybersecurity / Sci-Fi",
    description: "Terminal-style interface with glitch effects and real-time threat maps.",
    imageUrl: "/imagenes/nexus.png",
    videoUrl: "/videos/nexus.mp4",
    colorClasses: "border-green-500 shadow-green-900/20"
  },
  {
    id: 2,
    title: "Apex Motors",
    category: "Automotive / Video-First",
    description: "Immersive landing page featuring full-screen video backgrounds and motion telemetry.",
    imageUrl: "/imagenes/apex-motors.png",
    videoUrl: "/videos/apex-motors.mp4",
    colorClasses: "border-red-600 shadow-red-900/20"
  },
  {
    id: 3,
    title: "AURA | Living Objects",
    category: "E-Commerce / Neo-Brutalist",
    description: "Vibrant shopping experience focusing on micro-interactions and bold typography.",
    imageUrl: "/imagenes/vivid-commerce.png",
    videoUrl: "/videos/vivid-commerce.mp4",
    colorClasses: "border-orange-500 shadow-orange-900/20"
  },
  {
    id: 4,
    title: "NovaPay",
    category: "Fintech / SaaS",
    description: "Clean, dark-mode financial interface optimized for conversion and trust.",
    imageUrl: "/imagenes/novapay-preview.png",
    videoUrl: "/videos/novapay-concept.mp4",
    colorClasses: "border-violet-500 shadow-violet-900/20"
  },
  {
    id: 5,
    title: "Viga & Associates",
    category: "Legal / Corporate",
    description: "Minimalist, serif-based identity designed to convey authority and elegance.",
    imageUrl: "/imagenes/viga-preview.png",
    videoUrl: "/videos/viga-concept.mp4",
    colorClasses: "border-slate-400 shadow-slate-700/20"
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
  onOpenModal: (videoUrl: string) => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ project, height, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewConcept = () => {
    onOpenModal(project.videoUrl);
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-xl bg-neutral-900 border-2 transition-all duration-500 hover:scale-105 ${project.colorClasses}`}
      style={{ height }}
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
            View Concept
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export const DesignLab: React.FC = () => {
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  const handleOpenModal = (videoUrl: string) => {
    setModalVideoUrl(videoUrl);
  };

  const handleCloseModal = () => {
    setModalVideoUrl(null);
  };

  return (
    <>
      <section id="design-lab" className="py-24 bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-sm font-bold text-neutral-500 tracking-widest uppercase mb-2">
                UI/UX Experiments
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Design Lab
              </h2>
              <p className="text-neutral-400 mt-4 max-w-2xl">
                A collection of landing page concepts exploring different visual styles and interaction patterns.
              </p>
            </div>
          </Reveal>

          {/* Bento Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row - 2 Large Cards */}
            <div className="md:col-span-1 lg:col-span-2">
              <Reveal width="100%">
                <DesignCard project={designProjects[0]} height="400px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.1}>
                <DesignCard project={designProjects[1]} height="400px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>

            {/* Second Row - 3 Smaller Cards */}
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.2}>
                <DesignCard project={designProjects[2]} height="350px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>
            <div className="md:col-span-1">
              <Reveal width="100%" delay={0.3}>
                <DesignCard project={designProjects[3]} height="350px" onOpenModal={handleOpenModal} />
              </Reveal>
            </div>
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
