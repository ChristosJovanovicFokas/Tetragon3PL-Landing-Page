

export function Header() {
    const header = document.createElement('section');
    header.className = 'header-section';

    header.innerHTML =`
        <div class="header-container">
            <a href="/" class="logo">MyWarehouse</a>
            <nav class="nav">
                <a href="/src/pages/services.html">Solutions</a>
                <a href="/src/pages/pricing.html">Rates</a>
                <a href="/src/pages/connect.html">Connect</a>
            </nav>
        </div>
        `;
    return header;
} 
