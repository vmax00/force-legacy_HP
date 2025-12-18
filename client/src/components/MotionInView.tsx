import { motion, useInView, UseInViewOptions, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { EASE_OUT, DURATION, DISTANCE } from "@/lib/motion";

interface MotionInViewProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: UseInViewOptions["amount"];
  direction?: "horizontal" | "vertical";
  intensity?: "low" | "medium" | "high";
}

export default function MotionInView({
  children,
  variants,
  delay = 0,
  duration = DURATION.MEDIUM,
  className = "",
  once = true,
  amount = 0.3,
  direction = "horizontal",
  intensity = "medium",
}: MotionInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Determine distance based on intensity
  const getDistance = () => {
    switch (intensity) {
      case "low": return DISTANCE.SMALL;
      case "high": return DISTANCE.LARGE;
      default: return DISTANCE.MEDIUM;
    }
  };

  const dist = getDistance();

  // Default variants if none provided
  const defaultVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: direction === "horizontal" ? dist : 0,
      y: direction === "vertical" ? dist : 0
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: duration,
        ease: EASE_OUT,
        delay: delay,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
