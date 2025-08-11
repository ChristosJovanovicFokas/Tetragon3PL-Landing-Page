export function BrandBoosting() {
	const section = document.createElement('section');
	section.className = 'brandboosting-section';
	section.id = 'brand-section';
	section.setAttribute('role', 'tabpanel');
	section.hidden = true;

	section.innerHTML = `
        <h2>Brand Boosting Services</h2>
        <p class="subtitle">Elevate your packaging experience. All services are optional add-ons to fulfillment or prep orders.</p>

        <div class="pricing-cards-container">
        <div class="card">
          <h3>Custom Box Handling</h3>
          <p>Branded custom packaging and a correctly matched box to the order.</p>
          <strong>$0.50 / order</strong>
        </div>

        <div class="card">
          <h3>Branded Mailer Handling</h3>
          <p>Pack using mailer bags with your brand look.</p>
          <strong>$0.40 / order</strong>
        </div>

        <div class="card">
          <h3>Sticker / Tape</h3>
          <p>Use branded tape, sticker seals, or custom labels on your packages.</p>
          <strong>$0.20 / order</strong>
        </div>

        <div class="card">
          <h3>Marketing Inserts</h3>
          <p>Add a coupon, thank-you note, or other branded insert.</p>
          <strong>$0.20 / insert</strong>
        </div>

        <div class="card">
          <h3>Premium Inserts</h3>
          <p>High-quality, SKU-specific or luxury inserts for tailored messaging.</p>
          <strong>$0.50 / insert</strong>
        </div>

        <div class="card">
          <h3>Tissue Paper Gift Wrapping</h3>
          <p>Branded tissue wrap for a premium, elegant unboxing experience.</p>
          <strong>$1.00 / order</strong>
        </div>

        <div class="card">
          <h3>Full Branded Luxury Presentation</h3>
          <p>Includes custom box, branded sticker/tape, tissue wrap, and up to 3 inserts.</p>
          <strong>$2.50 / order</strong>
        </div>

        <div class="card highlight">
          <h3>Graphic Design Support</h3>
          <p>We’ll help you design inserts, labels, and packaging that fit your brand perfectly.</p>
          <strong class="free">Included with any custom packaging service</strong>
        </div>
        </div>
	`;
	return section;
}
