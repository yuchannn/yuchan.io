import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Part of Getting It',
    content: `
      <div class="space-y-6">
        <p>Part of getting it is realizing that things like a "rookie dinner" matters. This is a line from the TV series Suits, where Harvey...</p>
        
        <div class="relative aspect-video w-full">
          <iframe 
            class="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/VjQOu4cVm8c?si=FEIRMbnYbGYn__IJ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `,
    date: '2024-10-30',
    slug: 'part-of-getting-it'
  },
]; 