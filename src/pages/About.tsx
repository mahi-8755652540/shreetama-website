import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-craftsmanship.jpg';
import heroImage from '@/assets/hero-bottle.jpg';

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'We stay true to ancient Ayurvedic traditions while embracing modern craftsmanship standards.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We support local artisan communities, preserving traditional copper-smithing skills.',
  },
  {
    icon: Sparkles,
    title: 'Quality',
    description: 'Every piece undergoes rigorous quality testing to ensure purity and durability.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every detail, from design to delivery.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-copper font-medium text-sm tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Rooted in <span className="text-gradient-copper">Tradition</span>,
              <br />Crafted with <span className="text-gradient-copper">Love</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shreetama is more than a brand — it's a movement to bring India's ancient wellness 
              wisdom to modern homes around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Where It All <span className="text-gradient-copper">Began</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In the heart of India, where ancient traditions meet modern aspirations, 
                  Shreetama was born from a simple yet profound realization: the wellness 
                  practices of our ancestors hold timeless wisdom that the world needs today.
                </p>
                <p>
                  For over 5,000 years, Ayurveda has recognized copper's remarkable ability 
                  to purify water and promote balance within the body. Our grandmothers 
                  understood what modern science is only now confirming — that water stored 
                  in copper vessels carries healing properties.
                </p>
                <p>
                  Shreetama was founded to honor this heritage. We partner with skilled 
                  artisans in India's historic copper-crafting regions, ensuring that each 
                  piece carries the essence of generations of expertise and care.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage}
                  alt="Indian artisan crafting copper"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-copper/10 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Our <span className="text-gradient-copper">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from crafting our products 
              to serving our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-copper/10 mb-6">
                  <value.icon className="w-8 h-8 text-copper" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Shreetama copper bottle"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-cream/80 leading-relaxed mb-8">
                <p>
                  To make the ancient wisdom of Ayurvedic copper hydration accessible 
                  to everyone, while supporting traditional artisan communities and 
                  promoting sustainable living.
                </p>
                <p>
                  We believe that wellness should be simple, authentic, and rooted 
                  in practices that have stood the test of time. Every Shreetama 
                  product is a step towards a healthier you and a better world.
                </p>
              </div>
              <Button variant="copper" asChild>
                <Link to="/shop">Explore Our Collection</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
