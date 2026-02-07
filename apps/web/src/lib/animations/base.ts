import type { Variants } from "motion/react";

/**
 * Simple fade from bottom
 */

export const fadeFromBottom: Variants = {
  initial: {
    filter: "blur(5px)",
  },
  in: {
    filter: "none",
    y: [20, 0],
    opacity: [0, 1],
  },
  out: {
    y: [0, 20],
    opacity: [1, 0],
  },
};

export const headerVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};
