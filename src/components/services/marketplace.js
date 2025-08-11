export function Marketplace() {
    const section = document.createElement('section');
    section.className = 'service-section marketplace';
	section.id = 'marketplace-section';
	section.setAttribute('role', 'tabpanel');
	section.hidden = 'true';

    section.innerHTML = `
            <h2>Marketplace Seller Services</h2>
            <p>
                We help marketplace sellers manage logistics with speed and scale — so you can focus on sales while we handle the backend.
        From integration to shipping, we’ve got your storefront covered.
            </p>

            <ul class="features">
                <li>🛒 End-to-End Prep for Markerplace Compliance 
                    <p>Complete prep services to meet all marketplace requirements—labeling, bundling, packaging, and more.</p>
                <li> Unified Marketplace Sync
                    <p>Seamlessly connect and sync inventory, orders, tracking, and product data across Amazon, Walmart, Etsy, TikTok, and other platforms—all from one centralized system.</p>
                </li>
                <li>Marketplace Return Management
                    <p>We handle return processing from all major marketplaces—inspecting, restocking, and resolving issues efficiently to protect your brand and recover inventory value.</p>
                </li>
                <li>Onboarding Support
                    <p>Assistance setting up seller accounts and listings across platforms like Amazon, Etsy, TikTok, and Walmart.</p>
                </li>
                <li>Product Listing Optimization 
                    <p>We create compelling, SEO-rich product listings customized for each marketplace—from optimized titles and bullet points to high-quality images and backend keywords. Our process ensures your products stand out, comply with platform requirements, and boost conversion rates. Visuals include before-and-after listing comparisons, optimization checklists, keyword focus highlights, marketplace logos, and conversion growth charts to demonstrate the impact.</p>
                </li>
                <li>Product Reviews & Reputation Management
                    <p>Strategies and tools to gather positive reviews and respond to customer feedback.</p>
                </li>
            </ul>
  `;

  return section;
}
