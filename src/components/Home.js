import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <div className="bottom">
        <i className="fas fa-home"> </i> Welcome to my cozy space on the internets! (●ᴗ●) (ᗒᗨᗕ)
      </div>
    </motion.div>
  );
};

export default Home;
