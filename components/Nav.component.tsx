import Link from "next/link"
import { useRouter } from "next/router";
import Fade from 'react-reveal/Fade';

const Nav = ({ data }) => {
    let category;
    if (useRouter().query.category == undefined) {
        category = useRouter().pathname.replace('/', '');
    } else {
        category = useRouter().query.category;
    }
    return (
        <nav className={`navbar ${data}`}>
            <style jsx>{`

                nav .right {
                    width: 30vw;
                    display: flex;
                    justify-content: space-between;
                }
                nav .right a.nav-item {
                    font-weight: 300;
                    text-decoration: none;
                    letter-spacing: 2px;
                    position: relative;
                }
                nav .right a.nav-item::after {
                    content: "";
                    background: #d600a8;
                    height: 1px;
                    position: absolute;
                    top: 45%;
                    display: block;
                    width: 0%;
                    left: -3%;
                    transition: width 0.4s;
                }
                nav .right a.nav-item:hover::after, nav .right a.nav-item.active::after {
                    width: 110%;
                }
                nav .right .icon-group {
                    width: 204px;
                    display: flex;
                    position: relative;
                    justify-content: space-between;
                }
                nav .right .icon-group::after {
                    content: "";
                    height: 150%;
                    position: absolute;
                    display: block;
                    width: 1px;
                    top: -30%;
                }
                
                .icon-group a:nth-child(1):hover {
                    color: #d600a8
                }
                
                .icon-group a:nth-child(2):hover {
                    color: #0c7cd5
                }
                
                .icon-group a:nth-child(3):hover {
                    color: #4caf50
                }
                
                .icon-group a:nth-child(4):hover {
                    color: #ffa726
                }
            `}</style>
            <section className="container">
                <Fade top>
                    <Link href="/"><a className="navbar-brand" href="#"></a></Link>
                </Fade>
                <div className="right">
                    <Fade right>
                        {/* <Link href="/tutorials"><a className={category === 'tutorials' ? 'active nav-item' : 'nav-item'}>TUTORIALS</a></Link> */}
                        <Link href="/blog"><a className={category === 'blog' ? 'active nav-item' : 'nav-item'}>BLOG</a></Link>
                        <Link href="/portfolio"><a className={category === 'portfolio' ? 'active nav-item' : 'nav-item'}>WORK</a></Link>
                    </Fade>

                    <Fade right cascade>
                        <div className="icon-group">
                            <a target='_blank' href="http://github.com/FernandoBoza"><i className="fab fa-github" /></a>
                            <a target='_blank' href="https://repl.it/@fernandob"><i className="fas fa-terminal" /></a>
                            <a target='_blank' href="https://codepen.io/fernandob"><i className="fab fa-codepen" /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/fboza/"><i className="fab fa-linkedin" /></a>
                        </div>
                    </Fade>
                </div>
            </section>
        </nav>
    );
}

export default Nav;
