"use client"
import ScrambledText from '@/components/Scrambledtext';

export default function AboutSection() {
  return (
    <>
      <section id="about" className="relative z-10 px-6 py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            About U-Fill Academy
          </h2>
        </div>
      </section>
      <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique pariatur dignissimos porro eius quam doloremque 
        et enim velit nobis maxime.
      </ScrambledText>
    </>
  );
}
