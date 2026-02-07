import { motion } from "motion/react";
import { fadeFromBottom } from "@/lib/animations/base";

export default function Hero() {
  return (
    <motion.div
      animate={"in"}
      className="flex h-screen flex-col items-center justify-center text-center"
      exit={"out"}
      initial={"initial"}
      transition={{
        duration: 1,
      }}
      variants={fadeFromBottom}
    >
      <h1>Wish App</h1>
      <div className="px-5 pt-5 md:w-sm">
        In sunt exercitation minim cupidatat pariatur cupidatat ipsum consequat minim quis commodo. Irure exercitation
        pariatur deserunt id incididunt exercitation do fugiat laboris duis non qui mollit exercitation officia.
      </div>
    </motion.div>
  );
}
