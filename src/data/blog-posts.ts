import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Part of Getting It',
    content: `
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-foreground dark:text-foreground/90">In recent years, I have been getting busier and busier. Oftentimes, I reminisce about the days where I can liberally watch new television series consistently. Just to name a few, shows like Suits, Lucifer, and HIMYM helped me end my days on a relaxing note. As free time slowly slips out from my life, I have only really been able to watch throwback clips of my favorite shows on youtube here and there. However, recently I stumbled upon a clip that struck a chord in me. I've embedded this video here in case you were curious:</p>
        
        <div class="relative aspect-video w-full my-6">
          <iframe 
            class="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/VjQOu4cVm8c?si=FEIRMbnYbGYn__IJ" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <p class="text-foreground dark:text-foreground/90">This clip starts off with Louis informing Mike of his upcoming "Rookie Dinner" in which each rookie has to host a dinner. Just as Mike brushes it off as just something that "needs to be done," and is prepared to not give it much thought, Harvey comes in with a very insightful piece of advice.</p>

        <blockquote class="border-l-4 border-foreground/30 pl-4 italic text-foreground dark:text-foreground/90 my-6">
          Harvey: You see that guy over there by the fax? Take a good look. He's never gonna make partner<br>
          Mike: Okay. Let me guess. Because he threw a lousy rookie dinner?<br>
          Harvey: No, because he doesn't get it.<br>
          Mike: Get what?<br>
          Harvey: He doesn't get that doing good work isn't the whole job. Part of getting it is that things like the dinner actually matter, even when you don't think they do. Look, you were giving me shit this morning because I come and go when I want to. You know why I can do that? Because when I got here, I dominated. They thought I worked 100 hours a day. Now, no matter what time I get in, nobody questions my ability to get the job done. Get it through your head. First impressions last. You start behind the eight ball, you'll never get in front.
        </blockquote>

        <p class="text-foreground dark:text-foreground/90">While I'm sure many people understand what Harvey means, I believe we can extract a lot more value from this scene by extrapolating it onto different scenarios in our lives. However, reading into it more in-depthly, I think that part of what Harvey says implies the need to take that extra mile to deliver something exceptional. Through the spectacles of the Pareto Principle, we can usually achieve 80% of something by using 20% effort. Yet, the last 20% requires 80% of your effort. The Pareto Principle urges people to prioritize the low hanging yet more rewarding fruit. However, I believe that while the Pareto Principle is applicable in some aspects of life, the last 20% is what really makes one exceptional. Focus on that 20%!</p>

        <p class="text-foreground dark:text-foreground/90">In practice, this could mean taking the extra mile to write extensive unit tests to ensure your code is resilient to bugs, or perhaps bringing flowers to your next first date.</p>
      </div>
    `,
    date: '2024-10-30',
    slug: 'part-of-getting-it'
  }
];