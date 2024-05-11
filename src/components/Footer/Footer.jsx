import "./Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <footer>
                <span>Made with <i className="fas fa-heart" ></i> and patience By <a href="https://mazharul-islam.web.app/">Mazharul Islam</a> | <span
                    className="far fa-copyright"></span> 2020 - {currentYear} All rights reserved.
                </span>
            </footer>
        </div>
    )
}

export default Footer