import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { pageTransition, EASE_OUT, DURATION, DISTANCE } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionInView from "@/components/MotionInView";

export default function Home() {
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div 
      className="min-h-screen w-full bg-background"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-main.png" 
            alt="Force Legacy Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <MotionInView intensity="medium" direction="horizontal" delay={0.2}>
              <span className="inline-block py-1 px-3 border border-primary/20 rounded-full text-xs font-bold tracking-widest uppercase text-primary mb-6 bg-white/50 backdrop-blur-sm">
                Force Legacy
              </span>
            </MotionInView>
            
            <MotionInView intensity="medium" direction="horizontal" delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6 leading-tight">
                Connect <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Innovation</span>
              </h1>
            </MotionInView>
            
            <MotionInView intensity="medium" direction="horizontal" delay={0.4}>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                革新的なスタートアップと先見性のある投資家をつなぎ、
                次世代のビジネスを共創する。
                Force Legacyは、信頼と確実性の架け橋です。
              </p>
            </MotionInView>
            
            <MotionInView intensity="medium" direction="horizontal" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-14 text-lg font-bold tracking-wide"
                    onClick={() => handleNavigation("/startup")}
                  >
                    For Founders <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 h-14 text-lg font-bold tracking-wide"
                    onClick={() => handleNavigation("/investor")}
                  >
                    For Investors
                  </Button>
                </motion.div>
              </div>
            </MotionInView>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <MotionInView intensity="medium" direction="vertical" className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Why Force Legacy?
            </h2>
            <motion.div 
              className="w-24 h-1 bg-accent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              viewport={{ once: true }}
            />
          </MotionInView>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <MotionInView intensity="medium" direction="horizontal" delay={0.2}>
              <motion.div 
                className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full group"
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">For Founders</h3>
                <p className="text-muted-foreground leading-relaxed">
                  革新的なアイデアを持つスタートアップへ。
                  確実な成長と信頼できるパートナーシップを提供します。
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center text-primary font-bold tracking-wide mt-6 cursor-pointer"
                  onClick={() => handleNavigation("/startup")}
                >
                  Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </motion.div>
            </MotionInView>

            <MotionInView intensity="medium" direction="horizontal" delay={0.3}>
              <motion.div 
                className="p-8 border border-border bg-card hover:shadow-lg transition-shadow duration-300 h-full group"
                whileHover={{ y: -8 }}
              >
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">For Investors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  先見性のある投資家へ。
                  次世代を担う確かな価値と、持続可能なリターンを。
                </p>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center text-primary font-bold tracking-wide mt-6 cursor-pointer"
                  onClick={() => handleNavigation("/investor")}
                >
                  Discover Portfolio <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </motion.div>
            </MotionInView>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/bg-texture.png" alt="texture" className="w-full h-full object-cover mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionInView intensity="medium" direction="vertical">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Ready to Connect?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              あなたのビジョンと、それを実現するパートナーをつなぎます。
              今すぐ、未来への第一歩を踏み出しましょう。
            </p>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-none px-10 h-16 text-xl font-bold tracking-wide shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                onClick={() => handleNavigation("/process")}
              >
                Learn About Our Process
              </Button>
            </motion.div>
          </MotionInView>
        </div>
      </section>
    </motion.div>
  );
}
