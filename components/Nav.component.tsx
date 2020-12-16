import Link from "next/link"
import { useRouter } from "next/router";

const Nav = ({ data }) => {
    let category;
    if (useRouter().query.category == undefined) {
        category = useRouter().pathname.replace('/', '');
    } else {
        category = useRouter().query.category;
    }
    return (
        <nav className={`navbar ${data}`}>
            <section className="container">
                <Link href="/"><a className="navbar-brand" href="#"></a></Link>
                <div className="right">
                    <Link href="/blog"><a className={category === 'blog' ? 'active' : ''}>BLOG</a></Link>
                    <Link href="/portfolio"><a className={category === 'portfolio' ? 'active' : ''}>PORTFOLIO</a></Link>

                    <div className="icon-group">
                        <a target='_blank' href="http://github.com/FernandoBoza"><i className="fab fa-github" /></a>
                        <a target='_blank' href="https://codepen.io/fernandob"><i className="fab fa-codepen" /></a>
                        <a target='_blank' href="https://www.linkedin.com/in/fboza/"><i className="fab fa-linkedin" /></a>
                        <a target='_blank' href="https://repl.it/@fernandob"><i className="fas fa-terminal" /></a>
                    </div>
                </div>
            </section>
        </nav>
    );
}

export default Nav;
