export function Contact() {
    const contact = document.createElement('section');
    contact.className = "contact";

    contact.innerHTML = `
    	<button id="openContactModal">Contact Us</button>

        <div id="contactModal" class="modal-content" style="display: none;">
            <div class="modalContent">
                <span class="close-contact">&times;</span>
                <form class="contact-form" name="contact">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    `;

	setTimeout(() => {
		const modal = contact.querySelector("#contactModal");
		const openBtn = contact.querySelector("#openContactModal");
		const closeBtn = contact.querySelector(".close-contact");
		const form = contact.querySelector("form");

		openBtn.addEventListener("click", () => {
			modal.style.display = "block";
		});

		closeBtn.addEventListener("click", () => {
			modal.style.display = "none";
		});

		window.addEventListener("click", (e) => {
			if (e.target === modal) {
                		modal.style.display = "none";
           	 	}
		});

		form.addEventListener("submit", (e) => {
            		e.preventDefault(); // Stop page refresh
            		alert("Message sent!");
            		modal.style.display = "none";
            		form.reset(); // Clear form
        	});
	});
		
    	return contact;
}

