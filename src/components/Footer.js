import "../index.css";
import { footerLinks } from "../data"; //ou coloca junto né oh {... , ...}
import { socialLinks } from "../data";

export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {footerLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} className="footer-link">
                                {link.text}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.href} target="_blank" rel="noreferrer" className="footer-icon">
                                <i className={`fab fa-${link.text}`}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};
