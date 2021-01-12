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
                        <Link href="/tutorials"><a className={category === 'tutorials' ? 'active nav-item' : 'nav-item'}>TUTORIALS</a></Link>
                        <Link href="/blog"><a className={category === 'blog' ? 'active nav-item' : 'nav-item'}>BLOG</a></Link>
                        <Link href="/portfolio"><a className={category === 'portfolio' ? 'active nav-item' : 'nav-item'}>WORK</a></Link>
                    </Fade>

                    <Fade right cascade>
                        <div className="icon-group">
                            <a target='_blank' href="http://github.com/FernandoBoza"><i className="fab fa-github" /></a>
                            <a target='_blank' href="https://codepen.io/fernandob"><i className="fab fa-codepen" /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/fboza/"><i className="fab fa-linkedin" /></a>
                            <a target='_blank' href="https://repl.it/@fernandob"><i className="fas fa-terminal" /></a>
                        </div>
                    </Fade>
                </div>
            </section>
        </nav>
    );
}

export default Nav;
