import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '2',
    title: 'Learn First, Build Later to Build First, Learn Later',
    content: `
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-foreground dark:text-foreground/90">ChatGPT is a super power for builders. For my fellow developers out there, you can probably relate to my personal hell— tutorial hell. For those who don't know what I am referring to, tutorial hell is the beginning stage of learning a new technology when you are deep in the trenches of tutorials. While tutorial hell is often criticized as unproductive due to the lack of practice, it is a crucial step in building a good theoretical basis of the new library/language that you're working with—otherwise it is almost impossible to build anything complex. As Kurt Lewin said, "there is nothing more practical than a good theory."</p>

        <p class="text-foreground dark:text-foreground/90">Well, now with ChatGPT (and other amazing LLMs), tutorial hell could be a thing of the past. Just this past week, my friend and I were playing around with a Jetson Orin Nano. We are currently designing a more effective floor sweeping robot than the current in-market roomba, using 2D LiDARs to map a room and create the most optimal route for the robot. All data would be stored locally on the on-board Jetson, which ensures data privacy.</p>

        <p class="text-foreground dark:text-foreground/90">The problem was that not only have we never used ROS (Robot Operating System), we also have never used an RPLiDAR in our engineering careers. Now, in the past we would have had to resort to hours of watching youtube videos and reading documentation just to get the ball rolling, but now we have ChatGPT.</p>

        <p class="text-foreground dark:text-foreground/90">A simple query about how to set up ROS 2 Humble, followed by various queries on setting up our RP Lidar A1M8, and we were able to set up our LiDAR with visualization in less than 2 hours.</p>

        <div class="relative aspect-video w-full my-6">
          <img 
            src="/images/rviz.png" 
            alt="RViz 2 Visualization"
            class="rounded-lg w-full h-full object-cover"
          />
        </div>

        <p class="text-foreground dark:text-foreground/90 italic">Peep our visualization using RViz 2!</p>

        <p class="text-foreground dark:text-foreground/90">This experience brought about a new mentality for me. As engineers, we live to build reliable and functional things. In the past, it took a lot of time to get the ball rolling, and even more experience to craft something reliable. Now, we can craft amazing things without having to go through the hassle of learning unimportant intricacies of the technology that we're using before even writing a line of code. There are obviously pros to learning them but you can always learn it as you continue to increase the complexity of your projects. We will learn through practice!</p>
      </div>
    `,
    date: '2024-11-09',
    slug: 'learn-first-build-later-to-build-first-learn-later'
  },
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

        <p class="text-foreground dark:text-foreground/90">In practice, this could mean taking the extra mile to write extensive unit tests to ensure your code is resilient to bugs, or perhaps bringing flowers to your next first date. In a classroom setting, you might think that your professor taking attendance is stupid, or participating is only for nerds. But 
        in all honesty, you never know when that extra mile that you put in will be needed in the future. One thing is for sure though; if you put in that extra effort, there will be a chance that you will be paid off. But if you don't, it will never pay off. Really, just rethink twice before you dismiss another thing as unimportant.
        </p>
      </div>
    `,
    date: '2024-10-30',
    slug: 'part-of-getting-it'
  }
];