import Fade from "react-reveal/Fade";
import { homeObject } from "../utils/CONSTANT";

export default function Hero({ handleScroll }) {
    return (
        <div className="row hero">
            <style>{`
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
            `}</style>
            <div className="col-sm-12 col-md-12 offset-lg-0 col-lg-5 ">
                <h1 className="title my-4">
                    <Fade bottom cascade>
                        <span className='font-weight-light'>Fernando</span>
                        <span className=''>Boza</span>
                    </Fade>
                </h1>
            </div>
            <Fade top cascade>
                <div className='offset-lg-2 col-lg-5'>
                    <p className='colored-meta'> Full Stack Developer</p>
                    <h2><b>Welcome</b></h2>
                    <p className=''>{homeObject.intro}</p>

                    <p className='colored-meta text-right'> UI | UX Designer</p>
                </div>
            </Fade>
            <div className='col-12 col-hero-right'>
                <Fade top>
                    <div className="mt-5">
                        <div onClick={handleScroll} className="mousey">
                            <div className="scroller" />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}