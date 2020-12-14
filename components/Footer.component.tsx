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
                        <p className="text-right">{new Date().getFullYear()} © FernandoBoza.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
