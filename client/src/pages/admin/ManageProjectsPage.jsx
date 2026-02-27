import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../../api/projectApi';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import toast from 'react-hot-toast';

export default function ManageProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    try {
      const data = await getProjects(1, 100);
      setProjects(data.data);
    } catch {
      toast.error('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete "${title}"?`)) return;
    try {
      await deleteProject(id);
      toast.success('Project deleted');
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch {
      toast.error('Delete failed');
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Manage Projects</h1>
        <Link
          to="/admin/projects/new"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          + Add Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Image</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Title</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Featured</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Tech</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {projects.map((project) => (
                <tr key={project._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <img
                      src={project.image?.url}
                      alt=""
                      className="h-10 w-16 rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{project.title}</td>
                  <td className="px-4 py-3 text-sm">
                    {project.featured ? (
                      <span className="rounded bg-green-100 px-2 py-0.5 text-xs text-green-700">Yes</span>
                    ) : (
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">No</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {project.techStack?.slice(0, 3).join(', ')}
                    {project.techStack?.length > 3 && '...'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        to={`/admin/projects/${project._id}/edit`}
                        className="rounded bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 hover:bg-indigo-100 transition-colors"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(project._id, project.title)}
                        className="rounded bg-red-50 px-3 py-1 text-xs font-medium text-red-700 hover:bg-red-100 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
