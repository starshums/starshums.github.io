import { motion } from "framer-motion";
import { Fragment } from "react";

const Home = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <div className="bottom">
        <i className="fas fa-home"> </i> home_page;
      </div>
    </motion.div>
  );
};

export default Home;
