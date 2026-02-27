import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const sidebarLinks = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/projects', label: 'Manage Projects', end: false },
  { to: '/admin/projects/new', label: 'Add Project', end: false },
];

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <aside className="w-64 border-r border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Admin Panel
          </h2>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
