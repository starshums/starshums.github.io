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
          Software Developer and an Indie Game Developer, in love with 3D, Unity, Laravel, React, and GraphQL technologies.
          Probably working on a game right now. Follow my itch.io to get news on any upcoming games :
          <a
            className="n-link"
            target="_blank"
            href="https://starshums.itch.io"
          >
            starshums.itch.io
          </a>
          also available on Game Jolt:
          <a
            className="n-link"
            target="_blank"
            href="https://gamejolt.com/@starshums"
          >
            gamejolt.com/@starshums
          </a>
          ~ Thanks!
        </p>
      </Fragment>
    </motion.div>
  );
};

export default About;
