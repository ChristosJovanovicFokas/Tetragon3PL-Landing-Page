import { Contact } from '../contact.js';

export function Careers(){
    const section = document.createElement('section');
    section.className = 'careers-section';

    section.innerHTML = `
        <h2>Join Our Team</h2>
        <p>We’re always looking for reliable, driven individuals to grow with us. Whether you're into logistics, prep, or customer service — there's a place for you here.</p>
        <p><strong>Interested?</strong> Reach out through the contact button below. Let’s build something great together.</p>
        <div id='contact-placeholder'></div>
    `;

    const placeholder = section.querySelector('#contact-placeholder');
    placeholder.append(Contact());

    return section;
}
