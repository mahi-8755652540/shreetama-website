import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Award, RefreshCcw } from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: 'Food Grade Copper',
    description: '100% pure, safe for daily use',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Pan-India free delivery',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous quality testing',
  },
  {
    icon: RefreshCcw,
    title: 'Easy Returns',
    description: '7-day hassle-free returns',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-charcoal text-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <badge.icon className="w-10 h-10 mx-auto mb-3 text-copper-light" />
              <h4 className="font-serif font-semibold mb-1">{badge.title}</h4>
              <p className="text-sm text-cream/60">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
