import { Contact } from '../../components/contact.js'

export function Warehousing() {
	const section = document.createElement('section');
	section.className = 'warehousing-section';
	section.id = 'warehouse-section';
	section.setAttribute('role', 'tabpanel');
	section.hidden = false;
	
	section.innerHTML = `
		<h2>Warehousing Rates</h2>
        <div class="pricing-highlights">
            <div>No Minimums</div>
            <div>No Hidden Fees</div>
            <div>Flat Monthly Rates</div>
        </div>
            <p>
        <div class="pricing-cards">
         
            <div class="card">
                <h3>Storage Bins & Containers</h3>
                <p class="unit-info">Per Bin / Month <span class="note">(16"x 12"x 12")</span></p>
                <ul>
                    <li><strong>1-99 Bins:</strong> $3.50</li>
                    <li><strong>100-299 Bins:</strong> $3.00</li>
                    <li><strong>300+ Bins:</strong> $2.50</li>
                </ul>
            </div>

            <div class="card"> 
                <h3>Pallet Racking</h3>
                <p class="units-info">Per Pallet / Month <span class="note">(48" x 40" x 72")</span></p>
                <ul>
                    <li><strong>1–49 Pallets:</strong> $35.00</li>
                    <li><strong>50–199 Pallets:</strong> $30.00</li>
                    <li><strong>200+ Pallets:</strong> $25.00</li>
                </ul>
            </div>

            <div class="card">
                <h3>Industrial Shelving</h3>
                <p class="unit-info">Per Shelf / Month <span class="note">(48”x18”x72”)</span></p>
                <ul>
                    <li><strong>1–50 Shelves:</strong> $20.00</li>
                    <li><strong>51–150 Shelves:</strong> $17.00</li>
                     <li><strong>151+ Shelves:</strong> $14.00</li>
                </ul>
            </div>

            <div class="card">
                <h3>Bulk Storage Solutions</h3>
                <p class="unit-info">Per Sq. Ft / Month <span class="note">(Open Floor Space)</span></p>
                <ul>
                    <li><strong>1–200 sq. ft:</strong> $1.50</li>
                    <li><strong>201–500 sq. ft:</strong> $1.20</li>
                    <li><strong>501+ sq. ft:</strong> $0.90</li>
                </ul>
            </div>
            
            <div class="card">
                <h3>Hazmat Storage</h3>
                <p>Have questions about Hazmat storage pricing or compliance? Click the contact button below — we’re here to help.</p>
                <div id="contact-placeholder"></div>
            </div>

        </div>
	`;

    const placeholder = section.querySelector('#contact-placeholder');
    placeholder.appendChild(Contact());
    return section;
}
