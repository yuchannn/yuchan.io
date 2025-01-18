import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '5',
    title: 'To My Dad',
    content: `
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-foreground dark:text-foreground/90">To the world, Alex is a businessman.</p>

        <p class="text-foreground dark:text-foreground/90">To many, Alex is a friend, a golf aficionado, and a fishing enthusiast.</p>

        <p class="text-foreground dark:text-foreground/90">To my mom, Alex is her goofy yet protective husband that holds up our entire family.</p>

        <p class="text-foreground dark:text-foreground/90">I am writing this article as I travel from Taipei to Pittsburgh for another semester at Carnegie Mellon. To say that I miss my parents would be a massive understatement. Every cell within me wishes for another second with them, and I am sure they feel the same way. Amid this flight, I am experiencing this sudden urge to write an entry dedicated to my dad (sorry mom, I'll write one for you too soon!).</p>

        <p class="text-foreground dark:text-foreground/90">You know how they say your parents will always see you as a child, regardless of how old you've grown? I think the vice versa is also true from a child's perspective towards their parents. Despite my father's aging wrinkles and atrophying muscles, the way I see him has remained roughly the same for the past 10 years of my life.</p>

        <p class="text-foreground dark:text-foreground/90">To me, he is Superman. The invincible super human capable of fighting back the world for our family. Under his parenting, I grew up believing that the stars are the limit, and that I could achieve anything. Amidst this complicated and messy world, my dad had me growing up believing that the world was all sunshine and rainbows. In this world he built for me, there was only ever sun and never rain. Everyday, he reassures me and brother with the soothing words: "什麼都不用擔心，我是你們的靠山". This phrase literally translates to "Don't worry about anything, I am your rock." While I had not truly understood what "rock" meant as a child, knowing that my dad always has my back has given me tremendous amounts of courage to try anything.</p>

        <p class="text-foreground dark:text-foreground/90">I aspire to be like my dad one day. Capable of sheltering the people that matter to me the most—maybe even holding up the world for him as well. I will work harder everyday to become more of a man like him so I can protect my family from the dangers of the world.</p>

        <p class="text-foreground dark:text-foreground/90">I love you dad.</p>
      </div>
    `,
    date: '2025-01-18',
    slug: 'to-my-dad'
  },
  {
    id: '4',
    title: 'As It Should Be - The Problem with the Protected Youth',
    content: `
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-foreground dark:text-foreground/90">The world is complicated, and in all honesty, pretty ugly as well.</p>

        <p class="text-foreground dark:text-foreground/90">As someone who grew up in a very protected and privileged environment, my views of the world solely consisted of sunshine and rainbows. My only worry in life was getting into an objectively "good" university to make my parents proud.</p>

        <p class="text-foreground dark:text-foreground/90">With this protected lifestyle, I developed a rather trusting personality—underscored by the idea of "as it should be." I define this notion as "blindly expecting the ideal without considering the ethical and moral pitfalls of others."</p>

        <p class="text-foreground dark:text-foreground/90">In your day to day life, it could look a little something like expecting to receive an authentic pair of shoes that you paid for on Ebay, or expecting that the food you purchase from the supermarket to be devoid of any chemicals not listed on the label. Additional examples could include believing everything you read online, lending strangers money and expecting timely repayment, and even expecting your government to protect you. In essence, believing too much in the good of the world.</p>

        <p class="text-foreground dark:text-foreground/90">The truth is however, the majority of people strive to obtain more resources with minimal effort or capital. The idea of cost down is ever important in the world of business, and all the facilities that you make use of derive from businesses. Everything from the water you drink, to the bed you sleep on, and to the very device that you are reading this article on. Someone is providing you the facilities in exchange for money. Heck, at this point even the government can be considered a business, as evident with the rich and powerful spending generational wealth sponsoring presidential campaigns. In a very capitalistic society, many smaller businesses can only survive the brutal competition by cutting corners to even fight against large corporations that benefit from economies of scale. This hence foreshadows one of the pitfalls of such a naive outlook on life.</p>

        <p class="text-foreground dark:text-foreground/90">The problem with the "as it should be" mindset is two folds. The first problem resides in the dangers of being harmed by ill-intentioned entities, and the second manifests itself in delusional pursuits. I'm not trying to promote cynicism or suggest you adopt some gloomy, doomsday outlook on life. The point is to realize that if you walk into every scenario assuming life is fair and just "because it should be," you're basically handing over the reins to anyone with enough nerve to take advantage of your naivete.</p>

        <p class="text-foreground dark:text-foreground/90">The second danger, the one about delusional pursuits, is a little more nuanced. When you carry on with an "as it should be" attitude, you risk committing yourself to causes that never had a fighting chance in the first place. Among those that are cognizant of the "unfairness" in the world, the "as it should be" attitude deludes them into believing in the necessity of "fairness" in the world—which by the way is also subjective to their moral values. This causes them to furiously protest for a world that reflects their pure and innocent ideals, which will never materialize so long as greed and resource scarcity exists.</p>

        <p class="text-foreground dark:text-foreground/90">I must emphasize that I am not saying that we should give up on advocating for a better world. It's just that I believe it's important to recognize that an ideal world will never exist. Stop being naive and get to work, because becoming capable is your only ticket to freedom.</p>
      </div>
    `,
    date: '2025-01-16',
    slug: 'as-it-should-be-the-problem-with-the-protected-youth'
  },
  {
    id: '3',
    title: 'Some of my thoughts on the current AI code editors',
    content: `
      <div class="prose dark:prose-invert max-w-none">
        <p class="text-foreground dark:text-foreground/90">If you've ever coded before 2024, you would understand how difficult coding used to be. The amount of documentation that you would have had to weave through just to build something essentially made you an expert on whatever framework it was. Fast forward to 2024, we live in an era where an AI lives inside your code editor. As an avid Cursor AI user, I have nothing but praise for the Anysphere-made product. However, based on my experience thus far, I take issue with the people that say that AI developers can already replace human developers. I am sorry to pop the bubble that you all are living in, but that is simply not the case.</p>

        <p class="text-foreground dark:text-foreground/90">Yesterday, I was trying to build an MVP for a little side project of mine. Usually, I would find tutorials on youtube or medium to get an idea on how to implement a feature that I find useful. In my specific case yesterday, I wanted to build an app that enabled multi-user real time updates on a document like google docs. Instead of going through my usual SOP, I decided to give AI a try. I hopped onto my trusty AI composer and instructed it to build me the app with highly detailed implementation descriptions. The result? 4 hours down the drain with a broken app that I could not fix.</p>

        <p class="text-foreground dark:text-foreground/90">This is just a reminder that AI is there to make you a better coder, not become your brain :D</p>

        <p class="text-foreground dark:text-foreground/90">Keep grinding guys</p>
      </div>
    `,
    date: '2024-12-25',
    slug: 'some-of-my-thoughts-on-the-current-ai-code-editors'
  },
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
    date: '2024-11-04',
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