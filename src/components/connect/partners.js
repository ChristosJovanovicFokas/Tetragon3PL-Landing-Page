import { Contact } from '../contact.js';

export function Partners(){
    const section = document.createElement('section');
    section.className = "partner-contact-section";

    section.innerHTML = `
        <h2>Let’s Talk Logistics</h2>
        <p>
            Whether you're just getting started or scaling fast, we’re here to tailor the perfect solution for your business. 
            Send us a message — our team will review your needs and offer a no-pressure consultation to walk you through everything.
        </p>
        <blockquote class="catchy-line">
            <strong>Real answers, real humans, real fast. Let’s connect.</strong>
        </blockquote>
        
        <div id="contact-placeholder"></div>
    `;
    
    const contact = section.querySelector('#contact-placeholder');
    contact.append(Contact());

    return section;

}
