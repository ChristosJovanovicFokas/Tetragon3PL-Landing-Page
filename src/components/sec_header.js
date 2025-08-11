export function Second_Header() {
    const section = document.createElement('section');
    section.className = 'secondaryheader-section';

    section.innerHTML = `
        <div class="secondary-container">
            <nav class="secondary-nav" role="tablist">
	            <button class="active" aria-controls="warehouse-section" data-section="warehouse" role="tab">Storage & Inventory</button>
                <button aria-controls="fulfillment-section" data-section="fulfillment" role="tab">Fulfillment</button>
                <button aria-controls="prep-section" data-section="prep" role="tab">Prep</button>
                <button aria-controls="marketplace-section" data-section="marketplace" role="tab">Marketplace</button>
                <button aria-controls="brand-section" data-section="brand" role="tab">Brand Booster</button>
            </nav>
        </div>
        `;
    return section;
}


