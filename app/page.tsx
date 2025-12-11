import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Gallery from '@/components/Gallery';
import MatrixRain from '@/components/MatrixRain';
import TypingEffect from '@/components/TypingEffect';
import BootSequence from '@/components/BootSequence';
import SystemStats from '@/components/SystemStats';

export default function Home() {
  const skills = [
    { category: "AI & Agents", items: ["Agentic AI", "Multi-Agent Systems", "LLMs (Gemini, OpenAI)", "LangChain", "RAG Systems"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"] },
    { category: "Backend", items: ["Python", "FastAPI", "Express.js", "Elasticsearch", "RESTful APIs"] },
    { category: "Tools & Cloud", items: ["Git", "Docker", "AWS/GCP", "CI/CD", "WebGL"] },
  ];

  const projects = [
    {
      title: "AI-Driven Development - Complete Guide",
      description: "Interactive educational platform teaching modern software development using AI-powered tools and LLMs. Features 8 comprehensive chapters, 40 quizzes, interactive flashcards, and AI chatbot with progress tracking.",
      technologies: ["React", "TypeScript", "FastAPI", "Docusaurus", "OpenAI", "Gemini"],
      demoLink: "https://ibrahim4594.github.io/ai-driven-book/",
      githubLink: "https://github.com/Ibrahim4594/ai-driven-book",
      image: "/project.jpg",
    },
    {
      title: "Invoice Processing Specialist Agent",
      description: "Autonomous AI agent for intelligent invoice processing with fraud detection, vendor verification, and risk assessment. Delivers 96% time reduction and $483K+ annual savings through automated decision-making.",
      technologies: ["Python", "Gemini 2.0", "LangChain", "UiPath", "Pydantic"],
      githubLink: "https://github.com/Ibrahim4594/invoice-processing-specialist-agent",
      image: "/invoice-project.jpg",
    },
    {
      title: "ResearchGenie - Personal Research Concierge",
      description: "AI-powered multi-agent research assistant with 7 specialized agents that search the web, analyze documents, synthesize information, and fact-check findings using Google Gemini 2.0 Flash.",
      technologies: ["Python", "Gemini 2.0", "Pydantic", "BeautifulSoup4", "PDFPlumber"],
      githubLink: "https://github.com/Ibrahim4594/ResearchGenie",
      image: "/research-genie.jpg",
    },
    {
      title: "BloomSphere - NASA Space App Challenge",
      description: "Enterprise platform leveraging NASA satellite data to detect and monitor global plant blooming events. Processes multispectral imagery from MODIS, Landsat, and VIIRS to compute vegetation indices and forecast bloom patterns.",
      technologies: ["Python", "NASA MODIS", "Landsat", "VIIRS", "Machine Learning"],
      demoLink: "https://bloom-watch-viz-ibrahimsamad.replit.app/",
      githubLink: "https://github.com/Ibrahim4594/Bloom-Sphere---Nasa-Space-App-Challenge-",
      image: "/bloomsphere.png",
    },
    {
      title: "CYBER-3D-FORGE",
      description: "AI-powered web application for converting text descriptions into interactive 3D models with cyberpunk-themed interface. Features real-time WebGL rendering, GPU acceleration, and augmented reality preview capabilities.",
      technologies: ["Three.js", "Meshy AI", "Tripo AI", "WebGL", "JavaScript"],
      githubLink: "https://github.com/Ibrahim4594/CYBER-3D-FORGE",
      image: "/cyber-3d-forge.jpg",
    },
    {
      title: "Neural RX - AI Healthcare Search",
      description: "Winner of Elastic + Google Cloud Hackathon. Intelligent healthcare platform combining Elasticsearch hybrid search with Google Gemini AI for conversational medical information discovery. Features voice input, chat export, and sub-8-second response times.",
      technologies: ["React", "TypeScript", "Elasticsearch", "Gemini AI", "Express.js"],
      githubLink: "https://github.com/Ibrahim4594/Neural-RX",
      image: "/neural-rx.jpg",
    },
  ];

  const gallerySections = [
    {
      title: "Winner HBL Pasha ICT AWARDS 2025",
      images: [
        "/gallery/hbl.jpg",
        "/gallery/hbl2.jpg",
        "/gallery/hbl3.jpg",
        "/gallery/hbl4.jpg",
        "/gallery/hblpic.jpg",
        "/gallery/vid.mp4",
      ],
    },
    {
      title: "FINALIST_UNITED_NATIONS_SDG_3",
      images: [
        "/gallery/un (2nd).jpg",
      ],
    },
    {
      title: "NASA Space Ambassador and Global Nominee",
      images: [
        "/gallery/nasa 1.jpg",
        "/gallery/nasa 2.jpg",
        "/gallery/nasa3.jpg",
        "/gallery/badge.jpg",
      ],
    },
    {
      title: "Gold Medal- D2D competition",
      images: [
        "/gallery/michigan/12.jpg",
        "/gallery/michigan/13.jpg",
        "/gallery/michigan/14.jpg",
        "/gallery/utech 1st.jpg",
        "/gallery/emu.jpg",
        "/gallery/emu2.png",
      ],
    },
    {
      title: "Utech Digital Education",
      images: [
        "/gallery/utech certificates/1.jpg",
        "/gallery/utech certificates/2nd.jpg",
        "/gallery/utech certificates/3d.jpg",
        "/gallery/utech certificates/4.jpg",
        "/gallery/utech certificates/5.jpg",
        "/gallery/utech certificates/6.jpg",
        "/gallery/utech certificates/7.jpg",
        "/gallery/utech certificates/8.jpg",
        "/gallery/utech certificates/9.jpg",
        "/gallery/utech certificates/10.jpg",
        "/gallery/utech certificates/11.jpg",
        "/gallery/utech certificates/13.jpg",
      ],
    },
    {
      title: "Award Winner - Science Olympiad",
      images: [
        "/gallery/new sci.jpg",
      ],
    },
    {
      title: "Gold Medalist Taekwondo",
      images: [
        "/gallery/takwendo gold.jpg",
        "/gallery/takwendo.jpg",
      ],
    },
    {
      title: "Google Cloud & Kaggle",
      images: [
        "/gallery/gen ai.jpg",
        "/gallery/goggle cloud.jpg",
        "/gallery/goggle kaggle1.jpg",
        "/gallery/goggle kaggle2.jpg",
        "/gallery/goggle cloud machine certificate.jpg",
      ],
    },
    {
      title: "Nvidia",
      images: [
        "/gallery/unreal engine.jpg",
        "/gallery/unreal engine 2.jpg",
        "/gallery/nvidia3.jpg",
        "/gallery/nvidia gmail.jpg",
      ],
    },
    {
      title: "MCP & Hugging Face Official Certificate",
      images: [
        "/gallery/mcp.jpg",
      ],
    },
    {
      title: "Cisco Certifications",
      images: [
        "/gallery/cisco/1.jpg",
        "/gallery/cisco/2.jpg",
        "/gallery/cisco/3.jpg",
        "/gallery/cisco/4.jpg",
        "/gallery/cisco/5.jpg",
        "/gallery/cisco/6.jpg",
        "/gallery/cisco/8.jpg",
        "/gallery/cisco/9.jpg",
        "/gallery/cisco/10.jpg",
        "/gallery/cisco/11.jpg",
        "/gallery/cisco/WhatsApp Image 2025-11-17 at 23.16.10_15e48967.jpg",
      ],
    },
    {
      title: "Outstanding Performance - LabLab - Arc",
      images: [
        "/gallery/arc.jpg",
        "/gallery/arc2.jpg",
      ],
    },
    {
      title: "Official Scratch Certificate",
      images: [
        "/gallery/scratch.jpg",
      ],
    },
    {
      title: "SkillUp",
      images: [
        "/gallery/skillup.jpg",
      ],
    },
    {
      title: "Code Alpha Internship and Certificates",
      images: [
        "/gallery/code alpha.jpg",
        "/gallery/code alpha 2.jpg",
        "/gallery/code alpha .jpg",
        "/gallery/internship.jpg",
      ],
    },
  ];

  return (
    <div>
      {/* Boot Sequence */}
      <BootSequence />

      {/* Matrix Rain Background - Global */}
      <MatrixRain />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen hacker-section flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full z-10">
          <div className="flex flex-col items-start justify-center min-h-[80vh]">
            <div className="mb-6 terminal-prompt">
              <span className="terminal-text text-sm tracking-wider uppercase flicker">
                <TypingEffect text="$ initializing_portfolio.exe" speed={80} />
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-mono">
              {'>'} <TypingEffect text="I'm " speed={100} /><span className="terminal-text glow-green-text hologram drop-shadow-[0_0_25px_rgba(0,255,0,0.8)]">IBRAHIM_SAMAD</span>
            </h1>

            <p className="text-2xl sm:text-3xl text-white/90 mb-10 font-mono max-w-4xl font-bold">
              <span className="terminal-text hologram drop-shadow-[0_0_20px_rgba(0,255,0,0.6)]">AGENTIC_AI_EXPERT</span>
            </p>

            <div className="flex flex-wrap gap-3 mb-12 max-w-4xl">
              {["Agentic AI", "Multi-Agent Systems", "LLMs", "Python", "React", "TypeScript", "Machine Learning", "Gemini AI", "Cloud Computing", "Cybersecurity"].map((skill) => (
                <span key={skill} className="skill-tag px-4 py-2 text-xs">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 mb-16 text-sm font-mono code-block p-6 rounded-lg border border-[#00ff00]/30 bg-black/60 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="terminal-text">[✓]</span>
                <span className="text-white">WINNER_HBL_P@SHA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="terminal-text">[✓]</span>
                <span className="text-white">FINALIST_UNITED_NATIONS_SDG_3</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="terminal-text">[✓]</span>
                <span className="text-white">GOLD_MEDALIST_MICHIGAN_D2D_COMPETITION</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="terminal-text">[✓]</span>
                <span className="text-white">NASA_SPACE_AMBASSADOR_&_GLOBAL_NOMINEE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="terminal-text">[✓]</span>
                <span className="text-white">UTECH_SENIOR_AMBASSADOR_&_INSTRUCTOR</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#projects"
                className="group hacker-btn px-10 py-5 text-sm rounded-md"
              >
                {'>'} VIEW_PROJECTS
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="hacker-btn-secondary px-10 py-5 text-sm rounded-md"
              >
                {'>'} CONTACT_ME
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen terminal-section py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="mb-20">
            <span className="terminal-text text-sm tracking-wider uppercase terminal-prompt">about.sh</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4 font-mono">
              {'>'} <span className="terminal-text">ABOUT_ME</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff00] to-transparent glow-green rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div className="flex items-center justify-center">
              <div className="w-80 h-80 rounded-full terminal-border neon-border bg-black flex items-center justify-center overflow-hidden relative">
                <img
                  src="/profile-pic.jpg"
                  alt="Ibrahim Samad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="terminal-text glow-green-text">AGENTIC_AI_ARCHITECT</span>
              </h3>

              <p className="text-base text-white/70 leading-relaxed font-mono">
                {'>'} I'm Ibrahim Samad, an Agentic AI Architect committed to creating intelligent systems that empower humanity. My mission is to build AI that heals, educates, and transforms lives.
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-bold terminal-text font-mono">{'>'} 🏆_ACHIEVEMENTS</h4>

                <div className="text-sm text-white/70 leading-relaxed font-mono space-y-2">
                  <p>{'>'} <span className="terminal-text">1st Place Winner</span> — HBL P@SHA ICT Awards</p>
                  <p>{'>'} <span className="terminal-text">Gold Medal</span> — Michigan University's D2D Competition</p>
                  <p>{'>'} <span className="terminal-text">Finalist</span> — United Nations SDG Challenge</p>
                  <p>{'>'} <span className="terminal-text">NASA Space Ambassador</span>, Global Nominee & Outstanding Participant</p>
                  <p>{'>'} <span className="terminal-text">Bronze Medalist</span> — Global CodeStorm Hackathon</p>
                  <p>{'>'} <span className="terminal-text">Honor Award</span> — Neo Science Olympiad</p>
                  <p>{'>'} <span className="terminal-text">Senior Ambassador & Instructor</span> — UTech</p>
                  <p>{'>'} <span className="terminal-text">Gold Medalist</span> — Taekwondo Championship</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-12 font-mono">
              <span className="terminal-text">SKILLS</span> <span className="text-white/60">&&</span> <span className="terminal-text">TECH_STACK</span>
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="hacker-card p-6">
                  <h4 className="text-lg font-bold terminal-text mb-6 font-mono">
                    {'>'} {skillGroup.category}
                  </h4>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-white/70 flex items-center font-mono text-sm">
                        <span className="text-[#00ff00] mr-3">$</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen hacker-section py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="mb-20">
            <span className="terminal-text text-sm tracking-wider uppercase terminal-prompt">ls projects/</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-mono">
              {'>'} <span className="terminal-text">FEATURED_PROJECTS</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff00] to-transparent glow-green rounded-full mb-6"></div>
            <p className="text-base text-white/70 max-w-3xl font-mono">
              {'>'} Showcasing: AI-Powered Solutions | Multi-Agent Systems | Healthcare Tech | NASA Projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative min-h-screen terminal-section py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="mb-20">
            <span className="terminal-text text-sm tracking-wider uppercase terminal-prompt">cat achievements.log</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-mono">
              {'>'} <span className="terminal-text">GALLERY</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff00] to-transparent glow-green rounded-full mb-6"></div>
            <p className="text-base text-white/70 max-w-3xl font-mono">
              {'>'} Loading: Award-Winning Achievements | International Certifications | Competition Victories
            </p>
          </div>

          <Gallery sections={gallerySections} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen hacker-section py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="mb-20">
            <span className="terminal-text text-sm tracking-wider uppercase terminal-prompt">contact.sh</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-mono">
              {'>'} <span className="terminal-text">GET_IN_TOUCH</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00ff00] to-transparent glow-green rounded-full mb-6"></div>
            <p className="text-base text-white/70 max-w-3xl font-mono">
              {'>'} Open for: AI Projects | Freelance Work | Collaboration Opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-bold text-white mb-8 font-mono">
                <span className="terminal-text">$</span> send_message
              </h3>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-8 font-mono">
                <span className="terminal-text">$</span> contact_info
              </h3>

              <div className="space-y-6">
                <div className="hacker-card p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/30">
                        <svg className="w-6 h-6 text-[#00ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xs text-white/50 mb-1 font-mono">EMAIL</h4>
                      <a href="mailto:ibrahimsamad507@gmail.com" className="text-[#00ff00] hover:underline font-mono text-sm">ibrahimsamad507@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="hacker-card p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/30">
                        <svg className="w-6 h-6 text-[#00ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xs text-white/50 mb-1 font-mono">LOCATION</h4>
                      <p className="text-white font-mono text-sm">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="hacker-card p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/30">
                        <svg className="w-6 h-6 text-[#00ff00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xs text-white/50 mb-1 font-mono">GITHUB</h4>
                      <a href="https://github.com/Ibrahim4594" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:underline font-mono text-sm">
                        github.com/Ibrahim4594
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hacker-card p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/30">
                        <svg className="w-6 h-6 text-[#00ff00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xs text-white/50 mb-1 font-mono">LINKEDIN</h4>
                      <a href="https://www.linkedin.com/in/ibrahim-samad-525240342/" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:underline font-mono text-sm">
                        linkedin.com/in/ibrahim-samad
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hacker-card p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#00ff00]/10 flex items-center justify-center border border-[#00ff00]/30">
                        <svg className="w-6 h-6 text-[#00ff00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xs text-white/50 mb-1 font-mono">FACEBOOK</h4>
                      <a href="https://www.facebook.com/ibrahim.aiwala" target="_blank" rel="noopener noreferrer" className="text-[#00ff00] hover:underline font-mono text-sm">
                        facebook.com/ibrahim.aiwala
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 hacker-card p-8 border-[#00ff00]/50">
                <h4 className="text-base font-bold terminal-text mb-3 font-mono">
                  {'>'} STATUS: AVAILABLE
                </h4>
                <p className="text-white/70 font-mono text-sm">
                  Currently open for AI/ML projects, agentic systems development, and tech collaborations. Based in Karachi, Pakistan. Available for remote work worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/60 border-t-2 border-[#00ff00]/30 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[2]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[#00ff00] font-bold font-mono mb-4">{'>'} IBRAHIM_SAMAD</h3>
              <div className="text-white/60 font-mono text-xs space-y-2">
                <p>ROLE: Agentic AI Architect</p>
                <p>LOCATION: Karachi, Pakistan</p>
                <p>SPECIALIZATION: AI Systems</p>
                <p>STATUS: Available for Work</p>
              </div>
            </div>
            <div>
              <h3 className="text-[#00ff00] font-bold font-mono mb-4">{'>'} CONNECT</h3>
              <div className="text-white/60 font-mono text-xs space-y-2">
                <a href="https://github.com/Ibrahim4594" target="_blank" rel="noopener noreferrer" className="block hover:text-[#00ff00] transition-colors">$ GitHub →</a>
                <a href="https://www.linkedin.com/in/ibrahim-samad-525240342/" target="_blank" rel="noopener noreferrer" className="block hover:text-[#00ff00] transition-colors">$ LinkedIn →</a>
                <a href="https://www.facebook.com/ibrahim.aiwala" target="_blank" rel="noopener noreferrer" className="block hover:text-[#00ff00] transition-colors">$ Facebook →</a>
                <a href="mailto:ibrahimsamad507@gmail.com" className="block hover:text-[#00ff00] transition-colors">$ Email →</a>
              </div>
            </div>
            <div>
              <h3 className="text-[#00ff00] font-bold font-mono mb-4">{'>'} TECH_STACK</h3>
              <div className="text-white/60 font-mono text-xs space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-[#00ff00]">[●]</span> Agentic AI
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00ff00]">[●]</span> Python & React
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00ff00]">[●]</span> LLMs (Gemini, OpenAI)
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00ff00] pulse-green">[●]</span> Full-Stack Development
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#00ff00]/20 pt-8 text-center">
            <p className="text-white/60 font-mono text-xs">
              {'>'} © {new Date().getFullYear()} IBRAHIM SAMAD | AGENTIC AI ARCHITECT | Built with Next.js & TypeScript
            </p>
            <p className="text-[#00ff00]/40 font-mono text-xs mt-2">
              // Built with Next.js, React, and Hacker Aesthetics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
