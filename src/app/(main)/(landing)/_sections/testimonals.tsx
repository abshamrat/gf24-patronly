import Container from "@/components/container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonalsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Founder",
      content:
        "Group Finder transformed how we connect. We've grown from 50 to 500+ members in just 3 months.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "Hiking Enthusiast",
      content:
        "I've met my best friends through this platform. The community is amazing and organizing hikes is so easy.",
      avatar: "MJ",
    },
    {
      name: "Emily Rodriguez",
      role: "Book Club Host",
      content:
        "Managing members and scheduling discussions used to be a nightmare. Now it's effortless.",
      avatar: "ER",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Loved by Community Builders
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            See why thousands of organizers trust us with their communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-lg bg-background relative overflow-visible">
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
              <CardContent className="pt-12 pb-8 px-8">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 leading-relaxed">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-6">
                  <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                    <AvatarFallback className="bg-brand-secondary/10 text-brand-secondary font-bold">
                      {t.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-neutral-900 dark:text-neutral-100">{t.name}</div>
                    <div className="text-sm text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
