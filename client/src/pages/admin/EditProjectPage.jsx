import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProject, updateProject } from '../../api/projectApi';
import ProjectForm from '../../components/projects/ProjectForm';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import toast from 'react-hot-toast';

export default function EditProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getProject(id);
        setProject(data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    try {
      await updateProject(id, formData);
      toast.success('Project updated!');
      navigate('/admin/projects');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update project');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Edit Project</h1>
      <div className="max-w-2xl">
        <ProjectForm initialData={project} onSubmit={handleSubmit} submitting={submitting} />
      </div>
    </div>
  );
}
