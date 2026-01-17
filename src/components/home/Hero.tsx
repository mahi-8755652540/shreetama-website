import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bottle.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-copper-glow opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-copper/10 text-copper px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Droplets className="w-4 h-4" />
              <span>Ancient Wisdom, Modern Wellness</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
            >
              Pure Copper.{' '}
              <span className="text-gradient-copper">Pure Wellness.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience the ancient Ayurvedic tradition of drinking water stored in pure copper vessels. 
              Handcrafted with love, designed for your health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" asChild>
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/benefits">
                  Explore Wellness
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🇮🇳</span>
                <span>Made in India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🍃</span>
                <span>100% Pure Copper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">♻️</span>
                <span>Eco-Friendly</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Premium Shreetama Copper Water Bottle"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-background shadow-elevated rounded-xl p-4 md:p-6"
            >
              <p className="text-xs text-muted-foreground mb-1">Starting from</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-copper">₹999</p>
              <p className="text-xs text-muted-foreground">Free Shipping</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
