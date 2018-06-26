// JavaScript Document

//Navigation throught article via Nav
navToArticle();

function navToArticle() {
	"use strict";
	
	var articleElts = document.querySelectorAll('section article');
	//var navV2ListsElts = document.querySelectorAll('#navV2 li');
	//var navV2Link = document.querySelectorAll('#navV2 li a');
	var nowReadingBtn = document.getElementById('nowReading');
	var browseBtn = document.getElementById('browse');
	var buyBooksBtn = document.getElementById('buyBooks');
	var favBooksBtn = document.getElementById('favBooks');
	var wishlistBtn = document.getElementById('wishList');
	var historyBtn = document.getElementById('history');
	var welcomeBtn = document.querySelector('header .title');
	
	nowReadingBtn.onclick = function() {
		displayArticle(0);
	};
	
	browseBtn.onclick = function() {
		displayArticle(1);
	};
	
	buyBooksBtn.onclick = function() {
		displayArticle(2);
	};
	
	favBooksBtn.onclick = function() {
		displayArticle(3);
	};
	
	wishlistBtn.onclick = function() {
		displayArticle(4);
	};
	
	historyBtn.onclick = function() {
		displayArticle(5);
	};
	
	welcomeBtn.onclick = function() {
		displayArticle(6);
	};
	
	displayArticle(6);
	
	function displayArticle(x) {
		for(var i = 0; i < articleElts.length; i++) {
			articleElts[i].style.display = "none";
			//navV2Link[i].classList.remove('remove');
		}
		
		articleElts[x].style.display = "block";
		//navV2Link[x].classList.add('active');
	}
}

//Carousel
window.onpageshow = carousel();

function carousel() {
	"use strict";
	var slideElts = document.querySelectorAll('.welcome .slides .slide');
	var controlNext = document.getElementById('controlNext');
	var controlPrev = document.getElementById('controlPrev');
	var position = 0;
	
	slideshow(position);
	
	controlNext.onclick = function() {
		//alert('clicked');
		slideshow(position += 1);
	};
	
	controlPrev.onclick = function() {
		//alert('clicked');
		slideshow(position -= 1);
	};
	
	timer();
	
	function timer() {
		setInterval(function() {
			controlNext.click();
		}, 30000);
	}
	
	function slideshow(x) {
		if(x < 0) {
			position = slideElts.length - 1;
		}
		if(x > slideElts.length - 1) {
			position = 0;
		}
		
		for(var i = 0; i < slideElts.length; i++) {
			//slideElts[i].style.display = "none";
			slideElts[i].style.opacity = "0";
		}
		
		//slideElts[position].style.display = "block";
		slideElts[position].style.opacity = "1";
	}
}
//End Carousel