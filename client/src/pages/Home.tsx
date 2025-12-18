import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { pageTransition, EASE_OUT, DURATION } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [hoveredSide, setHoveredSide] = useState<"startup" | "investor" | null>(null);
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    setLocation(path);
  };

  return (
    <motion.div 
      className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-background relative"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Background Image Layer - Shared but masked */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-main.png" 
          alt="Force Legacy Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80" />
      </div>

      {/* Startup Side */}
      <div 
        className={cn(
          "relative flex-1 h-1/2 md:h-full flex flex-col justify-center items-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] border-b md:border-b-0 md:border-r border-border/50 group cursor-pointer overflow-hidden",
          hoveredSide === "investor" ? "md:flex-[0.8] opacity-60 grayscale" : "md:flex-1 opacity-100",
          hoveredSide === "startup" ? "md:flex-[1.2]" : ""
        )}
        onMouseEnter={() => setHoveredSide("startup")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleNavigation("/startup")}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent z-0" />
        <motion.div 
          className="absolute inset-0 bg-primary/5 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        <div className="relative z-10 max-w-md w-full">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: DURATION.SLOW, ease: EASE_OUT, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/20 rounded-full text-xs font-bold tracking-widest uppercase text-primary mb-6 bg-white/50 backdrop-blur-sm">
              For Founders
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-600">Future</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-sm">
              革新的なアイデアを持つスタートアップへ。<br/>
              確実な成長と信頼できるパートナーシップを提供します。
            </p>
            
            <div className="flex items-center text-primary font-bold tracking-wide group-hover:translate-x-2 transition-transform duration-300">
              Explore Opportunities <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Investor Side */}
      <div 
        className={cn(
          "relative flex-1 h-1/2 md:h-full flex flex-col justify-center items-center p-8 md:p-16 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-pointer overflow-hidden",
          hoveredSide === "startup" ? "md:flex-[0.8] opacity-60 grayscale" : "md:flex-1 opacity-100",
          hoveredSide === "investor" ? "md:flex-[1.2]" : ""
        )}
        onMouseEnter={() => setHoveredSide("investor")}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleNavigation("/investor")}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-transparent z-0" />
        <motion.div 
          className="absolute inset-0 bg-secondary/5 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="relative z-10 max-w-md w-full md:text-right flex flex-col md:items-end">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: DURATION.SLOW, ease: EASE_OUT, delay: 0.4 }}
          >
            <span className="inline-block py-1 px-3 border border-secondary/20 rounded-full text-xs font-bold tracking-widest uppercase text-secondary mb-6 bg-white/50 backdrop-blur-sm">
              For Investors
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
              Invest in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-secondary to-slate-600">Legacy</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-sm ml-auto">
              先見性のある投資家へ。<br/>
              次世代を担う確かな価値と、持続可能なリターンを。
            </p>
            
            <div className="flex items-center justify-end text-secondary font-bold tracking-wide group-hover:-translate-x-2 transition-transform duration-300">
              Discover Portfolio <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center Logo / Divider */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
        <motion.div 
          className="w-[1px] h-32 bg-gradient-to-b from-transparent via-accent to-transparent"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 128, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <motion.h1 
          className="text-2xl font-heading font-bold tracking-tighter text-primary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          FORCE LEGACY
        </motion.h1>
      </div>
    </motion.div>
  );
}
