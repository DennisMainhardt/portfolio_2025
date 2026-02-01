import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/70 mb-4">Oops! Page not found</p>
        <Link href="/" className="text-electric-blue hover:text-white underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
