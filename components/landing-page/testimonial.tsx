import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const testimonials = [
    {
      quote: "Stripe for payments. Vercel for deployments. Dub for links. As the cloud evolves, we abstract out common needs into reusable, high-performance infrastructure. Excited about Dub being the foundational missing piece of the puzzle.",
      author: "Guillermo Rauch",
      role: "CEO, Vercel",
      avatar: "/placeholder.svg",
      className: "lg:col-span-1 lg:row-span-1"
    },
    {
      quote: "We wanted a tool that not only enables everyone at Prisma to create short links easily, but also provides more analytics for those links. Dub is the perfect solution for that.",
      author: "Petra Donka",
      role: "Head of Dev Connections, Prisma",
      avatar: "/placeholder.svg",
      className: "lg:col-start-1 lg:col-span-1 lg:row-start-2"
    },
    {
      quote: "As a software comparison site, tracking and attributing link clicks to the apps we're recommending is critical. After using every link management platform on the market, we've found a home with Dub – it helps us make key decisions on where to focus our future content and growth efforts. We LOVE Dub.",
      author: "Alex Bass",
      role: "CEO, Efficient App",
      avatar: "/placeholder.svg",
      className: "lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:-mt-12"
    },
    {
      quote: "Dub has been a breath of fresh air in the link management space – with everything we needed and no unnecessary feature bloat.",
      author: "Nick Parsons",
      role: "Director of Marketing, Clerk",
      avatar: "/placeholder.svg",
      className: "lg:col-start-3 lg:col-span-1 lg:row-start-1"
    },
    {
      quote: "We've been using Dub at Hashnode for almost a year now, and I must say it's a really intuitive & reliable tool for managing our short links. Great work!",
      author: "Fazle Rahman",
      role: "Co-founder, Hashnode",
      avatar: "/placeholder.svg",
      className: "lg:col-start-3 lg:col-span-1 lg:row-start-2"
    }
  ]

  return (
    <div className="relative min-h-screen px-4 py-12 md:py-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Trusted by Startups to
            <span className="bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent"> Enterprises</span>
          </h2>
          <p className="text-gray-400">
            Join 64,279 customers who use our link infrastructure
            <br />
            to take their marketing efforts to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <Card 
              key={i} 
              className={`
                group
                bg-black/40
                backdrop-blur-sm
                border border-white/[0.07]
                hover:border-white/[0.15]
                transition-all
                duration-500
                hover:-translate-y-1
                relative
                overflow-hidden
                ${testimonial.className}
              `}
            >
              {/* Ambient glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)",
                  filter: "blur(20px)"
                }}
              />

              {/* Subtle border glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.05)"
                }}
              />

              <CardContent className="relative p-8">
                {/* Quote */}
                <div className="space-y-6">
                  <p className="text-[15px] leading-relaxed text-white/70">
                    {testimonial.quote}
                  </p>
                  
                  {/* Separator with glow */}
                  <div className="relative h-px w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
                    <div 
                      className="absolute inset-0 blur-sm"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)"
                      }}
                    />
                  </div>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="ring-1 ring-white/[0.07] ring-offset-2 ring-offset-black">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-black text-white/50">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm text-white/90">{testimonial.author}</div>
                      <div className="text-sm text-white/50">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}