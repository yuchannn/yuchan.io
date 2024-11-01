import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-mono)] flex flex-col">
      <nav className="flex justify-between items-center">
        <Link 
          href="/blog"
          className="text-foreground/80 hover:text-foreground hover:underline transition-colors text-sm"
        >
          Blog
        </Link>
        <div className="h-6 flex items-center">
          <ThemeToggle />
        </div>
      </nav>
      
      <main className="max-w-3xl mx-auto mt-16 space-y-8 flex-grow">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-center">Hi there! 👋</h1>
          
          {/* Profile Image */}
          <div className="flex justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Yuchan's profile picture"
              width={200}
              height={200}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
          <h2 className="text-xl font-semibold">Me and Work</h2>
          <div className="text-base leading-relaxed">
            
            <p>
              My name is Yuchan, and I&apos;m a M.S. student studying Electrical and Computer Engineering
              at Carnegie Mellon University. I was born in Chicago, grew up in Taiwan, and moved
              to Pittsburgh for college. Even though I am still currently living in Pittsburgh, me and 
              my friend Neelansh Kaabra co-founded our startup <a href="https://www.creditsea.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">CreditSea</a> that is based out in India.
            </p>
            <p className="mt-4">
              I have a deep passion for engineering, particularly software. 
              I think EECS is truly as close as we can get to modern day magic. 
              Just imagine the level of engineering that made it possible for you (a stranger) to view this little about me website on your phone. 
              I find it pretty damn amazing. 
              From tinkering around with little web projects, to eventually writing my own C compiler from scratch in Rust, 
              I&apos;ve tried my very best to learn everything I can about computers and I am truly enjoying this seemingly endless journey. 
              Glad that you&apos;re following right along.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4 p-6 rounded-lg border border-foreground/10">
            <h2 className="text-xl font-semibold">Education</h2>
            <p>Carnegie Mellon University</p>
            <p className="text-xs text-foreground/70">B.S./M.S. in Electrical and Computer Engineering</p>
          </div>

          <div className="space-y-4 p-6 rounded-lg border border-foreground/10">
            <h2 className="text-xl font-semibold">Background</h2>
            <ul className="space-y-2 text-xs">
              <li>Born in Chicago, IL</li>
              <li>Grew up in Taipei, Taiwan</li>
              <li>Currently in Pittsburgh, PA</li>
            </ul>
          </div>
        
        
        </div>
        <hr className="border-foreground/10 my-4" />

        <div className="space-y-4 mt-12">
          <h2 className="text-xl font-semibold">Me Outside of Work</h2>
          <p className="text-base leading-relaxed">
            Outside of work, I live with the purpose of challenging myself to improve in any way I can
            (but that doesn&apos;t mean I don&apos;t try to have fun). In a way, I fantasize about being the
            main character in my own life. You know, those animes where after a gruelling 10 season
            grind, the protagonists unlocks some sort of over-powered superpower that allows them
            to protect those around them.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10">
              <Image
                src="/gifs/bluelock.gif"
                alt="Blue Lock - Yoichi Isagi"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10">
              <Image
                src="/gifs/demonslayer.gif"
                alt="Demon Slayer - Tanjiro"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10">
              <Image
                src="/gifs/jjk.gif"
                alt="Jujutsu Kaisen - Gojo"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-foreground/10">
              <Image
                src="/gifs/cote.gif"
                alt="Classroom of the Elite - Ayanokoji"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <p className="text-sm text-foreground/60 mt-4">
            Some of my favorite animes!
          </p>
          <p className="text-base leading-relaxed">
            I am pretty basic in many of my pursuits. I hit the gym, play the piano, and (try to) cook, just like pretty much any other guy in his twenties.
            That isn't to say I don't have my little peculiarities either! In fact, I have a lot of little quirks... I take a shot of olive oil every morning. I 
            am so concerned about health that I drink Novos Core. I take vitamins and fish oil for my brain health. In essence, I treat my body like a machine, in the way that 
            I need to provide enough resources for the machine to function properly (?). 
          </p>
          <p className="text-base leading-relaxed">
            I also love to play basketball. That being said, my approach to basketball is a rather unconventional one for amateur players. I've done numerous jump training programs
            to achieve a level of athleticism such that my game is primarily reliant on raw athleticism rather than skill. At only 184 centimeters tall, I can two hand tomahawk on a 
            standard regulation 10 foot rim. "Why?"" You might ask. "Doesn't skill translate into more longevity?" While that is true, I just think playing sports based on raw athleticism
            is so much more satisfying. Even when watching basketball, I think it is so much more exciting watching players like Anthony Edwards just fly to the rim.
          </p>
          <p className="text-base leading-relaxed">
            Anyways, welcome to my website and I hope you like it here :)
          </p>
        </div>
      </main>

      <footer className="max-w-3xl mx-auto w-full mt-16 pb-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/yuchan-huang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/ykevin.huang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/yuchannn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-sm text-foreground/60">
            2024 © Yuchan
          </p>
        </div>
      </footer>
    </div>
  );
}
