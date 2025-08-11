

export function Warehousing() {
    const section = document.createElement('section');
    section.className = "service-section warehousing";
	section.id = "warehouse-section";
	section.setAttribute('role', 'tabpanel');
	section.hidden = false;

    section.innerHTML = `
        <h2>Multichannel Inventory Distribution & Allocation</h2>
        <p>We strategically allocate your inventory across major sales channels to maximize reach and minimize stockouts.</p>
        <strong>Marketplaces We Support: </strong>
        <ul class="marketplaces">
            <li>DTC (Shopify/Woocommerce or your own ecommerce store)</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>Instagram Shop</li>
            <li>Target (invitation only)</li>
            <li>Walmart</li>
            <li>Etsy</li>
        </ul>
        <h2>Storage Solutions</h2>
        <p>We offer secure, scalable storage in strategically located facilities. Our warehouse systems provide real-time inventory tracking and seamless integration with your platform.</p>
        <ul class="storage"> 
            <li><strong>Pallet Racking</strong> Durable and felxible pallet shelving systems for efficient storage and easy access.</li>
            <li><strong>Industring Shelving</strong> Adjustable shelving units to store smaller items, tools, and supplies.</li>
            <li><strong>Storage Bins & Containers</strong> Stackable bins and totes for organized storage of parts and inventory.</li>
            <li><strong>Bulk Storage Solutions</strong> Ideal for large or heavy items that require open floor space.</li>
            <li><strong>Storage Optimization & Slotting</strong> Smart placement of goods to maximize space and minimize pick time.
        </ul>

        <h2>Inventory Solutions</h2>
        <ul class="inventory">
            <li><strong>Inventory Management:</strong> Comprehensive tracking and reporting of stock levels to ensure accuracy and availability.</li>
            <li><strong>Weekly Inventory Audits:</strong> Regular physical checks to verify stock counts and identify discrepancies early.</li>
            <li><strong>Inventory Forecasting & Demand Planning</strong>Predict stock needs across channels to prevent stockouts and overstock.
            </li>
            <li><strong>Real-Time Inventory Updates:</strong> Automated system updates for accurate stock visibility across all sales channels.</li>
            <li><strong>Stock Replenishment Alerts:</strong> Notifications to prevent stockouts and optimize reorder timing.</li>
            <li><strong>Returns Processing:</strong> Efficient handling and reintegration of returned goods into inventory.</li>
        </ul>

    `;


    return section;
}
