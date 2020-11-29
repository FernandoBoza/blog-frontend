import React from "react";
import Link from "next/link"

const Nav = () => {
    return (
        <section className="Nav container">
            <nav className="navbar px-0">
                <Link href="/">
                    <a className="navbar-brand" href="#">
                        <img className='logo' src="/Logo.svg" alt="Fernando Boza Logo" loading="lazy" />
                    </a>
                </Link>
                <div className="right">
                    {/* <Link href="/resume">
                        <a>Resume</a>
                    </Link> */}
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                    <Link href="/portfolio">
                        <a>Portfolio</a>
                    </Link>
                </div>
            </nav>
        </section>
    );
}

export default Nav;
