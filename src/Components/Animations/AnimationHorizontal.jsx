import { motion } from "framer-motion"
const AnimationHorizontal = ({ children }) => {

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -100 }
  }

  return (
    <motion.div
      className="allPages"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: 1}}
    >
      {children}
    </motion.div>
  )
}

export default AnimationHorizontal