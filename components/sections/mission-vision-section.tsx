"use client"
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Heading3 } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="relative z-10 px-6 py-16 md:py-24 bg-background">
       <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Empowering lifelong learners through innovative education and global collaboration. We design experiences
    that ignite curiosity, develop core competencies, and nurture every child’s unique potential.
          </p>
        }
        className="h-[40rem] rounded-md border text-white dark:text-black">
          
          A world where every learner thrives—confident, compassionate, and future-ready. We envision a vibrant
    community that celebrates diversity, advances creativity, and leads with purpose.
      </MaskContainer>
    </div>
    </section>
  )
}
