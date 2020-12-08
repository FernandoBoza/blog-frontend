import React from "react";
import Link from "next/link"

const Nav = () => {
    return (
        <section className="Nav container">
            <nav className="navbar px-0">
                <Link href="/">
                    <a className="navbar-brand" href="#">
                        {/* <img className='logo' src="/Logo.svg" alt="Fernando Boza Logo" loading="lazy" /> */}
                    </a>
                </Link>
                <div className="right">
                    <Link href="/blog"><a>
                        {/* <i className="fas fa-newspaper"></i> */}
                        Blog</a></Link>
                    <Link href="/portfolio"><a>
                        {/* <i className="fas fa-chart-network"></i> */}
                        Portfolio</a></Link>
                </div>
            </nav>
        </section>
    );
}

export default Nav;
