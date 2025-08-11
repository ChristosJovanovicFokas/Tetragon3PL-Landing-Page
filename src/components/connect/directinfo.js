import { Contact } from '../contact.js';

export function DirectInfo(){
    
    const section = document.createElement('section');
    section.className = "direct-info-section";

    section.innerHTML = `
        <h2>Reach Us Directly</h2>
        <p>Skip the back-and-forth — here’s how to get in touch with us right away.</p>

        <ul class="contact-details">
            <li><strong>Email:</strong> <a href="mailto:hello@yourcompany.com">hello@yourcompany.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></li>
            <li><strong>Location:</strong> Newark, NJ — Available Nationwide</li>
            <li><strong>Hours:</strong> Mon–Sat: 9am – 7pm EST</li>
        </ul>
    `;

    
    return section;
}
