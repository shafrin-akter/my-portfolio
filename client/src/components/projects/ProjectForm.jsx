import { useState } from 'react';

export default function ProjectForm({ initialData, onSubmit, submitting }) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [techStack, setTechStack] = useState(initialData?.techStack?.join(', ') || '');
  const [liveUrl, setLiveUrl] = useState(initialData?.liveUrl || '');
  const [githubUrl, setGithubUrl] = useState(initialData?.githubUrl || '');
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [date, setDate] = useState(
    initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : ''
  );
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('techStack', JSON.stringify(techStack.split(',').map((t) => t.trim()).filter(Boolean)));
    formData.append('liveUrl', liveUrl);
    formData.append('githubUrl', githubUrl);
    formData.append('featured', featured);
    if (date) formData.append('date', date);
    if (image) formData.append('image', image);
    onSubmit(formData);
  };

  const inputClass =
    'mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title *</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description *</label>
        <textarea
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image {initialData ? '(leave empty to keep current)' : '*'}
        </label>
        <input
          type="file"
          accept="image/*"
          required={!initialData}
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-indigo-700 hover:file:bg-indigo-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tech Stack * <span className="font-normal text-gray-400">(comma-separated)</span>
        </label>
        <input
          type="text"
          required
          placeholder="React, Node.js, MongoDB"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Live URL</label>
          <input type="url" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub URL</label>
          <input type="url" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
        </div>
        <div className="flex items-center gap-2 pt-6">
          <input
            id="featured"
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="featured" className="text-sm font-medium text-gray-700">
            Featured project
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
      >
        {submitting ? 'Saving...' : initialData ? 'Update Project' : 'Create Project'}
      </button>
    </form>
  );
}
