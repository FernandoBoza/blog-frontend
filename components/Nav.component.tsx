import { log } from "console";
import Link from "next/link"
import { useRouter } from "next/router";

const Nav = () => {
    let category;
    if (useRouter().query.category == undefined) {
        category = useRouter().pathname.replace('/', '');
    } else {
        category = useRouter().query.category;
    }

    return (
        <section className="Nav container">
            <nav className="navbar px-0">
                <Link href="/"><a className="navbar-brand" href="#"></a></Link>
                <div className="right">
                    <Link href="/blog"><a className={category === 'blog' ? 'active' : ''}>BLOG</a></Link>
                    <Link href="/portfolio"><a className={category === 'portfolio' ? 'active' : ''}>PORTFOLIO</a></Link>

                    <div className="icon-group">
                        <Link href="http://github.com/FernandoBoza"><a target='_blank'><i className="fab fa-github" /></a></Link>
                        <Link href="https://codepen.io/fernandob"><a target='_blank'><i className="fab fa-codepen" /></a></Link>
                        <Link href="https://www.linkedin.com/in/fboza/"><a target='_blank'><i className="fab fa-linkedin" /></a></Link>
                        <Link href="https://repl.it/@fernandob"><a target='_blank'><i className="fas fa-terminal" /></a></Link>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Nav;
