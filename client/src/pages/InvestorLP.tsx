import { motion } from "framer-motion";
import { pageTransition, motionIntensity, staggerContainer, fadeInUp, fadeInLeft } from "@/lib/motion";
import MotionInView from "@/components/MotionInView";
import { Button } from "@/components/ui/button";
import { ArrowRight, PieChart, Globe, Lock } from "lucide-react";

export default function InvestorLP() {
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
            src="/images/hero-investor.png" 
            alt="Investor Vision" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex justify-end">
          <div className="max-w-2xl text-right">
            <MotionInView intensity="low" direction="horizontal" delay={0.2}>
              <span className="inline-block py-1 px-3 border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase text-secondary mb-6 bg-white/50 backdrop-blur-sm">
                For Investors
              </span>
            </MotionInView>
            
            <MotionInView intensity="low" direction="horizontal" delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-secondary mb-6 leading-tight">
                Curated <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-slate-600">Excellence</span>
              </h1>
            </MotionInView>
            
            <MotionInView intensity="low" direction="horizontal" delay={0.4}>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg ml-auto">
                厳選されたスタートアップへの投資機会を通じて、
                持続可能なリターンと未来への貢献を両立させます。
                Force Legacyは、あなたのポートフォリオに確かな価値を加えます。
              </p>
            </MotionInView>
            
            <MotionInView intensity="low" direction="horizontal" delay={0.5}>
              <div className="flex flex-wrap gap-4 justify-end">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none px-8 h-14 text-lg font-bold tracking-wide">
                  Join Network <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/5 rounded-none px-8 h-14 text-lg font-bold tracking-wide">
                  Investment Thesis
                </Button>
              </div>
            </MotionInView>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <MotionInView intensity="low" direction="horizontal">
                <img 
                  src="/images/hero-main.png" 
                  alt="Philosophy" 
                  className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </MotionInView>
            </div>
            <div className="md:w-1/2">
              <MotionInView intensity="low" direction="vertical" className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Our Philosophy</h2>
                <div className="w-24 h-1 bg-secondary" />
              </MotionInView>
              
              <MotionInView intensity="low" direction="vertical" delay={0.1}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  私たちは、短期的なトレンドよりも、本質的な価値と持続可能性を重視します。
                  徹底したデューデリジェンスと、創業者との深い対話を通じて、
                  真に世界を変えうるポテンシャルを持つ企業のみを厳選しています。
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  投資は単なる資金提供ではありません。
                  それは、未来への投票であり、次世代への遺産（Legacy）です。
                </p>
              </MotionInView>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <MotionInView variants={fadeInUp} intensity="low">
              <div className="bg-white p-10 shadow-sm border-t-4 border-secondary h-full">
                <PieChart className="w-10 h-10 text-secondary mb-6" />
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Diversified Portfolio</h3>
                <p className="text-muted-foreground">
                  FinTech, DeepTech, SaaSなど、成長性の高いセクターに分散投資し、
                  リスクを最小限に抑えながらリターンを最大化します。
                </p>
              </div>
            </MotionInView>

            <MotionInView variants={fadeInUp} intensity="low">
              <div className="bg-white p-10 shadow-sm border-t-4 border-secondary h-full">
                <Lock className="w-10 h-10 text-secondary mb-6" />
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Rigorous Due Diligence</h3>
                <p className="text-muted-foreground">
                  財務、法務、技術、市場性のあらゆる側面から厳格な審査を行い、
                  確かな信頼性を持つ案件のみをご紹介します。
                </p>
              </div>
            </MotionInView>

            <MotionInView variants={fadeInUp} intensity="low">
              <div className="bg-white p-10 shadow-sm border-t-4 border-secondary h-full">
                <Globe className="w-10 h-10 text-secondary mb-6" />
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Global Access</h3>
                <p className="text-muted-foreground">
                  国内だけでなく、シリコンバレーやアジアの有望なスタートアップへの
                  アクセスを提供し、グローバルな投資機会を創出します。
                </p>
              </div>
            </MotionInView>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary text-secondary-foreground flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <MotionInView intensity="low" direction="vertical">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Partner with Excellence
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
              限定された投資家コミュニティへの招待制となっております。
              詳細についてはお問い合わせください。
            </p>
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90 rounded-none px-10 h-16 text-xl font-bold tracking-wide shadow-xl">
              Request Access
            </Button>
          </MotionInView>
        </div>
      </section>
    </motion.div>
  );
}
