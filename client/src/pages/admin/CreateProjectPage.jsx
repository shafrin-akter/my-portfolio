import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../api/projectApi';
import ProjectForm from '../../components/projects/ProjectForm';
import toast from 'react-hot-toast';

export default function CreateProjectPage() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    try {
      await createProject(formData);
      toast.success('Project created!');
      navigate('/admin/projects');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create project');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Add New Project</h1>
      <div className="max-w-2xl">
        <ProjectForm onSubmit={handleSubmit} submitting={submitting} />
      </div>
    </div>
  );
}
