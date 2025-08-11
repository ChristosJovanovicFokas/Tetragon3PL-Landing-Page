export function Industries(){
	const section = document.createElement("section");
	section.className = "industries-section";

	section.innerHTML = `
		<h3>Industries We Serve<h3>
        <div class="industries-grid">
            <div class="industry-card">    
            <img src="" alt="DTC Brands">
            <h3>DTC Brands</h3>
            </div>
        </div>
        <div class="industries-grid">
            <div class="industry-card">    
            <img src="" alt="DTC Brands">
            <h3>E-Commerce Retailer</h3>
            </div>
        </div>
        <div class="industries-grid">
            <div class="industry-card">    
            <img src="" alt="DTC Brands">
            <h3>Online Marketplaces</h3>
            </div>
        </div>        
	`;
	return section;
}
