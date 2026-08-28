'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './components.module.css';
import { 
  ExternalLink, 
  Github, 
  X, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  ArrowRight, 
  Layout, 
  Cpu, 
  Activity, 
  Server, 
  Check, 
  Calendar,
  Users,
  CreditCard,
  SlidersHorizontal,
  ShoppingBag,
  UserCheck
} from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  overview: string;
  tech: string[];
  features: string[];
  cardFeatures: string[];
  techHighlights: {
    title: string;
    description: string;
    icon: any;
  }[];
  image: string;
  category: string;
  accentColor: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 'dental-clinic',
    title: 'Dental Clinic Management System',
    subtitle: 'Healthcare Workflow & Billing Portal',
    desc: 'Developed a clinic management system for managing patients, appointments, doctors, treatments, and billing.',
    overview: 'A robust clinical operations management application designed to automate patient intake, treatment record keeping, appointment schedules, doctor duty allocations, and billing invoices through intuitive, responsive dashboards.',
    tech: ['React.js', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase', 'JWT'],
    cardFeatures: [
      'Patient & Appointment Management',
      'Doctor & Treatment Schedules',
      'Billing Management & Invoices',
      'Role-Based Authentication (JWT)',
      'Responsive Interactive Dashboards'
    ],
    features: [
      'Patient management & medical history tracking',
      'Appointment management with scheduling conflict resolution',
      'Doctor management with specialty allocations',
      'Treatment management and procedure history logging',
      'Billing management & automated invoice generation',
      'Role-based authentication securing staff & doctor access',
      'RESTful APIs for seamless client-server data synchronization',
      'Responsive dashboards for real-time clinic analytics',
      'Database-driven workflows for end-to-end clinical operations'
    ],
    techHighlights: [
      {
        title: 'Role-Based Authentication & Authorization',
        description: 'Implemented secure JWT token authentication with role-based access control (RBAC) ensuring doctor, staff, and admin permissions are strictly isolated.',
        icon: ShieldCheck
      },
      {
        title: 'High-Performance RESTful APIs',
        description: 'Engineered clean RESTful API endpoints using Python and FastAPI for fast async query processing and patient record transactions.',
        icon: Server
      },
      {
        title: 'Responsive Executive Dashboards',
        description: 'Crafted dynamic desktop and mobile-responsive dashboards using Next.js & React.js with live schedule updates and revenue metrics.',
        icon: Layout
      },
      {
        title: 'Database-Driven Clinical Workflows',
        description: 'Architected relational data models in PostgreSQL & Supabase to enforce data integrity across treatments, appointments, and billing tables.',
        icon: Database
      }
    ],
    image: '/project-dental-clinic.jpg',
    category: 'Healthcare SaaS',
    accentColor: '#06b6d4',
    github: 'https://github.com/alanbabu10/dental-management-system',
    demo: '#'
  },
  {
    id: 'home-service',
    title: 'Home Service Booking Platform',
    subtitle: 'Multi-Portal On-Demand Service Platform',
    desc: 'Built a complete home service booking platform with separate user, employee, and admin modules.',
    overview: 'A full-stack multi-module marketplace connecting customers with verified home service technicians. Features tailored portals for service discovery, dispatch management, technician job tracking, and administrative control.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    cardFeatures: [
      'User, Employee & Admin Modules',
      'Secure JWT Authentication',
      'Service Booking Management',
      'Admin Control Dashboard',
      'Responsive Mobile-First UI'
    ],
    features: [
      'User module for browsing, booking, and managing home service requests',
      'Employee module for technicians to accept, update, and complete assigned tasks',
      'Admin module with full system oversight, service categorization, and metrics',
      'Secure authentication enforcing encrypted JWT session management',
      'Service booking management handling scheduling, status changes, and dispatch',
      'Admin dashboard for monitoring system health, active bookings, and revenue',
      'Responsive interface optimized for seamless use on smartphones and desktops'
    ],
    techHighlights: [
      {
        title: 'Multi-Module Architecture',
        description: 'Designed 3 distinct modules (User, Employee, Admin) with context-aware interfaces tailored to specific user operational roles.',
        icon: Users
      },
      {
        title: 'Secure Authentication & Sessions',
        description: 'Integrated robust JSON Web Token (JWT) session handling protecting private booking endpoints and user credentials.',
        icon: ShieldCheck
      },
      {
        title: 'Node.js & Express.js REST Services',
        description: 'Built scalable backend micro-routes for high-concurrency booking actions, status webhooks, and technician dispatch.',
        icon: Cpu
      },
      {
        title: 'MongoDB NoSQL Schema & Indexing',
        description: 'Modeled flexible document collections in MongoDB for dynamic service catalog metadata and nested booking status histories.',
        icon: Database
      }
    ],
    image: '/project-home-service.jpg',
    category: 'Marketplace Platform',
    accentColor: '#f97316',
    github: 'https://github.com/alanbabu10/HomeService',
    demo: '#'
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Web Application',
    subtitle: 'Dynamic Retail & Shopping Application',
    desc: 'Developed a responsive e-commerce web application with product filtering, shopping cart functionality, and user authentication.',
    overview: 'A full-featured online shopping application providing consumers with instant search filtering, real-time cart persistence, secure user accounts, and database-driven product inventory management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    cardFeatures: [
      'Dynamic Product Filtering & Search',
      'Interactive Stateful Shopping Cart',
      'User Authentication & Profiles',
      'Database Product Management',
      'Responsive Mobile & Desktop Design'
    ],
    features: [
      'Product listing with high-resolution visual previews and category displays',
      'Product filtering by price range, brand, category, and ratings',
      'Shopping cart functionality with real-time quantity controls and order summaries',
      'User authentication allowing secure login, sign up, and saved account states',
      'Responsive design adapting smoothly to mobile browsers, tablets, and desktops',
      'Database-driven product management powering dynamic catalog updates and queries'
    ],
    techHighlights: [
      {
        title: 'Interactive Client State & Cart Engine',
        description: 'Developed persistent state management in React.js for instantaneous cart updates, item additions, and real-time total calculations.',
        icon: ShoppingBag
      },
      {
        title: 'Dynamic Multi-Attribute Product Filtering',
        description: 'Created responsive client-side and API filtering logic to slice products seamlessly across multiple category parameters.',
        icon: SlidersHorizontal
      },
      {
        title: 'Database-Driven Product Catalog',
        description: 'Structured MongoDB schemas for rapid product queries, inventory tracking, and seamless document updates.',
        icon: Database
      },
      {
        title: 'REST APIs & JWT Auth Integration',
        description: 'Connected Express.js backend services with JWT authentication to protect customer checkout workflows and user account data.',
        icon: Server
      }
    ],
    image: '/project-ecommerce-app.jpg',
    category: 'E-Commerce Web App',
    accentColor: '#10b981',
    github: 'https://github.com/alanbabu10/react-ecommerce',
    demo: '#'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className={styles.section} style={{ padding: '8rem 2rem' }}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '4.5rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1.2rem',
              borderRadius: '999px',
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.25)',
              color: '#ec4899',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
            }}
          >
            <Sparkles size={16} />
            Featured Software Projects
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: 1.15
            }}
          >
            Production-Grade <span className="neon-text-pink">Applications</span>
          </h2>
          
          <p
            style={{
              color: '#94a3b8',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            Real-world full-stack web applications featuring secure authentication, RESTful APIs, 
            responsive dashboards, multi-module permissions, and database-driven workflows.
          </p>
        </motion.div>

        {/* 3 Project Cards Grid */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${styles.glassCard}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              style={{
                background: 'rgba(15, 23, 42, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              {/* Thumbnail Container */}
              <div 
                style={{ 
                  position: 'relative', 
                  height: '230px', 
                  overflow: 'hidden',
                  cursor: 'pointer' 
                }}
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%)',
                    pointerEvents: 'none'
                  }}
                />
                
                {/* Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'rgba(2, 6, 23, 0.8)',
                    border: `1px solid ${project.accentColor}55`,
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span 
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: project.accentColor,
                      boxShadow: `0 0 10px ${project.accentColor}` 
                    }} 
                  />
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.projectContent} style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 
                  className={styles.projectTitle} 
                  style={{ 
                    color: '#ffffff', 
                    fontSize: '1.45rem', 
                    fontWeight: 800, 
                    marginBottom: '0.4rem',
                    lineHeight: 1.3
                  }}
                >
                  {project.title}
                </h3>
                
                <p 
                  style={{ 
                    color: project.accentColor, 
                    fontSize: '0.86rem', 
                    fontWeight: 600, 
                    marginBottom: '1rem',
                    letterSpacing: '0.5px'
                  }}
                >
                  {project.subtitle}
                </p>

                <p 
                  className={styles.projectDesc} 
                  style={{ 
                    color: '#94a3b8', 
                    lineHeight: 1.65, 
                    fontSize: '0.94rem', 
                    marginBottom: '1.5rem',
                    flexShrink: 0
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech Stack Badges */}
                <div 
                  className={styles.projectTags} 
                  style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.45rem', 
                    marginBottom: '1.5rem' 
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={styles.tag}
                      style={{
                        padding: '0.3rem 0.7rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Feature Highlights Bullet List */}
                <div 
                  style={{ 
                    marginBottom: '2rem', 
                    paddingTop: '1rem', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)' 
                  }}
                >
                  <p 
                    style={{ 
                      fontSize: '0.8rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px', 
                      color: '#64748b', 
                      fontWeight: 700, 
                      marginBottom: '0.75rem' 
                    }}
                  >
                    Key Highlights
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {project.cardFeatures.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                        <CheckCircle2 size={15} style={{ color: project.accentColor, flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Bar */}
                {project.github && (
                  <div 
                    style={{ 
                      marginTop: 'auto', 
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        width: '100%',
                        padding: '0.75rem 1.2rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#cbd5e1',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.color = '#cbd5e1';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <Github size={18} />
                      <span>View GitHub Code</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Project View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              overflowY: 'auto'
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(2, 6, 23, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                zIndex: 1
              }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                background: '#0b1329',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '28px',
                overflowY: 'auto',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8)',
                color: '#ffffff'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  zIndex: 10,
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(2, 6, 23, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(2, 6, 23, 0.75)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Hero Banner */}
              <div style={{ position: 'relative', height: '280px', width: '100%', overflow: 'hidden' }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(11, 19, 41, 0.2) 0%, #0b1329 100%)'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '32px',
                    right: '32px'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: selectedProject.accentColor,
                      color: '#000',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '0.6rem'
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <h3 
                    id="modal-title"
                    style={{ 
                      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
                      fontWeight: 900, 
                      color: '#ffffff',
                      lineHeight: 1.2
                    }}
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content Sections */}
              <div style={{ padding: '2rem 2.5rem 3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                {/* Section 1: Project Overview */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <Layout size={20} style={{ color: selectedProject.accentColor }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      Project Overview
                    </h4>
                  </div>
                  <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.02rem', margin: 0 }}>
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Section 2: Key Features */}
                <div style={{ padding: '1.8rem', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                    <CheckCircle2 size={20} style={{ color: selectedProject.accentColor }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      Key Features
                    </h4>
                  </div>
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                      gap: '1rem' 
                    }}
                  >
                    {selectedProject.features.map((feat, idx) => (
                      <div 
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          padding: '0.8rem 1rem',
                          borderRadius: '12px',
                          background: 'rgba(15, 23, 42, 0.6)',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <span 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            background: `${selectedProject.accentColor}25`,
                            color: selectedProject.accentColor,
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: '2px'
                          }}
                        >
                          <Check size={13} />
                        </span>
                        <span style={{ color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.5 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Technology Stack */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <Layers size={20} style={{ color: selectedProject.accentColor }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      Technology Stack
                    </h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                    {selectedProject.tech.map((t) => (
                      <div
                        key={t}
                        style={{
                          padding: '0.5rem 1.1rem',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,
                          border: `1px solid ${selectedProject.accentColor}44`,
                          color: '#ffffff',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: selectedProject.accentColor }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 4: Technical Highlights */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
                    <Cpu size={20} style={{ color: selectedProject.accentColor }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      Technical Highlights
                    </h4>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.2rem' }}>
                    {selectedProject.techHighlights.map((hl, idx) => {
                      const HighlightIcon = hl.icon;
                      return (
                        <div
                          key={idx}
                          style={{
                            padding: '1.4rem',
                            borderRadius: '16px',
                            background: 'rgba(15, 23, 42, 0.7)',
                            border: '1px solid rgba(255, 255, 255, 0.07)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.6rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <div 
                              style={{ 
                                padding: '8px', 
                                borderRadius: '10px', 
                                background: `${selectedProject.accentColor}20`, 
                                color: selectedProject.accentColor 
                              }}
                            >
                              <HighlightIcon size={18} />
                            </div>
                            <h5 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                              {hl.title}
                            </h5>
                          </div>
                          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                            {hl.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div 
                  style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
                    paddingTop: '1.8rem',
                    marginTop: '0.5rem'
                  }}
                >
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.8rem 1.6rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    >
                      <Github size={18} />
                      View Source Code
                    </a>
                  )}

                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.8rem 1.6rem',
                        borderRadius: '12px',
                        background: selectedProject.accentColor,
                        color: '#000000',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <ExternalLink size={18} />
                      Live Application Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

