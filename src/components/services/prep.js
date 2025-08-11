export function Prep() {
    const section = document.createElement('section');
    section.className = 'service-section prep';
    section.id = 'prep-section';
	section.setAttribute('role', 'tabpanel');
	section.hidden = 'false';
    section.innerHTML = `
            <h2>Prep Services</h2>
            <p>Expert handling to get your inventory ready for storage and shipping, tailored to meet your specific needs and requirements.</p>

            <ul class="features">
                <li> Same-Week Prep & Marketplace Delivery
                    <p>Get your products prepped, packed, and shipped to Amazon, Walmart, Etsy, and more—all within the same week.</p>
                </li>
                <li>📏 Product labeling
                    <p>Precise application of labels for easy identification, compliance, and efficient inventory management.</p>
                </li>
                <li>Expiration Date Labeling & Management
                    <p>Apply and track expiration dates for perishable goods.</p>
                </li>
                <li>Bundling, Multipacks, Polybagging, Shrink Wrapping
                    <p>Efficiently combine products and secure them with polybags and bubble wrap to ensure safe, attractive deliveries.</p>
                </li>
                <li>Fragile Item Handling & Cushioning
                    <p>Specialized packing to protect delicate goods.</p>
                </li>
                <li>🔍 Product Sorting & Quality Control Inspections
                    <p>Thorough checks to ensure your products meet quality standards before shipping.</p>
                </li>
                <li>📦 Kitting & assembly
                    <p>Combining multiple products into ready-to-ship kits or bundles, customized to your specifications.</p>
                </li>
            </ul>
  `;

  return section;
}
