import { Link } from 'react-router-dom';
import TechBadge from './TechBadge';
import { formatDate } from '../../utils/formatDate';

export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link to={`/projects/${project._id}`}>
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={project.image?.url}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <Link
            to={`/projects/${project._id}`}
            className="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            {project.title}
          </Link>
          {project.featured && (
            <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
              Featured
            </span>
          )}
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600">{project.description}</p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.techStack?.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{formatDate(project.date)}</span>
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
