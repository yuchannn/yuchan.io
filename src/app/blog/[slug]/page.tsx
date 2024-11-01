import { blogPosts } from '../../../data/blog-posts';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-mono)]">
      <main className="max-w-3xl mx-auto mt-16 space-y-8">
        <article className="space-y-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-foreground/60">{post.date}</p>
          <div className="prose dark:prose-invert">
            {post.content}
          </div>
        </article>
      </main>
    </div>
  );
} 