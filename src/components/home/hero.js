
export function Hero(){
    const hero = document.createElement('section');
    hero.className = 'hero-section';

    hero.innerHTML = `
        <div class="hero-content">
            <h1>We Move <span>Your Business</span> Forward</h1>
            <p>Fast, Reliable Warehousing, Fulfillment and Prep Built Around You.</p>
            <a href="./src/pages/services.html" class="cta-button">Learn More</a>
        </div>
    `;

    return hero;
}
