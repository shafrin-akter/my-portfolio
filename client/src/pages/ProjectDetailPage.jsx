import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../api/projectApi';
import TechBadge from '../components/projects/TechBadge';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import { formatDate } from '../utils/formatDate';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProject(id);
        setProject(data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!project) return <ErrorMessage message="Project not found" />;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link to="/projects" className="mb-6 inline-block text-sm text-indigo-600 hover:underline">
        &larr; Back to projects
      </Link>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={project.image?.url}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            {project.featured && (
              <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                Featured
              </span>
            )}
          </div>

          <p className="mb-2 text-sm text-gray-500">{formatDate(project.date)}</p>

          <p className="mb-6 text-gray-700 leading-relaxed">{project.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.techStack?.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
