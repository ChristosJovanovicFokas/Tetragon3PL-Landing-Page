export function FAQ(){
    const section = document.createElement('section');
    section.className = 'faq-section';

    section.innerHTML = `
        <h2>FAQ</h2>

        <div class="faq-item">
            <button class="faq-question">What’s your average turnaround time for fulfillment?</button>
            <div class="faq-answer">
                <p>We offer same-day fulfillment with a 9 PM EST cutoff time for most orders.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Do you charge any hidden fees?</button>
            <div class="faq-answer">
                <p>No hidden fees. Our pricing is transparent, flat-rate, and straightforward.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Is there a minimum monthly order requirement?</button>
            <div class="faq-answer">
                <p>Nope. We work with businesses of all sizes — from startups to high-volume brands.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">Can I use my own branded materials?</button>
            <div class="faq-answer">
                <p>Yes, you can supply your own boxes, tape, inserts, or we can help you design them.</p>
            </div>
        </div>

        <div class="faq-item">
            <button class="faq-question">How do I get started?</button>
            <div class="faq-answer">
                <p>Just hit the contact button, and we’ll walk you through the onboarding process step by step.</p>
            </div>
        </div>

        <button class="see-more-btn">See More</button>
    `;

    return section 
}
