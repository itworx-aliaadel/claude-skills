const news = [
  { id: 1, date: "Jun 23, 2026", title: "Next.js 16 released with new App Router improvements" },
  { id: 2, date: "Jun 22, 2026", title: "TypeScript 6.0 brings stricter type inference" },
  { id: 3, date: "Jun 20, 2026", title: "Tailwind CSS v4 ships with a new engine" },
  { id: 4, date: "Jun 18, 2026", title: "React 19 stable: what changed and what stayed the same" },
  { id: 5, date: "Jun 15, 2026", title: "Vercel announces edge runtime improvements" },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">News</h1>
        <p className="mt-1 text-gray-500 text-sm">The latest from the tech world.</p>
      </div>
      <ul className="divide-y divide-gray-100">
        {news.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-4 py-4">
            <span className="text-gray-900">{item.title}</span>
            <span className="shrink-0 text-xs text-gray-400">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
