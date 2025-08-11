import { Contact } from '../contact.js';

export function About() {
    
    const about = document.createElement('section');
    about.className = "home-section";
    
    about.innerHTML = `
        <div class="about-grid">
            <div class="about-card">
                <h3>About Tetragon</h3>
                <p>At Tetragon 3PL, we’ve spent the past five years dedicated to helping brands grow by providing fast, reliable warehousing and fulfillment solutions. Our clients’ success is at the heart of everything we do — we don’t just move inventory, we move businesses forward. With a focus on precision, transparency, and personalized service, we partner closely with each business to streamline their operations and fuel their growth. Because when you succeed, we succeed.</p>
            </div>
            <div class="about-card">
                <h3>Our Process</h3>                              
                <p>At Tetragon 3PL, our process combines streamlined workflows with smart technology to deliver seamless, reliable fulfillment. From meticulous product prep and custom packaging to accurate order processing, our dedicated team ensures every detail matches your brand’s vision. With hands-on support and continuous improvement, we keep your operations efficient and your customers satisfied..</p>
            </div>
            <div class="about-card">
                <h3>What Sets Us Apart</h3>
                <p>At Tetragon 3PL, we’re more than just a logistics provider — we’re your growth partner. As a family-owned business, we pride ourselves on delivering exceptional client service and giving each customer the personal care they deserve. We combine cutting-edge technology with hands-on expertise to provide speed, accuracy, and flexibility tailored to your brand’s needs. Agile enough to adapt quickly and reliable enough to scale with you, we’re committed to helping your business thrive every step of the way.</p>
            </div>            
            
            <div class="contact-hooks">
                <h4>Send a message to get more information.<h4>
                <div id="contact-placeholder"></div>
            </div>
                   
        </div>
    <section id="reviews" class="reviews-section">
        <h2>Trusted by Businesses Like Yours</h2>
        <div class="reviews-container">
    
        <!-- Review 1 -->
            <div class= "review">
                <img src="" alt="Client Emily">
                <p>“Tetragon 3PL has completely transformed how we handle fulfillment. Their team is fast, responsive, and genuinely cares about our business.”</p>
                <strong>Emily R.</strong><br>
                <span>DTC Brand Owner</span>
            </div>


            <!-- Review 2 -->
            <div class="review">
                <img src="" alt="Client James">
                <p>“The level of personal attention we get is unmatched. From custom packaging to quick turnaround times, Tetragon delivers exactly what we need — every time.”</p>
                <strong>James K.</strong><br>
                <span>eCommerce Retailer</span>
            </div>

            <!-- Review 3 -->
            <div class="review">
                <img src="" alt="Client Sarah">
                <p>“I’ve worked with a few 3PLs before, and none have come close to the reliability and service Tetragon provides. They're professional, proactive, and always go the extra mile.”</p>
                <strong>Sarah L.</strong><br>
                <span>Operations Manager</span>
            </div>

		    </div>
	    </section>
    `; 
    const placeholder =  about.querySelector('#contact-placeholder');
    placeholder.append(Contact());

    return about;
}

