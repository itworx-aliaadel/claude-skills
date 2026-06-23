import dynamic from "next/dynamic";

const ArticleVirtualList = dynamic(
  () => import("@/components/ArticleVirtualList"),
  { loading: () => <p className="text-sm text-gray-400">Loading articles…</p> }
);

const articles = [
  { id: 1, tag: "Engineering", title: "Building scalable APIs with Next.js Route Handlers", excerpt: "A deep dive into structuring route handlers for production workloads." },
  { id: 2, tag: "Design", title: "Minimal UI: less is more", excerpt: "How stripping away noise makes interfaces easier to use." },
  { id: 3, tag: "Performance", title: "Optimizing Core Web Vitals in 2026", excerpt: "Practical techniques to hit green on every metric." },
  { id: 4, tag: "TypeScript", title: "Advanced generics you actually need", excerpt: "Patterns that pay off — without overengineering." },
  { id: 5, tag: "DevOps", title: "Zero-downtime deploys with edge caching", excerpt: "Ship without fear using incremental static regeneration." },
  { id: 6, tag: "Engineering", title: "React Server Components in practice", excerpt: "Lessons learned after six months in production." },
  { id: 7, tag: "Security", title: "Hardening your Next.js app against XSS", excerpt: "Content security policies and sanitization patterns that actually work." },
  { id: 8, tag: "Architecture", title: "Monorepo vs polyrepo in 2026", excerpt: "An honest look at the trade-offs after running both at scale." },
  { id: 9, tag: "Performance", title: "The hidden cost of client components", excerpt: "Why every 'use client' boundary deserves scrutiny." },
  { id: 10, tag: "TypeScript", title: "Branded types for safer domain modeling", excerpt: "Stop treating user IDs and product IDs as interchangeable strings." },
  { id: 11, tag: "Design", title: "Dark mode done right", excerpt: "Semantic color tokens that survive a theme switch without hacks." },
  { id: 12, tag: "Engineering", title: "Streaming responses from the edge", excerpt: "ReadableStream, TransformStream, and when to reach for each." },
  { id: 13, tag: "DevOps", title: "Feature flags without the overhead", excerpt: "A pragmatic approach that doesn't require a third-party platform." },
  { id: 14, tag: "Testing", title: "Integration tests that don't lie", excerpt: "Why mocking the database cost us a production incident." },
  { id: 15, tag: "Architecture", title: "Event sourcing on a budget", excerpt: "Getting audit logs and replay for free with a simple append-only table." },
  { id: 16, tag: "Performance", title: "Image optimization beyond next/image", excerpt: "AVIF, lazy decoding, and priority hints for the largest contentful paint." },
  { id: 17, tag: "Engineering", title: "Pagination vs cursor-based navigation", excerpt: "When offset queries fall apart at scale and what to use instead." },
  { id: 18, tag: "TypeScript", title: "Exhaustive switch with never", excerpt: "Compile-time guarantees that every enum variant is handled." },
  { id: 19, tag: "Design", title: "Accessible color contrast at every breakpoint", excerpt: "Tooling and design tokens to pass WCAG 2.2 without a manual audit." },
  { id: 20, tag: "Security", title: "JWT pitfalls and how to avoid them", excerpt: "Algorithm confusion, weak secrets, and the case for opaque tokens." },
  { id: 21, tag: "Engineering", title: "Database connection pooling with Prisma", excerpt: "PgBouncer, connection limits, and the serverless edge case." },
  { id: 22, tag: "DevOps", title: "GitHub Actions cache strategies", excerpt: "Shaving CI minutes by caching node_modules correctly." },
  { id: 23, tag: "Architecture", title: "CQRS without the ceremony", excerpt: "Read models and write models that stay in sync without Kafka." },
  { id: 24, tag: "Performance", title: "React 19 compiler: what changed for me", excerpt: "Before and after profiling the same component tree." },
  { id: 25, tag: "Testing", title: "Visual regression testing on a budget", excerpt: "Percy alternatives and rolling your own screenshot diffing." },
  { id: 26, tag: "Engineering", title: "WebSockets vs Server-Sent Events in 2026", excerpt: "The case for SSE is stronger than ever now that HTTP/2 is everywhere." },
  { id: 27, tag: "Design", title: "Typography scales that hold up at every size", excerpt: "A fluid type system using clamp() and a single token file." },
  { id: 28, tag: "Security", title: "CSRF protection in a Next.js app", excerpt: "SameSite cookies and origin checks — no tokens required." },
  { id: 29, tag: "TypeScript", title: "Infer vs Extract: when to use each", excerpt: "Conditional types demystified with real-world examples." },
  { id: 30, tag: "Architecture", title: "The outbox pattern in plain SQL", excerpt: "Reliable event publishing without a message broker." },
  { id: 31, tag: "DevOps", title: "Dependabot auto-merge done safely", excerpt: "Configuring label filters and branch protection to auto-merge patch bumps." },
  { id: 32, tag: "Performance", title: "Reducing layout shift with skeleton screens", excerpt: "How to match skeleton dimensions to real content without hardcoding sizes." },
  { id: 33, tag: "Engineering", title: "Error boundaries in the App Router", excerpt: "error.tsx, global-error.tsx, and recovery patterns." },
  { id: 34, tag: "Testing", title: "Property-based testing with fast-check", excerpt: "Finding edge cases you'd never think to write by hand." },
  { id: 35, tag: "Design", title: "Motion design that respects prefers-reduced-motion", excerpt: "Animations that degrade gracefully without duplicating CSS." },
  { id: 36, tag: "Security", title: "Secrets management in Next.js", excerpt: "Environment variables, Vault, and why .env.local isn't enough for prod." },
  { id: 37, tag: "Architecture", title: "Multi-tenancy with row-level security in Postgres", excerpt: "Policies, roles, and the current_setting trick." },
  { id: 38, tag: "Performance", title: "Bundle splitting strategies for large apps", excerpt: "Module federation, route-level splits, and shared chunk naming." },
  { id: 39, tag: "Engineering", title: "Optimistic UI with useOptimistic in React 19", excerpt: "Instant feedback without sacrificing correctness on rollback." },
  { id: 40, tag: "TypeScript", title: "Discriminated unions for state machines", excerpt: "Modeling loading, success, and error states so TypeScript enforces the transitions." },
  { id: 41, tag: "DevOps", title: "Blue-green deploys with Vercel's edge config", excerpt: "Routing production traffic without a downtime window." },
  { id: 42, tag: "Design", title: "Designing for low-bandwidth users", excerpt: "Progressive enhancement patterns when 3G is the baseline." },
  { id: 43, tag: "Testing", title: "Contract testing with Pact", excerpt: "Catching API mismatches before they hit staging." },
  { id: 44, tag: "Engineering", title: "Understanding React's reconciliation algorithm", excerpt: "Why key matters and how to avoid expensive re-renders." },
  { id: 45, tag: "Security", title: "Rate limiting at the edge", excerpt: "IP-based and token-bucket limiters in a Middleware handler." },
  { id: 46, tag: "Architecture", title: "Soft deletes and audit trails without triggers", excerpt: "Application-level patterns that keep the schema simple." },
  { id: 47, tag: "Performance", title: "Measuring real-user performance with web-vitals", excerpt: "Sending CWV data to your own analytics endpoint." },
  { id: 48, tag: "TypeScript", title: "Recursive types without infinite loops", excerpt: "Depth limits, lazy evaluation, and when to reach for interfaces." },
  { id: 49, tag: "Design", title: "Responsive tables that don't break on mobile", excerpt: "Scroll containers, card pivots, and when each pattern fits." },
  { id: 50, tag: "Engineering", title: "From REST to tRPC: was it worth it?", excerpt: "A six-month retrospective on type-safe API contracts across the stack." },
];

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <p className="mt-1 text-gray-500 text-sm">
          In-depth reads on engineering, design, and more.{" "}
          <span className="text-gray-400">{articles.length} articles</span>
        </p>
      </div>
      <ArticleVirtualList articles={articles} />
    </div>
  );
}
