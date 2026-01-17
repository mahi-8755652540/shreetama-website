import { Sparkles, Shield, Heart, Leaf } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Pure Copper',
    description: '100% food-grade copper with natural antibacterial properties for pure, healthy water.',
  },
  {
    icon: Shield,
    title: 'Handcrafted',
    description: 'Each piece is meticulously crafted by skilled Indian artisans using traditional techniques.',
  },
  {
    icon: Heart,
    title: 'Ayurvedic',
    description: 'Based on 5000-year-old Ayurvedic wisdom for balancing the body and mind.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable, plastic-free alternative that reduces environmental impact.',
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Why Choose <span className="text-gradient-copper">Shreetama</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every product embodies our commitment to quality, tradition, and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-border hover:border-copper hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-6 group-hover:bg-copper group-hover:shadow-copper transition-all duration-300">
                <feature.icon className="w-8 h-8 text-copper group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
