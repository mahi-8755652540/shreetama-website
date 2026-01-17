import { motion } from 'framer-motion';
import { Droplets, Shield, Zap, Heart, Brain, Leaf, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Shield,
    title: 'Natural Antibacterial',
    description: 'Copper naturally eliminates harmful bacteria, viruses, and fungi from water, making it safer to drink.',
  },
  {
    icon: Zap,
    title: 'Boosts Immunity',
    description: 'Copper is essential for immune function. Drinking copper-charged water supports your body\'s natural defenses.',
  },
  {
    icon: Heart,
    title: 'Supports Heart Health',
    description: 'Copper helps regulate blood pressure and heart rate, supporting overall cardiovascular wellness.',
  },
  {
    icon: Brain,
    title: 'Enhances Brain Function',
    description: 'Copper is vital for neurotransmitter synthesis, supporting cognitive function and mental clarity.',
  },
  {
    icon: Droplets,
    title: 'Aids Digestion',
    description: 'Copper water stimulates peristalsis, helping with digestion and reducing acidity and bloating.',
  },
  {
    icon: Leaf,
    title: 'Anti-Aging Properties',
    description: 'Copper promotes collagen production and fights free radicals, supporting healthy, youthful skin.',
  },
];

const ayurvedicPrinciples = [
  'Copper balances all three doshas — Vata, Pitta, and Kapha',
  'Water stored overnight in copper is called "Tamra Jal"',
  'Ayurveda recommends drinking copper water first thing in the morning',
  'Copper\'s cooling properties help reduce body heat',
  'Regular use supports natural detoxification processes',
];

const Benefits = () => {
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
              Wellness Wisdom
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              The <span className="text-gradient-copper">Benefits</span> of Copper Water
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For thousands of years, Ayurveda has celebrated copper's remarkable healing properties. 
              Modern science continues to validate this ancient wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Health <span className="text-gradient-copper">Benefits</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Drinking water stored in copper vessels offers numerous wellness benefits 
              recognized by both ancient traditions and modern research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-copper/10 mb-4">
                  <benefit.icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ayurvedic Section */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-copper font-medium text-sm tracking-widest uppercase mb-4 block">
                Ancient Wisdom
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Copper in <span className="text-gradient-copper">Ayurveda</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                In Ayurvedic medicine, copper is known as "Tamra" and has been revered for 
                its therapeutic properties for over 5,000 years. Ancient texts describe 
                copper's ability to bring balance to the body and mind.
              </p>
              <ul className="space-y-3">
                {ayurvedicPrinciples.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-copper mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-background rounded-2xl p-8 shadow-soft"
            >
              <h3 className="text-xl font-serif font-bold mb-6">How to Use Copper Water</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-copper text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fill Your Vessel</h4>
                    <p className="text-sm text-muted-foreground">
                      Pour clean drinking water into your Shreetama copper bottle or pitcher.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-copper text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Let It Rest</h4>
                    <p className="text-sm text-muted-foreground">
                      Store the water for 6-8 hours, ideally overnight, for optimal copper infusion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-copper text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Drink First Thing</h4>
                    <p className="text-sm text-muted-foreground">
                      Drink the copper-charged water first thing in the morning on an empty stomach.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-6 bg-muted rounded-xl"
          >
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> The information provided here is based on traditional 
              Ayurvedic practices and general wellness knowledge. It is not intended to replace 
              professional medical advice. Please consult a healthcare provider for specific 
              health concerns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal text-cream">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Start Your Wellness Journey
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto mb-8">
              Experience the ancient benefits of copper water with Shreetama's 
              premium handcrafted drinkware.
            </p>
            <Button variant="copper" size="xl" asChild>
              <Link to="/shop">Shop Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Benefits;
