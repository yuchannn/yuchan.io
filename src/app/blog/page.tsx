'use client';
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-mono)]">
      <main className="max-w-3xl mx-auto mt-16 space-y-8">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-foreground/60">{post.date}</p>
                  <p className="text-base line-clamp-3">{post.content}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 