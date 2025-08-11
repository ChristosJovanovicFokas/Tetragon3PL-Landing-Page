

import { Header } from '../components/header.js';
import { Hero } from '../components/home/hero.js';
import { Stats } from '../components/home/stats.js';
import { About } from '../components/home/about.js';
import { Footer } from '../components/footer.js';
import { Industries } from '../components/home/partners.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    app.prepend(Header());      // add header
    app.append(Hero());     // add hero below
    app.append(Stats());
    app.append(About());        //add about section
	app.append(Industries()); //add parterns logo slideshow
    app.append(Footer());       //add footer section

});
