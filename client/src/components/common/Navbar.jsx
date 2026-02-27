import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user, isAdmin, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out');
      navigate('/');
    } catch {
      toast.error('Logout failed');
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            Portfolio
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/projects" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Projects
            </Link>

            {isAdmin && (
              <Link to="/admin" className="text-gray-700 hover:text-indigo-600 transition-colors">
                Admin
              </Link>
            )}

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  {user.name}
                  {isAdmin && (
                    <span className="ml-1 rounded bg-indigo-100 px-1.5 py-0.5 text-xs text-indigo-700">
                      admin
                    </span>
                  )}
                </span>
                <button
                  onClick={handleLogout}
                  className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
