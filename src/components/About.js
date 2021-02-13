import { motion } from "framer-motion";
import React, { Fragment } from "react";

const About = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <Fragment>
        <p className="bottom">
          Software Developer and an Indie Game Developer, in love with React and
          GraphQL technologies, currently developing a 3D platformer game called
          FEZBOT made using Unity and Blender. To follow more on my game and
          more, please visit my itch.io page :{" "}
          <a
            className="n-link"
            target="_blank"
            href="https://starshums.itch.io"
          >
            starshums.itch.io
          </a>
          also available on Game Jolt:{" "}
          <a
            className="n-link"
            target="_blank"
            href="https://gamejolt.com/@starshums"
          >
            gamejolt.com/@starshums
          </a>
          ~ Thank you! :) ~ 💻
        </p>
      </Fragment>
    </motion.div>
  );
};

export default About;
