import React, { useState } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import './AhamMoments.css';
import { useNavigate } from "react-router-dom";

const AhamMoments = () => {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const workImages = [
    {
      url: '/img/ahamMoments/problem-solving.webp',
      alt: 'Team Discussion',
      caption: 'Collaborative problem-solving'
    },
    {
      url: '/img/ahamMoments/Ideas-taking.webp',
      alt: 'Brainstorm Board',
      caption: 'Ideas taking shape'
    },
    {
      url: '/img/ahamMoments/Working-together.webp',
      alt: 'Team Collaboration',
      caption: 'Working together'
    },
    {
      url: '/img/ahamMoments/daily-workspace.webp',
      alt: 'Workspace Vibe',
      caption: 'Our daily workspace'
    },
    {
      url: '/img/ahamMoments/Planning.webp',
      alt: 'Brainstorm Session',
      caption: 'Planning the next big thing'
    },
    {
      url: '/img/ahamMoments/Spontaneous.webp',
      alt: 'Candid Collaboration',
      caption: 'Spontaneous moments of innovation'
    }
    // {
    //         url: '/img/ahamMoments/Shared-goals.png',
    //         alt: "Leadership & Guidance",
    //         caption: "Shared goals, shared direction"
    //         },
    //         {
    //        url: '/img/ahamMoments/Always-growing.png',
    //         alt: "Learning & Growth",
    //         caption: "Always growing, always improving"
    //         }
  ];

  const celebrationImages = [
    {
     url: '/img/ahamMoments/Dummy/Building-growth.webp',
      alt: 'Team High-Five',
      caption: 'Celebrating wins together'
    },
    {
       url: '/img/ahamMoments/Dummy/Business-analytics.webp',
      alt: 'Team Toast',
      caption: 'Cheers to success'
    },
    {
       url: '/img/ahamMoments/Dummy/Corporate-governance.webp',
      alt: 'Office Social',
      caption: 'Building connections'
    },
    {
       url: '/img/ahamMoments/Dummy/Mentorship.webp',
      alt: 'Office Party',
      caption: 'Festival celebrations'
    },
    {
       url: '/img/ahamMoments/Dummy/Team-celebration.webp',
      alt: 'Fun Moments',
      caption: 'Fun Friday vibes'
    },
    {
       url: '/img/ahamMoments/Dummy/Workplace-fun.webp',
      alt: 'Team Gathering',
      caption: 'After-work bonding'
    }
  ];

  const growthImages = [
    {
      url: '/img/ahamMoments/Dummy/Training-session.webp',
      alt: 'Professional Training',
      caption: 'Learning together'
    },
    {
     url: '/img/ahamMoments/Dummy/Performance-metrics.webp',
      alt: 'Workshop',
      caption: 'Brainstorming sessions'
    },
    {
      url: '/img/ahamMoments/Dummy/Business-analytics.webp',
      alt: 'Planning Workshop',
      caption: 'Strategic planning'
    },
    {
      url: '/img/ahamMoments/Spontaneous.webp',
      alt: 'Team Collaboration',
      caption: 'Knowledge sharing'
    },
    {
      url: '/img/ahamMoments/problem-solving.webp',
      alt: 'Tech Talk',
      caption: 'Industry insights'
    },
    {
      url: '/img/ahamMoments/Planning.webp',
      alt: 'Training Session',
      caption: 'Skill development'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const GallerySection = ({ title, description, images, theme }) => (
    <section className={`gallery-section theme-${theme}`}>
      <div className="section-container">
        <div className="section-header centered">
          <h2 className="section-title">{title}</h2>
          <p className="section-description">{description}</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image-wrapper">
                <img src={image.url} alt={image.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="aham-moments">
      {/* Hero Banner */}
     <section
          className="moments-hero bg-cover h-[60vh] bg-center bg-no-repeat w-full"
          style={{ backgroundImage: "url('/img/Banners/Gallery.webp')" }}>

          {/* DARK OVERLAY FOR OPACITY */}
            <div className="absolute inset-0 bg-black/60"></div>


        <div className="hero-content">
          <h1 className="hero-title">Aham Moments</h1>
          <p className="hero-tagline">
            Celebrating the people, the energy, and the everyday stories that make Aham feel like home.
          </p>
        </div>
      </section>

      {/* Work in Motion Section */}
      <GallerySection
        title="Where Ideas Come Alive"
        description="Work at Aham is dynamic, collaborative, and built on trust. Every conversation, every sketch, every whiteboard moment — it's all part of building something meaningful together."
        images={workImages}
        theme="work"
      />

      {/* Celebrations Section */}
      <GallerySection
        title="We Celebrate Together"
        description="We believe joy is fuel. Festivals, birthdays, milestones, and spontaneous laughter — these are the threads that shape our culture and remind us that work can be joyful too."
        images={celebrationImages}
        theme="celebration"
      />

      {/* Growth Section */}
      <GallerySection
        title="Growing, Learning, Becoming"
        description="Aham is not just a workplace. It's a journey. We learn from each other, challenge each other, and rise together — building not just careers, but confidence and character."
        images={growthImages}
        theme="growth"
      />

      {/* CTA Section */}
      <section className="moments-cta">
        <div className="cta-container">
          <h2 className="cta-heading">Want to be part of these moments?</h2>
          <p className="cta-text">Join our team and create your own story at Aham.</p>
          <div className="cta-buttons">
            {/* <Button className="cta-primary">View Open Positions</Button> */}
            <Button 
            variant="outline" 
            className="cta-secondary"
            onClick={() => navigate('/careers')}>
             Contact 
              </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.alt} />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AhamMoments;