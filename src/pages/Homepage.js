import React from "react";
import "../Styles/Homepage.scss";
import hero from "../assets/hero.webp";
import logo from "../assets/ghosts.svg";
import navlogo from "../assets/nav.png"
import ContentDiv from "../components/ContentDiv";
import Game from "../components/Game";
import warfare from "../assets/warfare.jpg"
import warzone from "../assets/warzone.png"
import blackOps from "../assets/download.png"
import mobile from "../assets/mobile.png"
import Footer from "../components/Footer";
import burger from "../assets/burger.png"

const Homepage = () => {
  return (
    <div>
      <div className="headerDiv">
        {/* navbar */}
        <div className="navbar">
          <div className="logo">
              <img src={burger} alt="" className="burgerIcon"/>
              <img src={navlogo} alt="" className="navlogo"/>
          </div>
          <div className="category">
              <span>GAMES</span>
              <span>NEWS</span>
              <span>ESPORTS</span>
              <span>SUPPORT</span>
              <span>SHOP</span>
          </div>
          <div className="signup">
              <span>LOGIN|SIGNUP</span>
              <button>PURCHASE MWII</button>
          </div>
        </div>

        {/* background video */}
        <video
          src="https://www.activision.com/cdn/cod/hero/hub-hero-smoke-bg-7-12.mp4"
          autoPlay
          muted
          loop
        ></video>

        {/* hero image */}
        <img src={hero} alt="" className="heroImg" />

        <div className="detailsDiv">
          <img src={logo} alt="" className="logo" />
          <div className="detailsInfo">
            <h1>OLD ENEMIES NEW ALLIANCES</h1>
            <div className="footerDiv">
            <p>
              Reunite with a former enemy and celebrate
              <br />
              50 years of hip hop history
            </p>
            <button>GET INTEL</button>
            </div>
          </div>
        </div>


      </div>

      <div className="contentDiv">
          <ContentDiv />
      </div>

      <div className="getGame">
        <div className="gamesDiv">
        <div className="games-header">
          <h1>GET THE GAME</h1>
        </div>
          <div className="all-games">

          {/* game1 */}
          <Game image={"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/wtb/COD_HP_GTG_MWII_Desktop.webp"} content={warfare}/>

          {/* game2 */}
          <Game image={"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/wtb/COD_HP_GTG_WZ_Desktop.webp"} content={warzone}/>

          {/* game3 */}
          <Game image={"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/wtb/COD_HP_GTG_VG_Desktop.webp"} content={blackOps}/>

          {/* game4 */}
          <Game image={"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/v2023/wtb/COD_HP_GTG_CODM_Desktop.webp"} content={mobile}/>


          </div>
        </div>
      </div>


      <div className="footerDivMain">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
