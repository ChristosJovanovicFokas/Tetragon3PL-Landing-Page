export function Marketplace() {
        const section = document.createElement('section');
        section.className = 'marketplace-section';
        section.id = 'marketplace-section';
        section.setAttribute('role', 'tabpanel');
        section.hidden = true;

        section.innerHTML = `
            <div class="card">
              <h3>Unified Marketplace Sync</h3>
              <span class="included-service">Included with Any Service</span>
              <p>Automatically sync your inventory, orders, tracking, and product info across Amazon, Walmart, Etsy, TikTok, and more — all in one place.</p>
            </div>

            <div class="card">
              <h3>Onboarding Support</h3>
              <span class="included-service">Included with Any Service</span>
              <p>Help setting up your seller accounts, listings, and logistics across platforms like Amazon, Etsy, TikTok, and Walmart.</p>
            </div>

            <div class="card">
              <h3>Product Listing Optimization</h3>
              <span class="included-service">Included with Any Service</span>
              <p>We create high-converting, SEO-optimized listings with titles, images, bullet points, and keywords tailored to each platform.</p>
            </div>

            <div class="card">
              <h3>Product Reviews & Reputation Management</h3>
              <span class="included-service">Included with Any Service</span>
              <p>We help you collect positive reviews and manage customer feedback to boost trust and marketplace performance.</p>
            </div>

    `;

    return section;
}

