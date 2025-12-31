import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { ProjectItem } from '../types';
import { ArrowUpRight, Play, X } from 'lucide-react';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "TitanNVR Enterprise",
    category: "Computer Vision / Go / Real-Time",
    description: "Proprietary Video Management System (VMS) engineered with Go and Python. Features real-time object detection, 24/7 recording, and microservices architecture running on Docker.",
    imageUrl: "https://picsum.photos/id/250/800/600",
    size: "large"
  },
  {
    id: 2,
    title: "Headless E-Commerce",
    category: "Microservices / Next.js",
    description: "Scalable e-commerce architecture featuring a separate Admin Dashboard, real-time inventory sync, and AI-driven sales analytics.",
    imageUrl: "/imagenes/E-Commerce.png",
    size: "small"
  },
  {
    id: 3,
    title: "Retail AI Agent",
    category: "AI / Computer Vision / Retail",
    description: "Intelligent retail assistant powered by computer vision and NLP. Automates inventory management, customer analytics, and personalized recommendations in real-time.",
    imageUrl: "imagenes/Retail.png",
    size: "small",
    videoUrl: "/videos/retail-agent-demo.mp4"
  },
  {
    id: 4,
    title: "Industrial IoT Hub",
    category: "IoT / MQTT / React",
    description: "Real-time visualization platform for industrial sensors. Processes high-frequency telemetry data via WebSockets for predictive maintenance.",
    imageUrl: "https://picsum.photos/id/60/800/600",
    size: "large"
  }
];

// ============================================
// ProjectCard Component
// ============================================
interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (videoUrl: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.videoUrl) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && project.videoUrl) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleWatchDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.videoUrl) {
      onOpenModal(project.videoUrl);
    }
  };

  return (
    <div
      className="group relative w-full h-[400px] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Background (hidden by default, shown on hover) */}
      {project.videoUrl && (
        <motion.div
          className="absolute inset-0 w-full h-full z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      {/* Image Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: isHovered && project.videoUrl ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-900/20 dark:bg-black/40 group-hover:bg-neutral-900/60 dark:group-hover:bg-black/70 transition-colors duration-500 z-20" />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out z-30">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white/90 text-sm font-medium mb-1">{project.category}</p>
            <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-neutral-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/* Watch Demo Button (only if has video) */}
            {project.videoUrl && (
              <button
                onClick={handleWatchDemo}
                className="bg-accent p-3 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 delay-100 ease-out hover:bg-accent/80 text-white cursor-pointer shadow-lg flex items-center justify-center"
                aria-label={`Watch demo for ${project.title}`}
              >
                <Play size={20} fill="currentColor" aria-hidden="true" />
              </button>
            )}
            {/* View Project Link */}
            <a
              href={project.link || "#"}
              className="bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 delay-200 ease-out hover:bg-accent text-neutral-900 hover:text-white cursor-pointer shadow-lg flex items-center justify-center"
              aria-label={`View details for ${project.title}`}
            >
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// Cinema Mode Modal Component
// ============================================
interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, isOpen, onClose }) => {
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
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
              ref={modalVideoRef}
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

export const Projects: React.FC = () => {
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  const handleOpenModal = (videoUrl: string) => {
    setModalVideoUrl(videoUrl);
  };

  const handleCloseModal = () => {
    setModalVideoUrl(null);
  };

  return (
    <>
      <section id="work" className="py-24 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-sm font-bold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase mb-2">Selected Works</h3>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
            </div>
          </Reveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <Reveal width="100%">
                  <ProjectCard project={project} onOpenModal={handleOpenModal} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinema Mode Modal */}
      <VideoModal
        videoUrl={modalVideoUrl || ''}
        isOpen={modalVideoUrl !== null}
        onClose={handleCloseModal}
      />
    </>
  );
};