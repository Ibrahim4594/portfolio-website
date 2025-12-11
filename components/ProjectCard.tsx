interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  image,
}: ProjectCardProps) {
  return (
    <div className="hacker-card overflow-hidden group">
      <div className="h-48 bg-black border-b border-[#00ff00]/30 flex items-center justify-center relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="grid-bg absolute inset-0 opacity-20"></div>
        )}
        {!image && <p className="text-[#00ff00]/30 font-mono text-sm relative z-10">{'>'} PROJECT_VISUAL</p>}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00ff00] transition-colors font-mono">{title}</h3>
        <p className="text-white/60 mb-6 text-xs leading-relaxed font-mono">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="skill-tag px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 hacker-btn text-xs"
            >
              DEMO
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 hacker-btn-secondary text-xs"
            >
              CODE
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
