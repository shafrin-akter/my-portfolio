import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Create Account</h1>
        <RegisterForm />
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
