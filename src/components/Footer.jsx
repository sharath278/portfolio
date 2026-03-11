import './Footer.css';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="text-gradient">&lt;Dev/&gt;</span>
                    </div>

                    <p className="footer-copyright">
                        © {currentYear} Developer Portfolio. All rights reserved.
                    </p>

                    <p className="footer-made-with">
                        Built with <Heart size={14} className="heart-icon" /> using React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
