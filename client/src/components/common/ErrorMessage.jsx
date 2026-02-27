export default function ErrorMessage({ message }) {
  return (
    <div className="rounded-lg bg-red-50 p-4 text-center text-red-700">
      {message || 'Something went wrong'}
    </div>
  );
}
