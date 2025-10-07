"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What programs does U-Fill Academy offer for young learners?",
    a: "We offer specially designed programs that foster creativity and foundational skills for children of all ages.",
  },
  {
    q: "How does U-Fill support holistic learning?",
    a: "Our approach balances academics, creativity, and well-being—combining projects, mentorship, and reflection.",
  },
  {
    q: "Is there global collaboration in the curriculum?",
    a: "Yes. Students participate in cross-cultural projects and virtual exchanges that broaden perspectives.",
  },
  {
    q: "How can I apply?",
    a: "Use the Apply Now button or contact our admissions team—we’ll guide you through each step.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i + 1}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
