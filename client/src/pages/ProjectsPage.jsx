import { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import ProjectGrid from '../components/projects/ProjectGrid';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const { projects, pagination, loading, error } = useProjects({ page });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">All Projects</h1>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ProjectGrid projects={projects} />

          {/* Pagination */}
          {pagination && pagination.pages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {pagination.page} of {pagination.pages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(pagination.pages, p + 1))}
                disabled={page >= pagination.pages}
                className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
