import { motion } from "framer-motion";
import { pageTransition, motionIntensity, staggerContainer, fadeInUp, fadeInLeft } from "@/lib/motion";
import MotionInView from "@/components/MotionInView";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp, ShieldCheck } from "lucide-react";

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
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
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
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 text-lg font-bold tracking-wide">
                  Apply for Funding <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-lg font-bold tracking-wide">
                  View Portfolio
                </Button>
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
            <div className="w-24 h-1 bg-accent" />
          </MotionInView>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <MotionInView variants={fadeInUp} intensity="medium">
              <div className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Strategic Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  単なる資金提供だけでなく、事業戦略の策定から実行まで、
                  経験豊富なチームが伴走支援します。
                </p>
              </div>
            </MotionInView>

            <MotionInView variants={fadeInUp} intensity="medium">
              <div className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Trusted Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  厳選された投資家ネットワークとのマッチングにより、
                  質の高い資金調達と事業提携を実現します。
                </p>
              </div>
            </MotionInView>

            <MotionInView variants={fadeInUp} intensity="medium">
              <div className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Long-term Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  短期的な利益だけでなく、長期的な企業価値の向上を目指し、
                  Exit後も続く強固な関係を築きます。
                </p>
              </div>
            </MotionInView>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/bg-texture.png" alt="texture" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Investment", value: "$50M+" },
              { label: "Startups Supported", value: "120+" },
              { label: "Successful Exits", value: "15" },
              { label: "Active Mentors", value: "40+" },
            ].map((stat, index) => (
              <MotionInView 
                key={index} 
                intensity="medium" 
                delay={index * 0.1} 
                direction="vertical"
              >
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-widest opacity-80">{stat.label}</div>
                </div>
              </MotionInView>
            ))}
          </div>
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
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 h-16 text-xl font-bold tracking-wide shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Start Application
            </Button>
          </MotionInView>
        </div>
      </section>
    </motion.div>
  );
}
