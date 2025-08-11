export function BrandBooster() {
    const section = document.createElement('section');
    section.className = 'service-section brandbooster';
	section.id = "brand-section";
	section.setAttribute('role', 'tabpanel');
	section.hidden = true;

    section.innerHTML = `
            <h2>Brand Booster Services</h2>
            <p>
                Elevate your brand with value-added services that create memorable unboxing experiences, improve retention, and grow customer loyalty.
        Designed to help you stand out in a crowded marketplace.
            </p>

            <ul class="features">
                <li>🎁 Custom branded packaging
                    <p>We create packaging that reflects your brand—boxes, tissue, stickers, tape, and more—fully customized to impress.</p>
                </li>
                <li> Unboxing Experience Kits
                    <p>We design unboxing flows with inserts, samples, and presentation that spark emotion and drive shares on social media.<p>
                </li>
                <li>🖨️ Custom Inserts & Thank You Cards
                    <p>Handwritten notes, personalized coupons, QR codes, and branded cards that connect with your customer on a deeper level.<p>
                </li>
                <li> Premium Packaging Material
                    <p>From magnetic boxes to soft-touch finishes, we offer premium options to elevate perceived value.</p>
                </li>
                <li>Graphic Design Support & Consulting
                    <p>Our team helps design packaging elements, inserts, or labels to match your aesthetic and messaging.</p>
                </li>
            </ul>
  `;

  return section;
}
