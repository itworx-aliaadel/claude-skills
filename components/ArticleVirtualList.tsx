"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

type Article = {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
};

const COLUMNS = 2;
const ROW_HEIGHT = 148;

export default function ArticleVirtualList({ articles }: { articles: Article[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowCount = Math.ceil(articles.length / COLUMNS);

  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 3,
  });

  return (
    <div
      ref={parentRef}
      className="overflow-y-auto"
      style={{ height: "70vh" }}
    >
      <div style={{ height: virtualizer.getTotalSize(), position: "relative" }}>
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const startIdx = virtualRow.index * COLUMNS;
          const rowArticles = articles.slice(startIdx, startIdx + COLUMNS);

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: virtualRow.start,
                left: 0,
                right: 0,
              }}
              className="grid gap-4 sm:grid-cols-2 pb-4"
            >
              {rowArticles.map((article) => (
                <div
                  key={article.id}
                  className="border border-gray-100 rounded-lg p-4 flex flex-col gap-2 hover:border-gray-300 transition-colors"
                >
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    {article.tag}
                  </span>
                  <h2 className="font-semibold text-gray-900 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500">{article.excerpt}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
