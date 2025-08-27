import React, { useState } from 'react';
import { Camera, FileText, Users, Shield, CheckCircle, Upload, AlertTriangle, Smartphone, Menu, X, Mail, Phone, MapPin, Clock, Award, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: Camera,
      title: 'GPS-Stamped Capture',
      description: 'Automatic overlay with time, location, organization, and compliance type. Offline-ready with cloud sync.',
      highlighted: false
    },
    {
      icon: FileText,
      title: 'Policy Storage',
      description: 'GDPR/CCPA compliant document management with automated retention and secure access controls.',
      highlighted: false
    },
    {
      icon: Users,
      title: 'Consent Tracking',
      description: 'Track volunteer consent status, expiration dates, and automated renewal notifications.',
      highlighted: false
    },
    {
      icon: Shield,
      title: 'Incident Reports',
      description: 'Complete incident logging with photo evidence, witness statements, and compliance reporting.',
      highlighted: true
    }
  ];

  const stats = [
    {
      icon: AlertTriangle,
      title: 'Recent SMB Breaches',
      description: '83% of SMBs experienced phishing attacks in 2024, with average costs exceeding $4.3M per incident.',
      color: 'text-red-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile Targeting',
      description: 'Smishing and quishing attacks via SMS and QR codes now account for 70% of successful breaches.',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Training Works',
      description: 'Companies with regular phishing training reduce successful attacks by 87% within 6 months.',
      color: 'text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-xl font-bold">
                <span className="text-white">Audit</span>
                <span className="text-blue-400">Selfie</span>
                <span className="text-xs text-gray-400 ml-1">™</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-blue-400 transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">How It Works</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <div className="text-5xl md:text-6xl font-bold">
              <span className="text-white">Audit</span>
              <span className="text-blue-400">Selfie</span>
              <span className="text-2xl text-gray-400 ml-2">™</span>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
            Take a picture, prove compliance.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            Global compliance & cybersecurity tools for SMBs. GPS-stamped documentation, policy management, and phishing resilience training.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
              Open App Demo
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              GPS-stamped documentation, policy management, and cybersecurity training designed for global SMBs who demand enterprise results.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  feature.highlighted 
                    ? 'bg-blue-900/50 border-blue-500 shadow-xl shadow-blue-500/20' 
                    : 'bg-slate-800/50 border-slate-600 hover:border-slate-500'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  feature.highlighted ? 'bg-blue-600' : 'bg-blue-600'
                }`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bonus Feature Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              ⭐ Bonus Feature Included
            </div>
          </div>

          {/* Advanced Training Section */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
              Advanced Phishing Resilience Training
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Protect your team with enterprise-grade cybersecurity training. Interactive simulations, personalized learning, and certification tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Camera Demo Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try the Camera Demo
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Experience GPS-stamped compliance photography with automatic overlay generation.
          </p>

          {/* Security Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>🔒 100% Offline - No Data Uploaded</span>
            </div>
          </div>

          {/* Camera Demo Card */}
          <div className="bg-slate-800/50 border border-slate-600 rounded-3xl p-12 mb-16">
            <div className="flex items-center justify-center mb-8">
              <Camera className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Compliance Camera Demo</h3>
              <span className="ml-4 bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                Offline Ready
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Start Camera</span>
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Upload Photo</span>
              </button>
            </div>

            <p className="text-gray-400">
              Capture or upload photos with automatic GPS overlay
            </p>
          </div>
        </div>
      </section>

      {/* Phishing Assessment Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Assessment Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              🎯 Free Team Assessment
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Test Your Team's Phishing Awareness
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Recent attacks on SMBs have increased 300%. Don't let your team become the next victim. Take our interactive assessment to identify vulnerabilities and get certified protection.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto bg-slate-700`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{stat.title}</h3>
                <p className="text-gray-300 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Assessment Interface */}
          <div className="bg-slate-800/50 border border-slate-600 rounded-3xl p-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm">
                Question {currentQuestion}/3
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-64 bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentQuestion / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {correctAnswers} correct
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-slate-700 rounded-2xl p-12 mb-8">
                <h3 className="text-2xl text-white mb-4">Sample Assessment Question</h3>
                <p className="text-gray-300">
                  Interactive phishing simulation questions would appear here to test your team's cybersecurity awareness and response capabilities.
                </p>
              </div>
              
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => {
                  if (currentQuestion < 3) {
                    setCurrentQuestion(currentQuestion + 1);
                    setCorrectAnswers(correctAnswers + 1);
                  }
                }}
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About AuditSelfie™
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing compliance documentation for small and medium businesses worldwide. 
              Our GPS-stamped photography and cybersecurity training platform helps organizations maintain 
              enterprise-grade compliance standards without enterprise-level complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Democratize enterprise-grade compliance tools for SMBs, making regulatory adherence 
                simple, affordable, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where every business, regardless of size, can maintain the highest standards 
                of compliance and cybersecurity with confidence and ease.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Security-first design, user privacy protection, and transparent compliance 
                processes that build trust between businesses and their stakeholders.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Trusted by SMBs Worldwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our streamlined process makes compliance documentation and cybersecurity training 
              effortless for your team. Get started in minutes, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-slate-600"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Setup & Configure</h3>
              <p className="text-gray-300 leading-relaxed">
                Quick 5-minute setup. Configure your organization details, compliance requirements, 
                and team permissions. No technical expertise required.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-slate-600"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Capture & Document</h3>
              <p className="text-gray-300 leading-relaxed">
                Use our GPS-stamped camera to document compliance activities. Automatic overlay 
                generation with time, location, and compliance metadata.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Report & Analyze</h3>
              <p className="text-gray-300 leading-relaxed">
                Generate comprehensive compliance reports, track team training progress, 
                and maintain audit-ready documentation automatically.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Features Walkthrough</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">GPS-Stamped Photography</h4>
                    <p className="text-gray-300">Automatic location and timestamp overlay on all compliance photos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Policy Management</h4>
                    <p className="text-gray-300">GDPR/CCPA compliant document storage with automated retention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Consent Tracking</h4>
                    <p className="text-gray-300">Monitor volunteer consent status and automated renewal notifications</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Incident Reports</h4>
                    <p className="text-gray-300">Complete incident logging with photo evidence and witness statements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Phishing Training</h4>
                    <p className="text-gray-300">Interactive cybersecurity simulations and certification tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Compliance Reports</h4>
                    <p className="text-gray-300">Automated report generation for audits and regulatory requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your compliance processes? Get in touch with our team for a 
              personalized demo or to discuss your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">hello@auditselfie.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">123 Compliance Street<br />San Francisco, CA 94105</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Business Hours</div>
                      <div className="text-gray-300">Mon-Fri: 9AM-6PM PST<br />24/7 Support Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">Schedule a Demo</h3>
                <p className="text-blue-100 mb-6">
                  See AuditSelfie in action with a personalized 30-minute demo tailored to your business needs.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book Demo Call
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-slate-600 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your compliance needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div className="text-2xl font-bold">
              <span className="text-white">Audit</span>
              <span className="text-blue-400">Selfie</span>
              <span className="text-sm text-gray-400 ml-1">™</span>
            </div>
          </div>
          <p className="text-gray-400 mb-6">
            Enterprise-grade compliance and cybersecurity solutions for modern SMBs.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <button className="hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-blue-400 transition-colors">Terms of Service</button>
            <button className="hover:text-blue-400 transition-colors">Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;