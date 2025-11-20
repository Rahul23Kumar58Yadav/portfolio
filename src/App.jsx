import React, { useState, useEffect, createContext, useContext } from "react";
import {
  Camera,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Calendar,
  Tag,
  Search,
  Filter,
  ArrowRight,
  Zap,
  Award,
  Users,
  Briefcase,
  Download,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import "./App.css";

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// Project Data
const projectsData = [
  {
    id: 1,
    title: "DeepFake Detection for Evidence",
    description:
      "A full-stack system that detects deepfake audio and video for use in legal and forensic environments. It uses AI models, signal processing, and web technologies to classify whether media is Real or Fake with confidence scores.",
    category: "AI",
    date: "2025-11",
    techStack: [
      "React",
      "Vite",
      "Python",
      "Flask",
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "MesoNet",
      "EfficientNet",
      "Audio Spectrogram + Transformer Models",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github:
      "https://github.com/Rahul23Kumar58Yadav/DeepFake-Detection-For-Evidence",
    demo: "https://demo.example.com",
    featured: true,
    features: [
      "Video DeepFake Detection (CNN / EfficientNet models)",
      "Audio Fake Detection (Spectrogram + Transformer models)",
      "Confidence Score Output",
      "Supports MP4, WAV, MP3 and more",
      "Batch testing mode for datasets",
      "Evidence-oriented results for digital forensics",
    ],
  },
  {
    id: 2,
    title: "Blogging Platform",
    description:
      "A full-stack MERN blogging platform where users can create, edit, publish, and manage blog posts. Includes authentication, rich text editing, search functionality, and responsive UI design.",
    category: "Web App",
    date: "2025-08",
    techStack: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React Hooks",
      "Context API",
      "Git",
      "GitHub",
    ],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
    github: "https://github.com/Rahul23Kumar58Yadav/Blogging-Plateform",
    demo: "https://demo.example.com",
    featured: false,
    features: [
      "Secure User Authentication (Signup/Login/Logout)",
      "Create, Edit, and Delete Blog Posts",
      "Rich Text Editor with Formatting Tools",
      "Responsive UI Design for all devices",
      "Search Blogs by Keyword",
      "Comment System (Optional/If implemented)",
    ],
  },
  {
    id: 3,
    title: "Excel Analytics Platform",
    description:
      "A web-based analytics platform that lets users upload Excel files, explore data, and generate interactive visualizations. Built for ease of use, it demonstrates strong skills in frontend development, data processing, visualization, and UI design.",
    category: "Web App",
    date: "2025-09",
    techStack: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "Recharts",
      "Git",
      "GitHub",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "https://github.com/Rahul23Kumar58Yadav/Excel-Analytics-Dashboard",
    demo: "https://demo.example.com",
    featured: true,
    features: [
      "Upload Excel (.xlsx) or CSV Files",
      "Interactive Data Visualization",
      "Filtering & Sorting Tools",
      "Responsive Design for all Devices",
      "Simple and User-Friendly Interface",
    ],
  },
  {
    id: 4,
    title: "Health Calculators Platform",
    description:
      "A collection of interactive health and fitness calculators built using React. This platform includes BMI, BMR, Body Fat, Body Shape, Calorie, and Diabetes calculators — each designed with accurate formulas and clean UI for quick health assessments.",
    category: "Health / Web App",
    date: "2025-04",
    techStack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Git",
      "GitHub",
    ],
    image: "https://plus.unsplash.com/premium_photo-1666299677059-54f840ab8fa0",
    github: "https://github.com/Rahul23Kumar58Yadav/Health-Calculators",
    demo: "https://demo.example.com",
    featured: false,
    features: [
      "BMI Calculator",
      "BMR Calculator",
      "Body Fat Calculator",
      "Body Shape Calculator",
      "Calorie Calculator",
      "Diabetes Risk Calculator",
      "Clean and Responsive UI",
      "Fast and Lightweight Components",
    ],
  },
  {
    id: 5,
    title: "SmartResume Generator",
    description:
      "A Streamlit-based web application that generates professional resumes using Google Generative AI. Users can enter their name and job title, preview the AI-generated resume, and download it as a text file.",
    category: "AI / Web App",
    date: "2025-02",
    techStack: [
      "Streamlit",
      "Python",
      "Google Generative AI",
      "Environment Variables",
      "Git",
      "GitHub",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    github: "https://github.com/Rahul23Kumar58Yadav/Smart-Resume-Generator",
    demo: "https://demo.example.com",
    featured: false,
    features: [
      "AI-Powered Resume Generation",
      "User-Friendly Streamlit Interface",
      "Download Resume as Text File",
      "Custom Inputs (Name, Job Title)",
      "Secure API Key Handling",
    ],
  },
  {
    id: 6,
    title: "Fake News Detection System",
    description:
      "An AI-powered system that detects whether a news article is Real or Fake using machine learning and natural language processing. The platform analyzes article text, extracts linguistic patterns, and predicts authenticity with confidence scores.",
    category: "AI / NLP",
    date: "2025-11",
    techStack: [
      "Python",
      "Scikit-learn",
      "TensorFlow / PyTorch",
      "NLTK / SpaCy",
      "Pandas",
      "NumPy",
      "React.js (if frontend used)",
      "Flask / FastAPI",
      "Git",
      "GitHub",
    ],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    github: "https://github.com/Rahul23Kumar58Yadav/Fake-News-Detection",
    demo: "https://demo.example.com",
    featured: true,
    features: [
      "Machine Learning–Based Fake News Classification",
      "NLP Preprocessing (Tokenization, Lemmatization, Stopword Removal)",
      "TF-IDF / Word Embedding Feature Extraction",
      "Real vs Fake Prediction with Confidence Score",
      "Dataset Training & Evaluation",
      "Optional Web Interface for Input & Results",
    ],
  },
];

// Scroll Reveal Hook
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Button Component
const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  icon,
}) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo" onClick={() => setCurrentPage("Home")}>
            <div className="logo-icon-wrapper">
              <Code className="logo-icon" />
            </div>
            <span className="logo-text">Portfolio</span>
          </div>

          <div className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`nav-link ${currentPage === item ? "active" : ""}`}
              >
                {item}
              </button>
            ))}
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="nav-mobile">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCurrentPage(item);
                setMobileMenuOpen(false);
              }}
              className={`mobile-link ${currentPage === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <Code className="footer-logo-icon" />
              <h3 className="footer-title">Rahul Kumar Yadav</h3>
            </div>
            <p className="footer-text">
              Full Stack Developer (MERN) & AI Enthusiast. Building innovative solutions with modern technologies. Let's create something amazing together.
            </p>
            <div className="social-links">
              <a 
                href="https://github.com/Rahul23Kumar58Yadav" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rahul-kumar-yadav-5a18392b2" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:kryadavrahul@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/Rahul23Kumar58Yadav" 
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links" style={{ listStyle: 'none' }}>
              <li 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentPage("Home");
                  window.scrollTo(0, 0);
                }}
              >
                <ArrowRight size={16} /> Home
              </li>
              <li 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentPage("About");
                  window.scrollTo(0, 0);
                }}
              >
                <ArrowRight size={16} /> About
              </li>
              <li 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentPage("Projects");
                  window.scrollTo(0, 0);
                }}
              >
                <ArrowRight size={16} /> Projects
              </li>
              <li 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentPage("Contact");
                  window.scrollTo(0, 0);
                }}
              >
                <ArrowRight size={16} /> Contact
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <ArrowRight size={16} /> Web Development
              </li>
              <li>
                <ArrowRight size={16} /> AI & ML Solutions
              </li>
              <li>
                <ArrowRight size={16} /> Full Stack (MERN)
              </li>
              <li>
                <ArrowRight size={16} /> UI/UX Design
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <p className="footer-text-small">Have a project in mind? Let's talk!</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button 
                className="newsletter-btn"
                onClick={() => setCurrentPage("Contact")}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rahul Kumar Yadav. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a 
              href="https://github.com/Rahul23Kumar58Yadav"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-kumar-yadav-5a18392b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const HomePage = ({ setCurrentPage }) => {
  const [ref, isVisible] = useScrollReveal();
  const [ref2, isVisible2] = useScrollReveal();

  return (
    <div className="page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Rahul Kumar Yadav</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer(MERN) & AI Enthusiast
            </p>
            <p className="hero-description">
              Full Stack Developer (MERN) specializing in building secure, high-performance web applications and AI-powered 
solutions. I combine modern frontend design with strong backend engineering, working across React, Node.js, 
MongoDB, Python, and cloud tools to create real-world, scalable digital products.
            </p>
            <div className="hero-buttons">
              <Button
                variant="primary"
                icon={<ArrowRight size={20} />}
                onClick={() => setCurrentPage("Projects")}
              >
                View My Work
              </Button>
              <a href="/rahul2_resume.pdf" download>
                <Button variant="outline">
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
            <div className="hero-tech-stack">
              <span className="tech-stack-label">Tech Stack:</span>
              <div className="tech-stack-icons">
                {["React", "Python", "Node.js", "TensorFlow", "MongoDB"].map(
                  (tech, i) => (
                    <span key={i} className="tech-stack-item">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      <section ref={ref} className={`features ${isVisible ? "visible" : ""}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              Specialized services to bring your ideas to life
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: Code,
                title: "Web Development",
                desc: "Building responsive and performant web applications using modern frameworks and best practices",
                color: "blue",
              },
              {
                icon: Camera,
                title: "AI & ML",
                desc: "Creating intelligent solutions with machine learning algorithms and neural networks",
                color: "purple",
              },
              {
                icon: Zap,
                title: "UI/UX Design",
                desc: "Designing beautiful and intuitive user experiences that delight and engage users",
                color: "pink",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`feature-card feature-card-${item.color} delay-${
                  i + 1
                }`}
              >
                <div className="feature-icon-wrapper">
                  <item.icon className="feature-icon" size={32} />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
                <button className="feature-link">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ref2}
        className={`featured-projects ${isVisible2 ? "visible" : ""}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of my recent work</p>
          </div>
          <div className="featured-grid">
            {projectsData
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((project, i) => (
                <div
                  key={project.id}
                  className={`featured-project-card delay-${i + 1}`}
                >
                  <div className="featured-project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="featured-project-overlay">
                      <button className="overlay-btn">
                        View Project <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="featured-project-content">
                    <span className="featured-project-category">
                      {project.category}
                    </span>
                    <h3 className="featured-project-title">{project.title}</h3>
                    <p className="featured-project-desc">
                      {project.description}
                    </p>
                    <div className="featured-project-tech">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="section-cta">
            <Button
              variant="outline"
              onClick={() => setCurrentPage("Projects")}
              icon={<ArrowRight size={20} />}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = () => {
  const [ref1, isVisible1] = useScrollReveal();
  const [ref2, isVisible2] = useScrollReveal();
  const [ref3, isVisible3] = useScrollReveal();

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "JavaScript (ES6+)", level: 90, category: "Frontend" },
    { name: "Node.js & Express.js", level: 85, category: "Backend" },
    { name: "MongoDB & MySQL", level: 82, category: "Database" },
    { name: "TensorFlow & PyTorch", level: 75, category: "AI / Machine Learning" },
    { name: "MERN Stack", level: 88, category: "Full Stack" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Blockchain Course Certified",
      company: "NPTEL — Ministry of Education",
      desc: "Completed certification in Blockchain fundamentals, smart contracts, and decentralized systems.",
      current: false,
    },
    {
      year: "2024",
      title: "Web Development Intern",
      company: "Teachnook",
      desc: "Contributed to frontend and full-stack projects, strengthening practical development and teamwork skills.",
      current: false,
    },
    {
      year: "2025",
      title: "Web Development Intern",
      company: "Zidio Development",
      desc: "Worked on real-world client projects, building responsive UIs and improving backend APIs.",
      current: false,
    },
  ];

  const achievements = [
    {
      icon: <Award />,
      title: "Blockchain Certification",
      desc: "NPTEL – Ministry of Education, Govt. of India",
    },
    {
      icon: <TrendingUp />,
      title: "Web Development Intern",
      desc: "Teachnook — Frontend & Full-Stack Projects",
    },
    {
      icon: <Star />,
      title: "Web Development Intern",
      desc: "Zidio Development — Real-world Client Projects",
    },
  ];

  return (
    <div className="page about-page">
      <div className="container">
        <div className="about-hero">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Passionate about building digital experiences that make a difference
          </p>
        </div>

        <div
          ref={ref1}
          className={`intro-section ${isVisible1 ? "visible" : ""}`}
        >
          <div className="intro-grid">
            <div className="intro-image">
              <img
                src="rahul.jpg"
                alt="Profile"
              />
              <div className="intro-image-badge">
                <CheckCircle size={20} />
                <span>Available for hire</span>
              </div>
            </div>
            <div className="intro-content">
              <h2 className="intro-heading">Hello! I'm Rahul</h2>
              <p className="intro-text">
                I'm a passionate full-stack developer with hands-on experience in building modern web applications and AI-powered
                solutions. My journey in tech started with a curiosity about how
                things work, and it has evolved into a career focused on
                creating impactful digital experiences.
              </p>
              <p className="intro-text">
                I specialize in React, Node.js, Python, and machine learning
                technologies. When I'm not coding, you'll find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge through technical writing and mentoring.
              </p>
              <div className="intro-stats">
                <div className="intro-stat">
                  <div className="intro-stat-value">1+</div>
                  <div className="intro-stat-label">Years Experience</div>
                </div>
                <div className="intro-stat">
                  <div className="intro-stat-value">10+</div>
                  <div className="intro-stat-label">Projects Done</div>
                </div>
                <div className="intro-stat">
                  <div className="intro-stat-value">30+</div>
                  <div className="intro-stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={ref2}
          className={`skills-section ${isVisible2 ? "visible" : ""}`}
        >
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-header">
                  <div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: isVisible2 ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <div className="section-header">
            <h2 className="section-title">Achievements & Certifications</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((item, i) => (
              <div key={i} className="achievement-card">
                <div className="achievement-icon">{item.icon}</div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={ref3}
          className={`timeline-section ${isVisible3 ? "visible" : ""}`}
        >
          <div className="section-header">
            <h2 className="section-title">Experience Timeline</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-year">{item.year}</span>
                    {item.current && (
                      <span className="timeline-current">Current</span>
                    )}
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div ref={ref} className={`project-card ${isVisible ? "visible" : ""}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-overlay-content">
            <button className="overlay-btn-ghost">
              <Github size={20} />
            </button>
            <button className="overlay-btn-primary">
              <ExternalLink size={20} />
              View Demo
            </button>
          </div>
        </div>
        {project.featured && (
          <div className="project-featured-badge">Featured</div>
        )}
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-date">
            <Calendar size={14} />
            {new Date(project.date).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-tag">
              <Tag size={12} />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = projectsData
    .filter(
      (p) => selectedCategory === "All" || p.category === selectedCategory
    )
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.techStack.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="page projects-page">
      <div className="container">
        <div className="projects-hero">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            A collection of my recent work showcasing various technologies and
            creative solutions
          </p>
        </div>

        <div className="filters-container">
          <div className="filters">
            <div className="search-wrapper">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="date">Latest First</option>
              <option value="name">A-Z</option>
            </select>
          </div>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-btn ${
                  selectedCategory === cat ? "active" : ""
                }`}
              >
                {cat}
                <span className="category-count">
                  {cat === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <>
            <div className="projects-count">
              Showing <strong>{filteredProjects.length}</strong>{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">
              <Filter size={64} />
            </div>
            <h3>No projects found</h3>
            <p>Try adjusting your search terms or filters</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("UkSMDR-6L-LyzoeOV");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_mkczo9b",  // Service ID
        "template_0ige6k4", // Template ID
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);
      setSending(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ from_name: "", from_email: "", subject: "", message: "" });
      }, 3000);

    } catch (error) {
      console.error("Email send failed:", error);
      setError("Failed to send message. Please try again.");
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "kryadavrahul@gmail.com",
      href: "mailto:kryadavrahul@gmail.com",
      color: "blue",
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "@rahul",
      href: "https://github.com/Rahul23Kumar58Yadav/Fake-News-Detection",
      color: "dark",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "@rahul",
      href: "https://www.linkedin.com/in/rahul-kumar-yadav-5a18392b2",
      color: "linkedin",
    },
  ];

  return (
    <div className="page contact-page">
      <div className="container">
        <div className="contact-hero">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="contact-grid">
          <div
            ref={ref}
            className={`contact-form-wrapper ${isVisible ? "visible" : ""}`}
          >
            <div className="contact-form-card">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <h2>Send me a message</h2>
                    <p>
                      Fill out the form below and I'll get back to you as soon
                      as possible
                    </p>
                  </div>
                  {error && (
                    <div style={{
                      padding: '12px',
                      background: '#fee',
                      border: '1px solid #fcc',
                      borderRadius: '8px',
                      color: '#c33',
                      marginBottom: '20px'
                    }}>
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Name *</label>
                        <input
                          type="text"
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleChange}
                          required
                          placeholder="Ram"
                          disabled={sending}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          type="email"
                          name="from_email"
                          value={formData.from_email}
                          onChange={handleChange}
                          required
                          placeholder="ram@example.com"
                          disabled={sending}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Discussion"
                        disabled={sending}
                      />
                    </div>
                    <div className="form-group">
                      <label>Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project..."
                        disabled={sending}
                      />
                    </div>
                    <Button
                      variant="primary"
                      className="submit-btn"
                      icon={<ArrowRight size={20} />}
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className={`contact-info ${isVisible ? "visible" : ""}`}>
            <div className="contact-card">
              <h3 className="contact-heading">Contact Information</h3>
              <p className="contact-text">
                Feel free to reach out through any of these channels
              </p>
              <div className="contact-methods">
                {contactMethods.map((method, i) => (
                  <a
                    key={i}
                    href={method.href}
                    className="contact-method"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`contact-icon contact-icon-${method.color}`}>
                      {method.icon}
                    </div>
                    <div>
                      <p className="method-label">{method.label}</p>
                      <p className="method-value">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-card">
              <div className="availability-header">
                <div className="availability-status">
                  <span className="status-dot"></span>
                  <span>Available for work</span>
                </div>
              </div>
              <h3>Let's Work Together</h3>
              <p>
                I'm currently available for freelance projects and full-time
                positions. Let's create something amazing together!
              </p>
              <div className="availability-features">
                <div className="availability-feature">
                  <CheckCircle size={16} />
                  <span>Quick response time</span>
                </div>
                <div className="availability-feature">
                  <CheckCircle size={16} />
                  <span>Flexible working hours</span>
                </div>
                <div className="availability-feature">
                  <CheckCircle size={16} />
                  <span>Remote & on-site</span>
                </div>
              </div>
              <div className="tech-tags">
                {["React", "Python", "AI/ML", "Node.js", "AWS"].map(
                  (tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="working-hours-card">
              <h4>Working Hours</h4>
              <div className="working-hours">
                <div className="working-hour">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="working-hour">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="working-hour">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "About":
        return <AboutPage />;
      case "Projects":
        return <ProjectsPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">{renderPage()}</main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
};

export default App;