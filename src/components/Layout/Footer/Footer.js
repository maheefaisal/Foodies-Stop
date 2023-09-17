import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <div class="footer-left">
                <img src="https://i.ibb.co/vYNNNQ9/1.png" alt="Company Logo" />
                <p>Foodie Stop</p>
            </div>
            <div class="footer-right">
                <div class="social-icons">
                    <a href="#"><img src="https://i.ibb.co/8Pd3S3r/free-youtube-logo-icon-2431-thumb.png" alt="YouTube" /></a>
                    <a href="#"><img src="https://i.ibb.co/RQHw0v7/pngtree-facebook-social-media-icon-png-image-6315968.png" alt="Facebook" /></a>
                    <a href="#"><img src="https://i.ibb.co/BCDRYLx/1.png" alt="Instagram" /></a>
                </div>
                <p class="slogan">Food Is Awesome</p>
                <p>Email: mahee504@gmail.com</p>
                <p>Open: Mon-Fri 9am-5pm</p>
                <p>Phone: +1-123-456-7890</p>
            </div>
        </footer>

    );
};

export default Footer;