import { useState } from 'react';
import { Camera, User, Briefcase, Phone, Mail, MapPin, Code, Database, Languages, Trophy, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Sports from './Sports';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Camera },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Works', icon: Briefcase },
    { id: 'sports', label: 'Sports', icon: Trophy },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-green-400">VK</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-green-500 text-black font-semibold' 
                      : 'text-green-300 hover:text-green-400 hover:bg-green-500/10'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-black/50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-green-400">...Keerthika</span>
              <span className="text-white block">Vijayakumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-300 mb-8 max-w-3xl mx-auto">
              3rd Year Computer Science Engineering Student | Passionate Photographer | Web Developer
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Driven by curiosity and creativity, I aspire to grow as a software engineer while leveraging my passion
               for photography to bring a unique design perspective to every project I work on.
            </p>
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Discover My Work
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Camera className="text-green-400" size={32} />
        </div>
      </section>

      {/* About Section - Technical Focus */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-green-900/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-400 mb-6">TECHNICAL PROFILE</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              3rd Year Computer Science Engineering Student at Kongu Engineering College
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                    <Code className="mr-2" size={20} />
                    Programming Languages
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>C Programming</span>
                      <span className="text-green-400">Advanced</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Java</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>JavaScript</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Python</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                    <Database className="mr-2" size={20} />
                    Web Technologies
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>HTML/CSS</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>React.js</span>
                      <span className="text-green-400">Basic</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Node.js</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MongoDB</span>
                      <span className="text-green-400">Basic</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SQL</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
                    <Languages className="mr-2" size={20} />
                    Languages Known
                  </h4>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Tamil</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="text-green-400">Intermediate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Academic Background</h4>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-semibold text-white">Computer Science Engineering</p>
                      <p>Kongu Engineering College, Perundurai</p>
                      <p className="text-green-400">3rd Year Student</p>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm">
                        Passionate about software development, machine learning, and system design.
                        Eager to apply theoretical knowledge in practical projects and contribute
                        to innovative technology solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Technical Focus with Images */}
      <section id="projects" className="py-20 bg-gradient-to-b from-green-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-400 mb-6">TECHNICAL PROJECTS</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A showcase of projects where I’ve turned ideas into code—combining logic, 
              design, and passion for building meaningful software.
            </p>
          </div>
          
          <div className="space-y-12">
            <Card className="bg-gradient-to-r from-white/95 to-gray-100/95 border-green-500/40 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Real-time Weather Forecasting System</h3>
                    <p className="text-black text-lg leading-relaxed">
                      Developed a comprehensive web application for real-time weather monitoring and forecasting.
                      Features include location-based weather data, 7-day forecasts, interactive maps, and
                      responsive design optimized for all devices.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-gray-800 font-semibold">Key Features:</h4>
                      <ul className="text-black space-y-2">
                        <li>• Real-time weather data integration using OpenWeather API</li>
                        <li>• Geolocation-based automatic location detection</li>
                        <li>• Interactive weather maps and visualizations</li>
                        <li>• Responsive design with mobile-first approach</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">HTML</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">JavaScript</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">API Integration</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">CSS3</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="public/lovable-uploads/wheater.png" 
                      alt="Weather Forecasting System"
                      className="w-48 h-48 object-cover rounded-xl border-2 border-green-500/50 shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-white/95 to-gray-100/95 border-green-500/40 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Fall Detection System for Elderly people</h3>
                    <p className="text-black text-lg leading-relaxed">
                      Engineered an IoT-based fall detection system using machine learning algorithms for elderly care.
                      Integrated hardware sensors with software processing for real-time monitoring and emergency
                      alert systems with 95% accuracy rate.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-gray-800 font-semibold">Technical Implementation:</h4>
                      <ul className="text-black space-y-2">
                        <li>• Accelerometer and gyroscope sensor integration</li>
                        <li>• Machine learning model training with TensorFlow</li>
                        <li>• Real-time data processing and pattern recognition</li>
                        <li>• Emergency notification system with SMS/Email alerts</li>
                        <li>• Mobile app interface for monitoring and configuration</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Python</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Machine Learning</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">IoT</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">TensorFlow</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">ESP32</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="public/lovable-uploads/fd.jpg" 
                      alt="Fall Detection System"
                      className="w-48 h-48 object-cover rounded-xl border-2 border-green-500/50 shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-white/95 to-gray-100/95 border-green-500/40 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">GameOn – Free Fire Landing Page UI</h3>
                    <p className="text-black text-lg leading-relaxed">
                      Designed and developed a visually dynamic, responsive landing page clone for the popular battle royale game Free Fire, 
                      using modern web technologies. Focused on user experience, animation, and theme consistency to recreate
                       an engaging game showcase experience.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-gray-800 font-semibold">Technical Implementation:</h4>
                      <ul className="text-black space-y-2">
                        <li>• Custom layout created using semantic HTML5</li>
                        <li>• Fully responsive design using CSS Flexbox and media queries</li>
                        <li>• Vibrant purple-themed UI inspired by Free Fire’s branding</li>
                        <li>• Styled interactive buttons for “Play Now” and “Watch Gameplay”</li>
                        <li>• Hero section with game characters and promotional content layout</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">HTML5</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">CSS3</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Responsive Design</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">UI Cloning</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Game UI Aesthetics</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="public/lovable-uploads/FREEFIRE.png" 
                      alt="Fall Detection System"
                      className="w-48 h-48 object-cover rounded-xl border-2 border-green-500/50 shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-white/95 to-gray-100/95 border-green-500/40 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Disaster Community Management Platform</h3>
                    <p className="text-black text-lg leading-relaxed">
                      Built a full-stack web application for disaster relief coordination and community response management.
                      Implemented user authentication, real-time communication, resource tracking, and volunteer
                      coordination systems with scalable architecture.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-gray-800 font-semibold">System Architecture:</h4>
                      <ul className="text-black space-y-2">
                        <li>• Frontend: React.js with responsive UI components</li>
                        <li>• Backend: Node.js with Express.js framework</li>
                        <li>• Database: MongoDB with efficient data modeling</li>
                        <li>• Real-time disaster maps using LeafLet</li>
                        <li>• JWT-based authentication and authorization</li>
                        <li>• RESTful API design with comprehensive documentation</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">React.js</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">MongoDB</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Express.js</span>
                      <span className="px-4 py-2 bg-green-500/30 text-green-800 rounded-full text-sm font-medium">Leaflet</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="public/lovable-uploads/disaster.png" 
                      alt="Disaster Management Platform"
                      className="w-48 h-48 object-cover rounded-xl border-2 border-green-500/50 shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section id="sports" className="py-20 bg-gradient-to-b from-black to-purple-900/30">
        <Sports />
      </section>

      {/* Gallery Section with Instagram */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-purple-900/30 to-green-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-400 mb-6">PHOTOGRAPHY GALLERY</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
              A collection of moments captured through my lens, showcasing my passion for photography 
              and visual storytelling. Each frame tells a unique story.
            </p>
            <div className="text-center">
              <p className="text-green-300 text-lg font-semibold">
                Follow my photography journey: 
                <a 
  href="https://www.instagram.com/_novagraphy_/?hl=en" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <span className="text-green-400 ml-2 hover:underline hover:text-green-500">
    @_novagraphy_
  </span>
</a>

              </p>
              <p className="text-gray-400 text-sm mt-2">
                Connect with me on Instagram for daily photography updates and behind-the-scenes content
              </p>
            </div>
          </div>
          
          {/* Featured Large Image */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/514d48f3-3aab-48e9-b4e5-fa6d5028911c.png"
                alt="Featured photography - Golden hour capture"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Golden Hour Magic</h3>
                <p className="text-gray-300">Capturing the perfect light during nature's most beautiful moments</p>
              </div>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-xl overflow-hidden group">
              <img 
                src="/lovable-uploads/0027eccc-ac8f-4f9b-a784-515641c2dc6b.png"
                alt="Black and white cat portrait - Fine art photography"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 group-hover:brightness-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group">
              <img 
                src="/lovable-uploads/11cca568-a710-4a32-9b34-9d5d76811937.png"
                alt="Pink flower with morning dew - Macro photography"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 group-hover:brightness-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group">
              <img 
                src="/lovable-uploads/5f8ee248-e415-43ab-bc30-3e19ce61b449.png"
                alt="Mesmerizing cat eye close-up"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 group-hover:brightness-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden md:col-span-2 group">
              <img 
                src="/lovable-uploads/299c82fa-fbc9-4c9b-8b77-ac988bc49ff8.png"
                alt="Golden hour silhouette - Landscape photography"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 group-hover:brightness-110"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group">
              <img 
                src="/lovable-uploads/cf3e3672-8503-4cf6-a30e-42e7e955f2da.png"
                alt="Water drop creating ripples - Abstract photography"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 group-hover:brightness-110"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              "Photography is the art of capturing light, emotion, and the fleeting moments that make life beautiful."
            </p>
            <p className="text-green-300 font-semibold mt-4">- VK</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-green-900/30 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-green-400 mb-6">CONTACT ME</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Let's connect and discuss opportunities in technology, photography, or collaboration.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-400 rounded-3xl p-8 md:p-12 text-black">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Let's Work Together</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-green-800" size={24} />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p>+91 9003476777</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Mail className="text-green-800" size={24} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm">keerthikav.23cse@kongu.edu</p>
                        <p className="text-sm">vkeerthika03@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-green-800" size={24} />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p>Kongu Engineering College</p>
                        <p>Perundurai, Erode</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-green-800">
                      Instagram: @_novagraphy_
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-green-500 rounded-full flex items-center justify-center">
                    <Camera className="text-green-900" size={80} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-green-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Keerthika V. All rights reserved.</p>
          <p className="text-green-400 text-lg font-bold mt-2">VK</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
