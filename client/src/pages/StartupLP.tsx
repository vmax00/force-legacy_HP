import { motion } from "framer-motion";
import { pageTransition, motionIntensity, staggerContainer, fadeInUp, fadeInLeft, EASE_OUT, DURATION, DISTANCE } from "@/lib/motion";
import MotionInView from "@/components/MotionInView";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp, ShieldCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: DISTANCE.MEDIUM },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.MEDIUM,
      ease: EASE_OUT,
    },
  },
};

export default function StartupLP() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-startup.png" 
            alt="Startup Growth" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <MotionInView intensity="medium" direction="horizontal" delay={0.2}>
              <span className="inline-block py-1 px-3 border border-primary/20 rounded-full text-xs font-bold tracking-widest uppercase text-primary mb-6 bg-white/50 backdrop-blur-sm">
                For Founders
              </span>
            </MotionInView>
            
            <MotionInView intensity="medium" direction="horizontal" delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Accelerate <br />
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vision</span>
              </h1>
            </MotionInView>
            
            <MotionInView intensity="medium" direction="horizontal" delay={0.4}>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                Force Legacyは、革新的なアイデアを社会実装するための
                「資金」と「信頼」を提供します。
                あなたのビジョンを、確実な未来へと導きます。
              </p>
            </MotionInView>
            
            <MotionInView intensity="medium" direction="horizontal" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 text-lg font-bold tracking-wide">
                    Apply for Funding <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-lg font-bold tracking-wide">
                    View Portfolio
                  </Button>
                </motion.div>
              </div>
            </MotionInView>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <MotionInView intensity="medium" direction="vertical" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Force Legacy?</h2>
            <motion.div 
              className="w-24 h-1 bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              viewport={{ once: true }}
            />
          </MotionInView>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: Rocket,
                title: "Strategic Growth",
                desc: "単なる資金提供だけでなく、事業戦略の策定から実行まで、経験豊富なチームが伴走支援します。",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Network",
                desc: "厳選された投資家ネットワークとのマッチングにより、質の高い資金調達と事業提携を実現します。",
              },
              {
                icon: TrendingUp,
                title: "Long-term Partnership",
                desc: "短期的な利益だけでなく、長期的な企業価値の向上を目指し、Exit後も続く強固な関係を築きます。",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full group overflow-hidden relative"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/bg-texture.png" alt="texture" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { label: "Total Investment", value: "$50M+" },
              { label: "Startups Supported", value: "120+" },
              { label: "Successful Exits", value: "15" },
              { label: "Active Mentors", value: "40+" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="p-6 group hover:scale-105 transition-transform duration-300"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <MotionInView intensity="medium" direction="vertical">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
              Ready to Scale?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              あなたの挑戦を待っています。まずは簡単なフォームから、
              私たちのパートナーシップを始めましょう。
            </p>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 h-16 text-xl font-bold tracking-wide shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                Start Application
              </Button>
            </motion.div>
          </MotionInView>
        </div>
      </section>
    </motion.div>
  );
}
