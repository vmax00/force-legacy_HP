import { Transition, Variants } from "framer-motion";

// Motion Tokens
export const EASE_OUT = [0.22, 1, 0.36, 1] as const; // cubic-bezier(0.22, 1, 0.36, 1)

export const DURATION = {
  FAST: 0.45,
  MEDIUM: 0.6,
  SLOW: 0.9,
};

export const DISTANCE = {
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 40,
};

// Page Transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, x: DISTANCE.SMALL },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATION.FAST,
      ease: EASE_OUT,
    }
  },
  exit: { 
    opacity: 0, 
    x: -DISTANCE.SMALL,
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
    }
  },
};

// Motion Presets
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE.MEDIUM },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.MEDIUM,
      ease: EASE_OUT,
    }
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: DISTANCE.MEDIUM },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATION.MEDIUM,
      ease: EASE_OUT,
    }
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: -DISTANCE.MEDIUM },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATION.MEDIUM,
      ease: EASE_OUT,
    }
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Intensity Levels
export const motionIntensity = {
  investor: {
    distance: DISTANCE.SMALL,
    duration: DURATION.FAST,
  },
  startup: {
    distance: DISTANCE.LARGE,
    duration: DURATION.SLOW,
  },
};
