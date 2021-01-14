const Footer = () => {
    return (
        <footer className="footer mb-3">
            <div className="container">
                <h1>Contact</h1>
                <p className='m-0 d-flex justify-content-between'>
                    hi (at) fernandoboza.com
                    <span className="m-0 text-right">{new Date().getFullYear()} © FernandoBoza.com</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
