import Link from 'next/link';
import Fade from 'react-reveal/Fade';

export default function Custom404() {
    return (
        <div id="pg404">
            <style jsx>{`
                #pg404 {
                    height: 100vh;
                    background-size: cover;
                    position: absolute;
                    top: 0;
                    width: 100vw;
                }
                
                #pg404::before {
                    content: "";
                    background-image: url("../static/imgs/404.jpg");
                    background-size: cover;
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                    opacity: 0.5;
                }

                .center {
                    position: absolute;
                    top:40%;
                    left: 25%;
                }

            `}</style>
            <Fade top cascade>
                <div className="center">
                    <h1 className='title'>Missing 404</h1>
                    <p>Hey stop trying to hack my sh!t</p>
                    <Link href="/"><a className='btn btn-success'><i className="mr-2 fas fa-chevron-left" /> You can head home here</a></Link>
                </div>
            </Fade>
        </div>
    )
}