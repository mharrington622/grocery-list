(function() {

	let templateCache = {};

	function load(url, cb) {
		let xhr = new XMLHttpRequest();
	
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				cb(xhr.response);
			}
		}
	
		xhr.open('GET', url, true);
		xhr.send('');
	}

	function onload() {
		load("data/groceries.json", parseGroceryData);
	}

	function parseGroceryData(data) {
		let groceries = JSON.parse(data);
		let groceryListElem = document.querySelectorAll(".grocery-list")[0];

		for (item of groceries) {
			let elem = createTemplate(item);

			groceryListElem.appendChild(elem);
		}
	}

	function loadTemplate(templateName) {
		return templateCache[templateName] = templateCache[templateName] || document.getElementById(templateName);
	}

	//	Create template based on #groceryItemTmpl in grocery-list.html.
	function createTemplate(item) {

		let tmpl = loadTemplate("groceryItemTmpl");

		if ('content' in document.createElement('template')) {
			//	Clone a copy of the template.
			let clone = document.importNode(tmpl.content, true);
			let html = clone.children[0].innerHTML;

			//	Replace variables: brand, category, item, qty, type
			html = html.replace(/{{brand}}/g, item.brand)
						.replace(/{{category}}/g, item.category)
						.replace(/{{item}}/g, item.item)
						.replace(/{{qty}}/g, item.qty)
						.replace(/{{type}}/g, item.type);
			
			clone.children[0].innerHTML = html;

			//return elem;
			return clone.children[0];
		} else {
			// Find another way to add the rows to the table because 
			// the HTML template element is not supported.
			let html = tmpl.innerHTML

			//	brand, category, item, qty, type
			html = html.replace(/{{brand}}/g, item.brand)
						.replace(/{{category}}/g, item.category)
						.replace(/{{item}}/g, item.item)
						.replace(/{{qty}}/g, item.qty)
						.replace(/{{type}}/g, item.type);
			
			let elem = new HTMLDivElement();
			elem.outerHTML = html;
		}
	}

	window.addEventListener("load", onload);
})();