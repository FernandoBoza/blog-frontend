import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h1>Contact</h1>
                <p className='m-0 d-flex justify-content-between'>
                    hi (at) fernandoboza.com
                    <p className="m-0 text-right">{new Date().getFullYear()} © FernandoBoza.com</p>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
