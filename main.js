
let LoginDisplay = function() {
	let Login = document.getElementsByClassName('login')[0];
	Login.style.display = "inline-block";
}
let Labelia0 = function() {
	document.getElementsByTagName("label")[0].style.fontSize = "18px";
}
let Labelia1 = function() {
	document.getElementsByTagName("label")[1].style.fontSize = "18px";
}
let LoginDisplayNone = function() {
	let Login = document.getElementsByClassName('login')[0];
	Login.style.display = "none";
}

let s;
let n

let Card1 = function() {
	console.log(1);
		n = "card1";
		s = "card1back";
}
let Card2 = function() {
		n = "card2";
		s = "card2back";
}
let Card3 = function() {
		n = "card3";
		s = "card3back";
}
let Card4 = function() {
		n = "card4";
		s = "card4back";
}
let Card5 = function() {
		n = "card5";
		s = "card5back";
}
let Card6 = function() {
		n = "card6";
		s = "card6back";
}
let Card7 = function() {
		n = "card7";
		s = "card7back";
}
let Card8 = function() {
		n = "card8";
}
let Card9 = function() {
		n = "card9";
}
let Card10 = function() {
		n = "card10";
}
let Card11 = function() {
		n = "card11";
}
let Card12 = function() {
		n = "card12";
}

let cardDetaylar = function()  {
	let cardBack = document.getElementsByClassName(s)[0];
	let cardFront = document.getElementsByClassName(n)[0];
	cardBack.style.transform = "perspective(800px)";
	cardFront.style.transform += "rotateY(180deg)";
	cardBack.style.zIndex = "2";
	cardFront.style.zIndex = "-1";
}
function cardBack() {
	let cardBack = document.getElementsByClassName(s)[0];
	let cardFront = document.getElementsByClassName(n)[0];
	cardBack.style.transform = "rotateY(-180deg)";
	cardFront.style.transform = "rotateY(0deg)";
	cardBack.style.zIndex = "0";
	cardFront.style.zIndex = "1";
	cardBack.style.transform = "";
	cardFront.style.transform = "perspective(800px)";
}

let Children = document.getElementsByClassName('card');
let Parent = document.getElementsByClassName('cont-cards')[0];
Children[3].style.transform = "scale(1.06)";

let CardRight = function() {
Parent.append(Children[0]);
Children[3].style.transform = "scale(1.06)";
Children[2].style.transform = "scale(1)";
}
let CardLeft = function() {
Parent.insertBefore(Children[6], Children[0]);
Children[3].style.transform = "scale(1.06)";
Children[4].style.transform = "scale(1)";
}

document.getElementsByClassName('cont-cards')[1].getElementsByClassName('card')[2].style.transform = "scale(1.06)";
let CardRight2 = function() {
let Parent = document.getElementsByClassName('cont-cards')[1];
let Children = Parent.getElementsByClassName('card');
Parent.append(Children[0]);
Children[2].style.transform = "scale(1.2)";
Children[1].style.transform = "scale(1)";
}
let CardLeft2 = function() {
let Parent = document.getElementsByClassName('cont-cards')[1];
let Children = Parent.getElementsByClassName('card');
Parent.insertBefore(Children[4], Children[0]);
Children[2].style.transform = "scale(1.2)";
Children[3].style.transform = "scale(1)";
}

let BasketElem;
let BasketArray = [];

let Button = function() {
	document.getElementsByClassName("basket-number")[0].textContent = BasketArray.length;
	let But = document.getElementsByClassName(n)[0].getElementsByClassName("basket-button")[0];
	
	if (But.style.backgroundColor == "rgb(34, 34, 34)") {
		BasketArray.unshift(document.getElementsByClassName(n)[0]);
		if (n == "card8") {
			But.style.backgroundColor = "rgb(190, 110, 43)";
		} else if (n == "card9") {
			But.style.backgroundColor = "rgb(233, 97, 19)";
		} else if (n == "card10") {
			But.style.color = "#000";
			But.style.backgroundColor = "rgb(233, 236, 39)";
		} else if (n == "card12") {
			But.style.backgroundColor = "rgb(22, 201, 255)";
		} else {
			But.style.backgroundColor = "rgb(168, 0, 0)";
		}
		But.textContent = "В корзине";
	
	document.getElementsByClassName("basket-number")[0].textContent = BasketArray.length;
	
	} else {
		But.style.backgroundColor = "rgb(34, 34, 34)";
		BasketArray.splice(0, 1);
		But.style.color = "rgb(224, 224, 224)";
		But.textContent = "В корзину";
			document.getElementsByClassName("basket-number")[0].textContent = BasketArray.length;
	}
	}




// let Button = function() {
// document.getElementsByClassName("basket-number")[0].textContent = BasketArray.length;
// let But = document.getElementsByClassName(n)[0].getElementsByClassName("basket-button")[0];

// if (But.style.backgroundColor == "rgb(34, 34, 34)") {
// 	BasketArray.unshift(document.getElementsByClassName(n)[0]);
// 	if (n == "card8") {
// 		But.style.backgroundColor = "rgb(190, 110, 43)";
// 	} else if (n == "card9") {
// 		But.style.backgroundColor = "rgb(233, 97, 19)";
// 	} else if (n == "card10") {
// 		But.style.color = "#000";
// 		But.style.backgroundColor = "rgb(233, 236, 39)";
// 	} else if (n == "card12") {
// 		But.style.backgroundColor = "rgb(22, 201, 255)";
// 	} else {
// 		But.style.backgroundColor = "rgb(168, 0, 0)";
// 	}
// 	But.textContent = "В корзине";



// 	if (BasketArray.length == 1) {
// 		document.getElementsByClassName("basket-cont")[0].textContent = " ";
// 	}
// if (BasketArray.length == 0) {
// 	document.getElementsByClassName("basket-cont")[0].textContent = "В корзине пусто";
// } else {
// 	BasketElem = document.getElementsByClassName(n)[0].cloneNode(true);
// 	document.getElementsByClassName("basket-cont")[0].append(BasketElem);

// }
// document.getElementsByClassName("basket-number")[0].textContent = BasketArray.length;



// } else {
// 	But.style.backgroundColor = "rgb(34, 34, 34)";
// 	BasketArray.splice(0, 1);
// 	But.style.color = "rgb(224, 224, 224)";
// 	But.textContent = "В корзину";

// 	// BasketElem = document.getElementsByClassName(n)[0].cloneNode(true);

// 	if (BasketArray.length == 0) {
// 		document.getElementsByClassName("basket-cont")[0].textContent = "В корзине пусто";
// 	} else {

// 		// BasketElem = document.getElementsByClassName(n)[0].cloneNode(true);
// 		console.log(333);
// 		console.log("BasketArray.length = ", BasketArray.length);
// 		console.log("BasketElem = ", BasketElem);
// 		console.log(n);

// 		BasketElem.parentNode.removeChild(BasketElem);
// 		// document.getElementsByClassName("basket-cont")[0].removeChild(BasketElem);
// 		}
	
// 		document.getElementsByClassName("basket-number")[0].textContent = BasketArray.length;
// }
// }

let responsiveSlider = function() {

	let slider = document.getElementById("slider");
	let sliderWidth = slider.offsetWidth;
	let slideList = document.getElementById("slideWrap");
	let count = 1;
	let items = slideList.querySelectorAll("li").length;
	let prev = document.getElementsByClassName("left")[0];
	let next = document.getElementsByClassName("right")[0];
	
	window.addEventListener('resize', function() {
			sliderWidth = slider.offsetWidth;
	});
	
	let prevSlide = function() {
			if(count > 1) {
					count = count - 2;
					slideList.style.left = "-" + count * sliderWidth + "px";
					count++;
			}
			else if(count = 1) {
					count = items - 1;
					slideList.style.left = "-" + count * sliderWidth + "px";
					count++;
			}
	};
	
	let nextSlide = function() {
			if(count < items) {
					slideList.style.left = "-" + count * sliderWidth + "px";
					count++;
			}
			else if(count = items) {
					slideList.style.left = "0px";
					count = 1;
			}
	};
	
	next.addEventListener("click", function() {
			nextSlide();
	});
	
	prev.addEventListener("click", function() {
			prevSlide();
	});
	
	setInterval(function() {
			nextSlide()
	}, 5000);
	
	};
	
	window.onload = function() {
	responsiveSlider();  
	}





