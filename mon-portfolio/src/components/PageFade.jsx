import { motion } from 'framer-motion';

const fadeVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const fadeTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

function PageFade({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={fadeTransition}
    >
      {children}
    </motion.div>
  );
}

export default PageFade;
