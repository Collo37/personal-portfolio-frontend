import { motion } from "framer-motion";

const MotionDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(0px)" }}
      animate={{ opacity: 1, filter: "blur(0)" }}
      exit={{ opacity: 0, filter: "blur(2px)" }}
      style={{ transiton: "all 0.4s ease" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
