import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h1>Contact</h1>
                <p>hi (at) fernandoboza.com</p>
                <div className="row">
                    <div className="col">
                        <div className="icon-group">
                            <Link href="http://github.com/FernandoBoza"><a target='_blank'><i className="fab fa-github" /></a></Link>
                            <Link href="https://codepen.io/fernandob"><a target='_blank'><i className="fab fa-codepen" /></a></Link>
                            <Link href="https://www.linkedin.com/in/fboza/"><a target='_blank'><i className="fab fa-linkedin" /></a></Link>
                            <Link href="https://repl.it/@fernandob"><a target='_blank'><i className="fas fa-terminal" /></a></Link>
                        </div>
                    </div>
                    <div className="col">
                        <p className="text-right">© FernandoBoza.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
