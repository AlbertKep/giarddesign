import { stagger } from "motion/react";

export const slideMenu = {
  hidden: { x: "100%", transition: { when: "afterChildren", delayChildren: stagger(0.15) } },
  visible: {
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.15 },
  },
};

export const fadeMenuItems = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const sectionStagger = (time) => ({
  visible: { transition: { staggerChildren: time } },
});

export const scaleIn = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0, scale: 0 },
};
export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay },
  },
});

export const slideUp = (distance = 150, duration = 0.7) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});
