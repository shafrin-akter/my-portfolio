import { useState, useEffect } from 'react';
import { getProjects } from '../../api/projectApi';

export default function DashboardPage() {
  const [stats, setStats] = useState({ total: 0, featured: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const all = await getProjects(1, 1);
        const feat = await getProjects(1, 1);
        setStats({
          total: all.pagination?.total || 0,
          featured: feat.pagination?.total || 0,
        });
      } catch {
        // stats are non-critical
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Total Projects</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Featured Projects</p>
          <p className="mt-2 text-3xl font-bold text-indigo-600">{stats.featured}</p>
        </div>
      </div>
    </div>
  );
}
