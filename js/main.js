(function () {
	window.addEventListener("load", function () {
		evt_state = 0;
		const menu = document.querySelector("header nav");
		const title = document.querySelector("header .menu_item_container");
		const landing_title = document.querySelector("section#landing .landing_center");

		function toggle_display_width() {
			if (window.matchMedia("(max-width: 650px)").matches) {
				menu.style.display = "none";
			} else {
				menu.style.display = "flex";
			}
		}

		toggle_display_width();

		title.addEventListener("click", function () {
			if (window.matchMedia("(max-width: 650px)").matches) {
				if (menu.style.display == "flex") {
					menu.style.display = "none";
					landing_title.style.marginTop = "0";
				} else {
					landing_title.style.marginTop = "270px";
					menu.style.display = "flex";
				}
			}
		});
		window.addEventListener("resize", toggle_display_width);

		// function evt_f() {
		// 	if (menu.style.display == "flex") {
		// 		menu.style.display = "none";
		// 	} else {
		// 		menu.style.display = "flex";
		// 	}
		// }
		// function toggle_eventListener() {
		// 	if (window.matchMedia("(max-width: 650px)").matches) {
		// 		if (evt_state < 1) {
		// 			console.log("adding...");
		// 			title.addEventListener("click", evt_f());
		// 			console.log(evt_state);
		// 			evt_state++;
		// 			console.log(evt_state);
		// 		}
		// 	} else {
		// 		menu.style.display = "flex";
		// 		if (evt_state != 0) {
		// 			console.log("removing...");
		// 			title.removeEventListener("click", evt_f());
		// 			console.log(evt_state);
		// 			evt_state--;
		// 			console.log(evt_state);
		// 		}
		// 	}
		// }

		// if (window.matchMedia("(max-width: 650px)").matches) {
		// 	toggle_eventListener();
		// 	menu.style.display = "none";
		// }

		// window.addEventListener("resize", function () {
		// 	toggle_eventListener();
		// });

		// function setEvtTitle(task, evtTarget, element_menu) {
		// 	if (task == "add") {
		// 			console.log("adding...");
		// 			evtTarget.addEventListener("click", evt_f, false);
		// 			console.log(evt_state);
		// 			evt_state++;
		// 			console.log(evt_state);
		// 		}
		// 	} else if (task == "rmv") {
		// 		if (evt_state != 0) {
		// 			console.log("removing...");
		// 			evtTarget.removeEventListener("click", evt_f, false);
		// 			console.log(evt_state);
		// 			evt_state--;
		// 			console.log(evt_state);
		// 		}
		// 	}

		// 	function evt_f() {
		// 		if (element_menu.style.display == "flex") {
		// 			element_menu.style.display = "none";
		// 		} else {
		// 			element_menu.style.display = "flex";
		// 		}
		// 	}
		// }
	});
})();

(function () {
	window.addEventListener("load", function () {
		// SECTION Title appear animation
		// appearing_title.style.marginBottom = "50px"; // To preserve accesibility without JavaScript
		var appearing_title = document.querySelector(".landing_center h1");
		appearing_title.style.opacity = "1";
		// appearing_title.style.marginBottom = "0";
		appearing_title.style.transform = "translateX(0)";
		// !SECTION
		// SECTION Text appear animation
		var appearing_text = document.querySelector(".landing_center .written_text");
		appearing_text.style.opacity = "1";
		// !SECTION
		// SECTION Text anomation (writting text)
		var firstTime = true;
		window.setTimeout(function () {
			var animation_target = document.querySelector(".landing_center .written_text");
			var string = "An easy way to chat securly$-------$faster$------$privatly";
			// animation_target.innerHTML = "";
			let delay = 0;
			for (let i = 0; i < string.length; i++) {
				let char = string.substr(i, 1);

				if (char != "-" && char != "$") {
					window.setTimeout(() => {
						if (firstTime) {
							animation_target.innerHTML = char.toString();
							firstTime = false;
						} else {
							animation_target.innerHTML += char.toString();
						}
					}, delay);
				} else if (char == "$") {
					delay = delay + 1000;
				} else if (char == "-") {
					window.setTimeout(() => {
						animation_target.innerHTML = animation_target.innerHTML.substr(0, animation_target.innerHTML.length - 1);
					}, delay);
				}
				delay = delay + Math.floor(Math.random() * 200);
			}
		}, 1000);
		// !SECTION
	});
})();
