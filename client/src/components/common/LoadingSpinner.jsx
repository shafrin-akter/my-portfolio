export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600" />
    </div>
  );
}
