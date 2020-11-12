import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contact</h1>
                    <p>hi (at) fernandoboza.com</p>
                    <div className="icon-group">
                        <i className="fab fa-github"/>
                        <i className="fab fa-codepen"/>
                        <i className="fab fa-linkedin"/>
                        <i className="fas fa-terminal"/>
                    </div>
                </div>
                <div className="col text-right">
                    © FernandoBoza.com
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
