import Link from "next/link"
import { useRouter } from "next/router";
import Fade from 'react-reveal/Fade';
import { useState } from 'react';

const Nav = ({ data }) => {

    const [menuToggle, handleMenuToggle] = useState(false);

    let category;
    if (useRouter().query.category == undefined) {
        category = useRouter().pathname.replace('/', '');
    } else {
        category = useRouter().query.category;
    }

    const mobileStyles = {
        navBar: {
            backgroundImage: 'url(/Logo.svg)',
            width: '55px',
            height: '50px',
            backgroundSize: 'cover'
        },
        logo_burger: {
            zIndex: 1,
            height: '80px',
            width: '100vw',
            position: 'fixed',
            alignItems: 'center',
            transition: "box-shadow .4s",
            backdropFilter: 'blur(4px)',
            boxShadow: data == 'shadow' ? "0 9px 23px rgba(0,0,0,.28)" : ''
        },
        icon_group: {
            zIndex: 2,
            top: 0,
            position: 'fixed',
            opacity: menuToggle ? 1 : 0,
            transition: "opacity .4s",
            width: '100%',
            height: '100%',
            backdropFilter: 'blur(5px)',
            pointerEvents: menuToggle ? 'all' : 'none',

        }
    }

    const desktopStyles = {
        d: {
            zIndex: 1,
            width: "100%",
            position: "fixed",
            top: 0,
            transition: "box-shadow .4s",
            backdropFilter: 'blur(10px)',
            boxShadow: data == 'shadow' ? "0 9px 23px rgba(0,0,0,.28)" : ''

        },
        logo: {
            backgroundImage: 'url(/Logo.svg)',
            width: '55px',
            height: '50px',
            backgroundSize: 'cover',
            boxShadow: 'none'
        },
    }
    return (
        <nav className='navbar p-0'>
            <style jsx>{`

                i {
                    cursor: pointer
                }

                a.nav-item {
                    font-weight: 300;
                    letter-spacing: 2px;
                }

                .mobile .icon-group a {
                    transition: transform .4s
                }
            
                .hide.mobile .icon-group a {
                    transform: translateX(-10%)
                }
                
                .show.mobile .icon-group a {
                    transform: translateX(10%)
                }

                .desktop a.active.nav-item::after {
                    content: '';
                    background: black;
                    height: 2px;
                    position: absolute;
                    bottom: -20%;
                    width: 100%;
                    left: 0;
                }
                
                .desktop a.active.nav-item {
                    position: relative;
                }
            `}</style>
            <div style={desktopStyles.d} className="desktop d-none p-3 justify-content-between d-md-flex" >
                <div className="container">
                    <Fade top>
                        <Link href="/"><a className="navbar-brand d-flex" style={desktopStyles.logo} href="#"></a></Link>
                    </Fade>
                    <Fade right>
                        <Link href="/FernandoBoza_Resume.pdf"><a className='nav-item' target='_blank' download>RESUME</a></Link>
                        <Link href="/blog"><a className={category === 'blog' ? 'active nav-item' : 'nav-item'}>BLOG</a></Link>
                        <Link href="/portfolio"><a className={category === 'portfolio' ? 'active nav-item' : 'nav-item'}>PORTFOLIO</a></Link>
                    </Fade>

                    <div className="icon-group w-25 d-flex justify-content-around">
                        <Fade right cascade>
                            <a target='_blank' href="http://github.com/FernandoBoza"><i className="fab fa-github" /></a>
                            <a target='_blank' href="https://repl.it/@fernandob"><i className="fas fa-terminal" /></a>
                            <a target='_blank' href="https://codepen.io/fernandob"><i className="fab fa-codepen" /></a>
                            <a target='_blank' href="https://www.linkedin.com/in/fboza/"><i className="fab fa-linkedin" /></a>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className={`${menuToggle ? 'show' : 'hide'}` + " mobile d-flex d-md-none"}>
                <div className=" d-flex p-3 justify-content-between logo-burger" style={mobileStyles.logo_burger}>
                    <Fade top>
                        <Link href="/"><a className="navbar-brand d-flex" style={mobileStyles.navBar} href="#"></a></Link>
                    </Fade>
                    <i onClick={() => handleMenuToggle(!menuToggle)} className="fas fa-cheeseburger"></i>
                </div>
                <div onClick={() => handleMenuToggle(!menuToggle)} className='icon-group d-flex flex-column justify-content-around' style={mobileStyles.icon_group}>
                    <Link href="/blog"><a className={category === 'blog' ? 'active nav-item' : 'nav-item'}>BLOG</a></Link>
                    <Link href="/portfolio"><a className={category === 'portfolio' ? 'active nav-item' : 'nav-item'}>PORTFOLIO</a></Link>
                    <a target='_blank' href="http://github.com/FernandoBoza"><i className="fab fa-github" /></a>
                    <a target='_blank' href="https://repl.it/@fernandob"><i className="fas fa-terminal" /></a>
                    <a target='_blank' href="https://codepen.io/fernandob"><i className="fab fa-codepen" /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/fboza/"><i className="fab fa-linkedin" /></a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
