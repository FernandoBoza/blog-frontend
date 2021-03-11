import Fade from "react-reveal/Fade";
import { HeroObject } from "../utils/CONSTANT";

export default function Hero({ handleScroll }) {
    return (
        <div className="row hero">
            <style jsx global>{`
            .mousey {
                width: 20px;
                height: 30px;
                border-radius: 6px;
                padding: 0 6px;
                border: 1px solid;
                box-sizing: border-box;
                position: relative;
                cursor: pointer;
                margin: 0 auto;
              }
              .scroller {
                position: relative;
                left: 50%;
                top: 6px;
                margin-left: -2px;
                width: 4px;
                height: 4px;
                border-radius: 4px;
                animation-name: scroll;
                animation-duration: 2.2s;
                animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
                animation-iteration-count: infinite;
              }
              @keyframes scroll {
                0% {
                    opacity: 0;
                }
                10% {
                    transform: translateY(0);
                    opacity: 1;
                }
                100% {
                    transform: translateY(50px);
                    opacity: 0;
                }
            }

            .right-img-container {
                position: absolute;
                overflow: hidden;
                width: 100vw;
                height: 100vh;
                right: 0;
                top: 0;
                pointer-events: none;
            }

            .dark.ipad {
                position: absolute;
                width: 1000px;
                top: 210px;
                left: 59%;
            }
            .dark.iphone {
                position: absolute; 
                width: 410px;
            }
            .dark.iphone.iphone-1 {
                top: 52%;
                right: 25%;
            }
            .dark.iphone.iphone-2 {
                top: 67%;
                right: 10%;
            }
            
            @media (max-width: 430px) {
                .row.hero {
                    height: 70vh;
                }
            }

            @media (max-width: 900px) {
                .right-img-container {
                    display: none;
                }
            }
            
            @media (max-width: 1200px) {
                .dark.iphone.iphone-1 {
                    right: 10%;
                }
            }

            
            `}</style>
            <div className="d-flex flex-column col-sm-12 col-md-12 offset-lg-0 col-lg-6">
                <h1 className="title my-4">
                    <Fade delay={600} bottom cascade>
                        <span className='font-weight-light'>Fernando</span>
                        <span className=''>Boza</span>
                    </Fade>
                </h1>
                <Fade delay={700} top cascade>
                    <div className='flex-column'>
                        <p className='display-content'>{HeroObject.intro}</p>
                    </div>
                </Fade>
            </div>

            <div className="right-img-container">
                <Fade duration={2000} delay={900} right><img className='dark ipad' src="../static/imgs/hero/dark-ipad.png" alt="" /></Fade>
                <Fade duration={1000} delay={1100} right><img className='dark iphone iphone-1' src="../static/imgs/hero/dark-iphone-1.png" alt="" /></Fade>
                <Fade duration={1000} delay={1200} right><img className='dark iphone iphone-2' src="../static/imgs/hero/dark-iphone-2.png" alt="" /></Fade>
            </div>

            <div className='col-12 col-hero-right'>
                {mousy(handleScroll)}
            </div>
        </div>
    )
}

function mousy(handleScroll) {
    return (
        <Fade top>
            <div className="mt-5">
                <div onClick={handleScroll} className="mousey">
                    <div className="scroller" />
                </div>
            </div>
        </Fade>
    )
}
