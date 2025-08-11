export function dynamicTabButtons(){
	console.log("Dynamic Loaded...");
	const button = document.querySelectorAll('.secondary-nav button');
	console.log("Button", button);
	const section = document.querySelectorAll('[role="tabpanel"]');
	console.log("Section", section);
    

	if (!button.length && !section.length) {
    		console.warn("Tab UI not found");
    	return; 
  	}

	button.forEach(btn => {
		btn.addEventListener('click', () => {
			const targetId = btn.getAttribute('aria-controls');
			console.log("TargetId", targetId);
			button.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			section.forEach(sec => sec.hidden = true);
			document.getElementById(targetId).hidden = false;
		});
	});
}
