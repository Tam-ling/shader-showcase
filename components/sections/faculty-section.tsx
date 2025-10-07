"use client"

type Faculty = { name: string; role: string; bio: string }

const faculty: Faculty[] = [
  {
    name: "Dr. Asha Menon",
    role: "Dean of Learning",
    bio: "Champion of child-centered education and inclusive learning environments.",
  },
  { name: "Daniel Reyes", role: "STEM Educator", bio: "Hands-on maker projects that spark curiosity and innovation." },
  {
    name: "Maya Chen",
    role: "Arts & Design",
    bio: "Guides learners to express ideas through visual storytelling and design.",
  },
  {
    name: "Omar Khalid",
    role: "Global Studies",
    bio: "Builds cross-cultural collaborations and global citizenship programs.",
  },
]

export default function FacultySection() {
  return (
    <section id="faculty" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">Meet Our Faculty</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f) => (
            <article key={f.name} className="rounded-lg border border-border bg-card p-5">
              <h4 className="text-foreground font-medium">{f.name}</h4>
              <p className="text-muted-foreground text-sm">{f.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">{f.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
