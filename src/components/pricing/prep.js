export function Prep() {
    const section = document.createElement('section');
    section.className = 'prep-section';
    section.id = 'prep-section';
    section.setAttribute('role', 'tabpanel');
    section.hidden = true;

    section.innerHTML = `
        <div class="card">
        <h3>Barcode Labeling</h3>
        <p class="unit-info">Per Unit</p>
        <ul>
            <li><strong>Tier 1 (0–1,999 units):</strong> $0.60</li>
            <li><strong>Tier 2 (2,000–5,999 units):</strong> $0.55</li>
            <li><strong>Tier 3 (6,000–10,000 units):</strong> $0.50</li>
            <li><strong>Tier 4 (10,000+ units):</strong> $0.45</li>
          </ul>
        </div>

        <div class="card">
          <h3>Polybagging</h3>
          <p class="unit-info">Per Unit</p>
          <ul>
            <li><strong>Tier 1 (0–1,999 units):</strong> $0.80</li>
            <li><strong>Tier 2 (2,000–5,999 units):</strong> $0.75</li>
            <li><strong>Tier 3 (6,000–10,000 units):</strong> $0.70</li>
            <li><strong>Tier 4 (10,000+ units):</strong> $0.65</li>
          </ul>
        </div>

        <div class="card">
          <h3>Kitting (2–3 items)</h3>
          <p class="unit-info">Per Unit <span class="note">+$0.30 per extra item</span></p>
          <ul>
            <li><strong>Tier 1 (0–1,999 units):</strong> $0.90</li>
            <li><strong>Tier 2 (2,000–5,999 units):</strong> $0.85</li>
            <li><strong>Tier 3 (6,000–10,000 units):</strong> $0.80</li>
            <li><strong>Tier 4 (10,000+ units):</strong> $0.75</li>
          </ul>
        </div>

        <div class="card">
          <h3>Bubble Wrapping</h3>
          <p class="unit-info">Per Unit <span class="note">+$0.30 per extra item</span></p>
          <ul>
            <li><strong>Tier 1 (0–1,999 units):</strong> $0.75</li>
            <li><strong>Tier 2 (2,000–5,999 units):</strong> $0.70</li>
            <li><strong>Tier 3 (6,000–10,000 units):</strong> $0.65</li>
            <li><strong>Tier 4 (10,000+ units):</strong> $0.60</li>
          </ul>
        </div>

        <div class="card">
          <h3>Multipacks (2–3 items)</h3>
          <p class="unit-info">Per Unit <span class="note">+$0.20 per extra item</span></p>
          <ul>
            <li><strong>Tier 1 (0–1,999 units):</strong> $0.75</li>
            <li><strong>Tier 2 (2,000–5,999 units):</strong> $0.70</li>
            <li><strong>Tier 3 (6,000–10,000 units):</strong> $0.65</li>
            <li><strong>Tier 4 (10,000+ units):</strong> $0.60</li>
          </ul>
        </div>

        <div class="card">
          <h3>Materials Pricing</h3>
          <p class="unit-info">Optional Supplies (Per Unit)</p>
          <ul>
            <li><strong>Small Box:</strong> $0.50</li>
            <li><strong>Medium Box:</strong> $0.75</li>
            <li><strong>Large Box:</strong> $1.25</li>
            <li><strong>Polybag (S/M/L):</strong> $0.30</li>
            <li><strong>Bubble Wrap (per foot):</strong> $0.25</li>
          </ul>
        </div>

        <div class="card">
          <h3>Oversize Item Handling</h3>
          <p class="unit-info">Extra Charge Per Oversized Item</p>
          <ul>
            <li><strong>Tier 1 — Oversized Light:</strong> $0.50 <br><span class="note">(Above 24” & Below 5 lbs)</span></li>
            <li><strong>Tier 2 — Oversized Standard:</strong> $1.00 <br><span class="note">(Above 24” & 5–15 lbs)</span></li>
            <li><strong>Tier 3 — Oversized Heavy/Bulky:</strong> $2.00 <br><span class="note">(Above 24” & Over 15 lbs)</span></li>
          </ul>
        </div>
    `;

    return section;
}

