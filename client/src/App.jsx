import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/guards/ProtectedRoute';
import AdminRoute from './components/guards/AdminRoute';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

import DashboardPage from './pages/admin/DashboardPage';
import ManageProjectsPage from './pages/admin/ManageProjectsPage';
import CreateProjectPage from './pages/admin/CreateProjectPage';
import EditProjectPage from './pages/admin/EditProjectPage';

export default function App() {
  return (
    <Routes>
      {/* Portfolio home — standalone layout */}
      <Route index element={<HomePage />} />

      {/* Other public routes with shared layout */}
      <Route element={<MainLayout />}>
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Admin routes — requires auth + admin role */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="admin" element={<DashboardPage />} />
            <Route path="admin/projects" element={<ManageProjectsPage />} />
            <Route path="admin/projects/new" element={<CreateProjectPage />} />
            <Route path="admin/projects/:id/edit" element={<EditProjectPage />} />
          </Route>
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
