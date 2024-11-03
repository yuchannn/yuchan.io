'use client';
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';
import ThemeToggle from '@/components/ThemeToggle';

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-mono)] flex flex-col">
      <nav className="flex justify-between items-center">
        <Link 
          href="/"
          className="text-foreground/80 hover:text-foreground hover:underline transition-colors text-sm"
        >
          me
        </Link>
        <div className="h-6 flex items-center">
          <ThemeToggle />
        </div>
      </nav>
      
      <main className="max-w-3xl mx-auto mt-16 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Thoughts and Whatnot</h1>
          <p className="text-base text-foreground/60">
            A collection of random thoughts that I have had over the years
          </p>
        </div>
        
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="p-6 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-colors"
            >
              <Link href={`/blog/posts/${post.id}`}>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-foreground/60">{post.date}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 