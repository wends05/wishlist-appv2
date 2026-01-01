import { fadeFromBottom } from "@/lib/animations/base";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div
      variants={fadeFromBottom}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      transition={{
        duration: 1,
      }}
      className="h-screen flex items-center justify-center flex-col text-center"
    >
      <h1>Wish App</h1>
      <div className="md:w-sm px-5 pt-5">
        In sunt exercitation minim cupidatat pariatur cupidatat ipsum consequat
        minim quis commodo. Irure exercitation pariatur deserunt id incididunt
        exercitation do fugiat laboris duis non qui mollit exercitation officia.
      </div>
    </motion.div>
  );
}
