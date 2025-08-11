import { Contact } from '../../components/contact.js'

export function FulfillmentPricing() {
  	const section = document.createElement('section');
  	section.className = 'service-section fulfillment-pricing';
	section.id = 'fulfillment-section';
	section.setAttribute('role', 'tabpanel');
	section.hidden = true;
	
  	section.innerHTML = `
      <h2>Fulfillment Rates</h2>
		<div class="pricing-highlights">
			<div>Same-Day Shipping</div>
			<div>Late Cut-Off (9 PM EST)</div>
			<div>Volume-Based Discounts</div>
		</div>

		<div class="pricing-cards">

			<!-- Same-day Fulfillment -->
			<div class="card">
				<h3>Same-Day Pick, Pack & Ship</h3>
				<p class="unit-info">Monthly Tiers, Per Order Fulfilled <span class="note">(Boxes & materials not included)</span></p>
				<ul>
					<li><strong>Tier 1 (0–199 orders):</strong> $2.40 + $0.50/additional item</li>
					<li><strong>Tier 2 (200–499 orders):</strong> $2.00 + $0.40/additional item</li>
					<li><strong>Tier 3 (500–999 orders):</strong> $1.70 + $0.35/additional item</li>
					<li><strong>Tier 4 (1000–2999 orders):</strong> $1.50 + $0.30/additional item</li>
					<li><strong>Tier 5 (3000+ orders):</strong> $1.40 + $0.25/additional item</li>
				</ul>
			</div>

			<!-- Subscription Box Fulfillment -->
			<div class="card">
				<h3>Subscription Box Fulfillment</h3>
				<p class="unit-info">Monthly Tiers, Per Box <span class="note">(Boxes, inserts & presentation not included)</span></p>
				<ul>
					<li><strong>Tier 1 (0–99 orders):</strong> $2.75 + $0.60/additional item</li>
					<li><strong>Tier 2 (100–399 orders):</strong> $2.50 + $0.50/additional item</li>
					<li><strong>Tier 3 (400–999 orders):</strong> $2.25 + $0.45/additional item</li>
					<li><strong>Tier 4 (1000–2999 orders):</strong> $2.00 + $0.40/additional item</li>
					<li><strong>Tier 5 (3000+ orders):</strong> $1.70 + $0.35/additional item</li>
				</ul>
			</div>

			<!-- Flash Sale / Crowdfunding -->
			<div class="card">
				<h3>Launch-Based Fulfillment</h3>
				<p class="unit-info">Monthly Tiers, Per Order <span class="note">(Boxes & materials not included)</span></p>
				<ul>
					<li><strong>Tier 1 (0–99 orders):</strong> $2.30 + $0.50/additional item</li>
					<li><strong>Tier 2 (100–399 orders):</strong> $2.00 + $0.45/additional item</li>
					<li><strong>Tier 3 (400–999 orders):</strong> $1.75 + $0.30/additional item</li>
					<li><strong>Tier 4 (1000–2999 orders):</strong> $1.40 + $0.20/additional item</li>
					<li><strong>Tier 5 (3000+ orders):</strong> $1.00 + $0.10/additional item</li>
				</ul>
			</div>
            

            <!-- Returns Management -->
            <div class="card">
              <h3>Returns Management & Re-stocking</h3>
              <p class="unit-info">Monthly Returns Volume</p>
              <ul>
                <li><strong>Tier 1 (0–199):</strong> 
                  $2.00 Returns Processing / $0.50 Restocking / $0.75 Disposal
                </li>
                <li><strong>Tier 2 (200–599):</strong> 
                  $1.75 Returns Processing / $0.40 Restocking / $0.65 Disposal
                </li>
                <li><strong>Tier 3 (600–1,499):</strong> 
                  $1.50 Returns Processing / $0.35 Restocking / $0.55 Disposal
                </li>
                <li><strong>Tier 4 (1,500+):</strong> 
                  $1.25 Returns Processing / $0.25 Restocking / $0.45 Disposal
                </li>
              </ul>
            </div>
		
        <div id="contact-placeholder"></div>
	`;

	// Optional Contact button injection
	const placeholder = section.querySelector('#contact-placeholder');
    placeholder.appendChild(Contact());
	

    return section;
}
