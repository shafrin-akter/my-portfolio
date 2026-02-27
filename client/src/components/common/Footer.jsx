export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
