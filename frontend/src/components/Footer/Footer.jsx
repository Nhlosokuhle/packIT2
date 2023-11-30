import "./Footer.css";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p className="copyrightText">Created by Nhlosokuhle Khoza. © {currentYear}</p>
        </footer>
    );
}

export default Footer;