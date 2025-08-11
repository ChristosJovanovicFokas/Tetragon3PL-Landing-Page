export function Fulfillment() {
    const section = document.createElement('section');
    section.className = 'service-section fulfillment';
	section.id = "fulfillment-section";
	section.setAttribute('role', 'tabpanel');
	section.hidden = true;

    section.innerHTML = `
        <h2>Fulfillment Solutions</h2>
        <p>Our fulfillment services are built around your business to keep your orders flowing with speed, accuracy, and full transparency. Whether you're shipping direct-to-consumer or to retailers, we've got you covered.</p>
        
        <ul>
            <li><strong>DTC (Direct to Customer)</strong></li>
            <p>Fast, branded fulfillment tailored for your DTC store. We handle everything from order processing to custom packaging, ensuring a seamless customer experience from checkout to doorstep.</p>
            <li><strong>Subscription Box Fulfillment</strong></li>
            <p>Reliable kitting, assembly, and timed shipping for your subscription products. We ensure every box is packed accurately and delivered on schedule to delight your customers month after month.</p>
            <li><strong>High-Volume & Launch-Based Fulfillment</strong></li>
            <p>From crowdfunding campaigns and product launches to flash sales, we specialize in handling sudden spikes in order volume. Our scalable operations ensure fast processing, accurate packing, and on-time delivery — whether you're shipping thousands of pre-orders from Kickstarter or running a limited-time sale.</p>
            <li><strong>Marketplaces Fulfillment</strong></li>
            <p>Seamless order fulfillment for all your sales channels — including Amazon (FBA & FBM), Walmart, Etsy, TikTok Shop, and Instagram. We integrate directly with each platform to ensure fast processing, real-time inventory syncing, and reliable delivery to keep your ratings high and your customers happy.</p>
            <li><strong>Returns & Reverse Logistics</strong></li>
            <p>We manage returns efficiently — from receiving and inspecting items to restocking or disposing of them based on your policies. Our streamlined process ensures faster turnaround, better inventory accuracy, and a smoother post-purchase experience for your customers.</p>
        </ul>
         
        <ul class="features">
            <h2>Fulfillment Features</h2>
            <div class="card">
                <li>📦 Same-day order processing</li>
                <p>Orders are picked, packed, and shipped the same day for fast delivery.</p>
            </div>
            <div class="card">
                <li>🚚 Fast, discounted shipping with major carriers</li>
                <p>Leverage our shipping volume for better rates with UPS, FedEx, USPS, and others.</p>
            </div>
            <div class="card">
                <li>🔄 Automated returns and exchanges</li>
                <p>Streamlined reverse logistics with tracking and restocking workflows.</p>
            </div>
            <div class="card">
                <li>🔗 Platform integrations & Multi-Channel Order Consolidation</li>
                <p>Sync and seamlessly manage orders from all sales channels in one centralized.</p>
            </div>
            <div class="card">
                <li>📊 Real-time order tracking and analytics</li>
                <p>Transparent data on order status, shipping, and performance metrics.</p>
            </div>
        </ul>
  `;

  return section;
}
