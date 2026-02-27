import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-2 text-6xl font-bold text-gray-900">404</h1>
        <p className="mb-6 text-gray-600">Page not found</p>
        <Link
          to="/"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
