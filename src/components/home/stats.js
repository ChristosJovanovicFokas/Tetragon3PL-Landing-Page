export function Stats() {

    const section = document.createElement('section');
    section.className = "stats-section";

    section.innerHTML = `
        <h2 class="section-title">Lower Costs. Higher Standards.</h2>
        <div class="stats-container">
            <div class="stat-card">
                <h3>98.7%</h3>
                <img src="/assets/icons/truck.svg" alt="On-time Icon" class="stat-icon" />
                <p>On-time Order Fulfillment</p>
            </div>
            <div class="stat-card">
                <h3>99.9%</h3>
                <img src="/assets/icons/truck.svg" alt="On-time Icon" class="stat-icon" />
                <p>Order Accuracy</p>
            </div>
            <div class="stat-card">
                <h3>96%</h3>
                <img src="/assets/icons/truck.svg" alt="On-time Icon" class="stat-icon" />
                <p>Client Retention Rate</p>
            </div>
            <div class="stat-card highlight">
                <h3>25% Lower Cost</h3>
                <img src="/assets/icons/truck.svg" alt="On-time Icon" class="stat-icon" />
                <p>Compared to Average 3PL Rates</p>
            </div>
        </div>
    `;

    return section;
}
