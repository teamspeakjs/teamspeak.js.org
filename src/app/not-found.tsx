import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="mb-8 text-lg opacity-80">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <span className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold shadow transition-colors duration-200">
            Go Home
          </span>
        </Link>
      </div>
      <div className="mt-12 animate-bounce">
        <svg
          width="80"
          height="80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="mx-auto text-blue-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>
    </main>
  );
}
