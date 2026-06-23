const articles = [
  { id: 1, tag: "Engineering", title: "Building scalable APIs with Next.js Route Handlers", excerpt: "A deep dive into structuring route handlers for production workloads." },
  { id: 2, tag: "Design", title: "Minimal UI: less is more", excerpt: "How stripping away noise makes interfaces easier to use." },
  { id: 3, tag: "Performance", title: "Optimizing Core Web Vitals in 2026", excerpt: "Practical techniques to hit green on every metric." },
  { id: 4, tag: "TypeScript", title: "Advanced generics you actually need", excerpt: "Patterns that pay off — without overengineering." },
  { id: 5, tag: "DevOps", title: "Zero-downtime deploys with edge caching", excerpt: "Ship without fear using incremental static regeneration." },
  { id: 6, tag: "Engineering", title: "React Server Components in practice", excerpt: "Lessons learned after six months in production." },
];

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <p className="mt-1 text-gray-500 text-sm">In-depth reads on engineering, design, and more.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <div key={article.id} className="border border-gray-100 rounded-lg p-4 flex flex-col gap-2 hover:border-gray-300 transition-colors">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{article.tag}</span>
            <h2 className="font-semibold text-gray-900 leading-snug">{article.title}</h2>
            <p className="text-sm text-gray-500">{article.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
