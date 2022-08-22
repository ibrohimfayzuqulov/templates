// Alternative Versions:
// - CSS @scroll-timeline + Polyfill: https://codepen.io/bramus/pen/eYdxZoy
// - JS ScrollTimeline + Polyfill: https://codepen.io/bramus/pen/wvmrOPE
// - JS Motion One: https://codepen.io/bramus/pen/MWVvOZe 👈 = The version you are currently looking at

import { scroll, animate } from "https://cdn.skypack.dev/motion@10.13.1"

const $main = document.querySelector("#main");
const $slashes = $main.querySelectorAll(".slash");

console.log($slashes);
$slashes.forEach(($slash) => {
	scroll(
		animate($slash, { transform: ["rotateZ(0)", "rotateZ(3turn)"] }),
		{
			container: $main
		}
	);
});

const $indicator = document.querySelector(".indicator");
const $navs = document.querySelectorAll('nav li');
$indicator.style.width = `${100 / ($navs.length)}%`;
scroll(
	animate($indicator, { left: [0, `${100 / $navs.length * ($navs.length - 1)}%`] }),
	{
		container: $main
	}
);