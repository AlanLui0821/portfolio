import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation - Simpler, just fade in
      gsap.from(heroRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
      });

      // About Section Animation
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none",
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        immediateRender: false,
      });

      // Experience Section Animation
      gsap.from(".experience-card", {
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 75%",
          toggleActions: "restart none none none",
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        immediateRender: false,
      });

      // Projects Section Animation
      gsap.from(projectsRef.current, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 75%",
          toggleActions: "restart none none none",
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        immediateRender: false,
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]/80 text-white selection:bg-white selection:text-black relative z-10 font-mono">
      <main>
        <Hero heroRef={heroRef} />
        <About aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Projects projectsRef={projectsRef} />
        <Contact />
      </main>
    </div>
  );
}
