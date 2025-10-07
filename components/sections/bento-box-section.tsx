"use client"

const tiles = [
  { title: "Math Playground", copy: "Puzzles and games that make numbers fun." },
  { title: "Story Corner", copy: "Read, imagine, and create your own tales." },
  { title: "Maker Lab", copy: "Build, tinker, and test your bright ideas." },
  { title: "Nature Quest", copy: "Explore the world with curious eyes." },
  { title: "Sketch & Color", copy: "Express yourself through art and design." },
  { title: "Code Sparks", copy: "Learn to code with playful challenges." },
]

export default function BentoBoxSection() {
  return (
    <section id="bento" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">Play, Explore, Create</h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-lg border border-border bg-card p-4 hover:bg-muted transition-colors">
              <h4 className="text-foreground text-sm font-medium mb-1">{t.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{t.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
