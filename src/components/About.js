import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="bottom">
        <div class="command commndMenu">
          <p>
            Software Developer and an Indie Game Developer, currently in love
            with React and GraphQL technologies, also working on a 3D platformer
            game called FEZBOT
          </p>
          <p>made using Unity and Blender.</p>
          <p> To follow more on my game and more, please visit my itch.io page : </p>
          <p> {"> "} <a target="_blank" href="https://starshums.itch.io">starshums.itch.io</a> </p>
          <p> also available on Game Jolt: </p>
          <p> {"> "} <a target="_blank" href="https://gamejolt.com/@starshums">gamejolt.com/@starshums</a> </p>
          <p>~ Thank you! :) </p>
          <p> ~ 💻 </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
