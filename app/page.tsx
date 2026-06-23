import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to MySite</h1>
      <p className="text-gray-500 max-w-xl">
        A minimal place to read the latest news and articles. Clear, fast, and
        distraction-free.
      </p>
      <div className="flex gap-3">
        <Link
          href="/news"
          className="px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700"
        >
          Latest News
        </Link>
        <Link
          href="/articles"
          className="px-4 py-2 border border-gray-300 text-sm rounded hover:bg-gray-50"
        >
          Browse Articles
        </Link>
      </div>
    </div>
  );
}
