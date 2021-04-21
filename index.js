//preloder
let preloader = document.querySelector(".preloader");
window.addEventListener("load", (e)=>{
	preloader.classList.add("d-none");
});
//cursor
let cursorCercle = document.querySelector(".costome-cursor");
let btnTags = document.querySelectorAll('.cursor');
window.addEventListener("mousemove", (e)=>{
	cursorCercle.style.top = `${e.pageY}px`
	cursorCercle.style.left = `${e.pageX}px`
});
//button cursor
btnTags.forEach((btn)=>{
	btn.addEventListener("mouseover", ()=>{
		cursorCercle.classList.add("hover-link");
	});
});

btnTags.forEach((btn)=>{
	btn.addEventListener("mouseleave", ()=>{
		cursorCercle.classList.remove("hover-link");
	});
});



