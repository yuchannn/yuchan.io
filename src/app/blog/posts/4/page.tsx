"use client";
import React from "react";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";

export default function FourthBlogPost() {
  const post = blogPosts.find((post) => post.id === "4");

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-mono)]">
      <main className="max-w-3xl mx-auto mt-16 space-y-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-foreground/80 hover:text-foreground hover:underline transition-colors"
          >
            ← Back to Thoughts
          </Link>
        </div>
        <article className="space-y-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-foreground/60">{post.date}</p>
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
}
