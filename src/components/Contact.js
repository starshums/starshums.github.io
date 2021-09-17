import { motion } from "framer-motion";
import React, { Fragment } from "react";

const Contact = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <Fragment>
        <div className="bottom">
          <div class="command commndMenu">
            <p>
              <a class="n-link" href="mailto:chemsed.dinerachidi@gmail.com">
                >  chemsed.dinerachidi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Fragment>
    </motion.div>
  );
};

export default Contact;
