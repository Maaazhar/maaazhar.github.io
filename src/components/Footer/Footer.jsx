import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <footer>
                <p>Made with <i className="fas fa-heart" ></i> and patience By <a href="https://mazharul-islam.web.app/" target="_blank">Mazharul Islam</a> | <i className="far fa-copyright"></i> 2020 - {currentYear} All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer