export function Newsletter(){
    const section = document.createElement('section');
    section.className = 'newsletter-section';

    section.innerHTML = `
        <div class="newsletter">
            <h2>Join Our Newsletter</h2>
            <p>Stay updated with our latest offers, updates, and services. Enter your email to subscribe.</p>

            <form action="YOUR_FORM_ENDPOINT" method="POST">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <button type="submit">Subscribe</button>
            </form>

            <p>No spam — unsubscribe anytime.</p>
        </div>
    `;

    return section;
}
