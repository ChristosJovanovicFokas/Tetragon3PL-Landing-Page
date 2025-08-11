import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { Partners } from '../components/connect/partners.js';
import { DirectInfo } from '../components/connect/directinfo.js';
import { Careers } from '../components/connect/careers.js';
import { FAQ } from '../components/connect/faq.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    //header
    app.prepend(Header());
    app.append(Partners());
    app.append(DirectInfo());
    app.append(Careers());
    app.append(FAQ());

    app.append(Footer());

});
