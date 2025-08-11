import { Header } from '../components/header.js';
import { Second_Header } from '../components/sec_header.js';
import { Footer } from '../components/footer.js';
import { Contact } from '../components/contact.js'; 

import { Warehousing } from '../components/services/warehousing.js';
import { Fulfillment } from '../components/services/fulfillment.js';
import { Prep } from '../components/services/prep.js';
import { Marketplace } from '../components/services/marketplace.js';
import { BrandBooster } from '../components/services/brandbooster.js';

import { dynamicTabButtons } from '../lib/dynamicTabButtons.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.append(Header());
    app.append(Second_Header());

    app.append(Warehousing());
    app.append(Fulfillment());
    app.append(Prep());
    app.append(Marketplace());
    app.append(BrandBooster());
    
    app.append(Footer());

    dynamicTabButtons();

});
