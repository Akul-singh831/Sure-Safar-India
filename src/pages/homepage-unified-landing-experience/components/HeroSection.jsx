import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userType, setUserType] = useState('tourist');

  const heroSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Taj Mahal, Agra",
      subtitle: "Protected by AI surveillance"
    },
    {
      id: 2,
      image: "https://images.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1920.jpg",
      title: "Kerala Backwaters",
      subtitle: "24/7 safety monitoring"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Rajasthan Heritage",
      subtitle: "Real-time protection network"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides?.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <Image
              src={slide?.image}
              alt={slide?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          </div>
        ))}
      </div>
      {/* Safety Overlay Indicators */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-success rounded-full animate-pulse-soft shadow-lg">
          <div className="absolute inset-0 bg-success rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse-soft shadow-lg">
          <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-secondary rounded-full animate-pulse-soft shadow-lg">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        {/* User Type Toggle */}
        <div className="mb-8 flex justify-center">
          <div className="bg-card/90 backdrop-blur-md rounded-full p-1 border border-border shadow-medium">
            <button
              onClick={() => setUserType('tourist')}
              className={`px-6 py-2 rounded-full transition-smooth font-medium ${
                userType === 'tourist' ?'bg-primary text-primary-foreground shadow-soft' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="MapPin" size={16} className="inline mr-2" />
              Tourist
            </button>
            <button
              onClick={() => setUserType('responder')}
              className={`px-6 py-2 rounded-full transition-smooth font-medium ${
                userType === 'responder' ?'bg-primary text-primary-foreground shadow-soft' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="Shield" size={16} className="inline mr-2" />
              Responder
            </button>
          </div>
        </div>

        {/* Dynamic Headlines */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            India's <span className="gradient-primary bg-clip-text text-transparent">Invisible</span> Safety Net
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6">
            Powered by <span className="text-accent">Visible Innovation</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {userType === 'tourist' 
              ? "Experience India with confidence. Our AI-powered safety network protects you invisibly while you explore the incredible diversity of our nation."
              : "Empower your emergency response with real-time intelligence, instant coordination, and AI-assisted decision making for faster, more effective interventions."
            }
          </p>
        </div>

        {/* Dynamic CTAs */}
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {userType === 'tourist' ? (
            <>
              <Button 
                variant="default" 
                size="lg" 
                iconName="Download" 
                iconPosition="left"
                className="text-lg px-8 py-4 shadow-strong hover-glow"
              >
                Download SafeGuard App
              </Button>
              <Link to="/trust-security-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Play" 
                  iconPosition="left"
                  className="text-lg px-8 py-4"
                >
                  See How It Works
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/responder-command-dashboard">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="Activity" 
                  iconPosition="left"
                  className="text-lg px-8 py-4 shadow-strong hover-glow"
                >
                  Access Command Center
                </Button>
              </Link>
              <Link to="/trust-security-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  iconName="Lock" 
                  iconPosition="left"
                  className="text-lg px-8 py-4"
                >
                  Security Protocols
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Current Slide Info */}
        <div className="bg-card/80 backdrop-blur-md rounded-lg px-6 py-3 inline-flex items-center space-x-3 border border-border shadow-medium">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
          <span className="text-sm font-medium text-text-primary">
            Currently Protecting: {heroSlides?.[currentSlide]?.title}
          </span>
          <span className="text-xs text-text-secondary">
            {heroSlides?.[currentSlide]?.subtitle}
          </span>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex justify-center space-x-2">
          {heroSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentSlide 
                  ? 'bg-primary shadow-medium' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-sm font-medium">Explore Features</span>
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;