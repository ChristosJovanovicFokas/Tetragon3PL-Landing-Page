import { Header } from '../components/header.js';
import { Second_Header } from '../components/sec_header.js';
import { Footer } from '../components/footer.js';
import { Contact } from '../components/contact.js';

import { FulfillmentPricing } from '../components/pricing/fulfillment.js';
import { BrandBoosting } from '../components/pricing/brand.js';
import { Warehousing } from '../components/pricing/warehousing.js';
import { Marketplace } from '../components/pricing/market.js';
import { Prep } from '../components/pricing/prep.js';

import { dynamicTabButtons } from '../lib/dynamicTabButtons.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Header
    app.append(Header());
	app.append(Second_Header());

    // Pricing Sections
	app.append(Warehousing());
	app.append(FulfillmentPricing());
	app.append(BrandBoosting());
	app.append(Marketplace());
    app.append(Prep());


	app.append(Contact());
    app.append(Footer());

	dynamicTabButtons();
});
