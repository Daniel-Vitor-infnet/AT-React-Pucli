import React from 'react';
import styles from '../Styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/trivago" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/trivago" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/trivago/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/user/trivago" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/company/trivagonv/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
            <p className={styles.footerText}>© {new Date().getFullYear()} Trivago. Todos os direitos reservados.</p>
        </footer>
    );
}
