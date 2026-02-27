import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Sign In</h1>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
