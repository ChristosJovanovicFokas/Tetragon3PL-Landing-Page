import { Newsletter } from '../components/newsletter.js';


export function Footer() {
    
    const footer = document.createElement('section');
    footer.className = 'site-footer';

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-branding">
                    <h3>MyWarehouse</h3>
                    <p>Smart logistics for modern businesses.</p>
                </div>

                <div class="footer-links">
                    <a href="/src/pages/services.html">Solutions</a>
                    <a href="/src/pages/pricing.html">Rates</a>
                    <a href="/src/pages/connect.html">Connect</a>
                    <a href="/src/pages/connect.html">Careers</a>
                    <a href="/src/pages/faq.html">FAQ</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div id="newsletter-placeholder"></div>
            </div>
            <div class="footer-bottom">
                <span>© ${new Date().getFullYear()} Tetragon3PL. All rights reserved</span>
            </div>
        </div>
    `;
    
    const newsletter = footer.querySelector('#newsletter-placeholder');
    newsletter.append(Newsletter());

    return footer;
}
