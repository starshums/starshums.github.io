import { Fragment } from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <div class="command">> Hello there <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px" /> </div>
            <div class="command2">> loading links...</div>

            <div class="command3">
              <div class="commndMenu">
                <Link to="/contact">> [1] Contact me</Link> <br />
              </div>
            </div>

            <div class="command4">> click to proceed...</div>
        </Fragment>
    );
}

export default Home;