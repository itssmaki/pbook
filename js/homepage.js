document.querySelector('.parent-con').addEventListener('scroll', function() {
   const navButtonLeft = document.getElementById('slideLeft');
   const navButtonRight = document.getElementById('slideRight');
   const storiesContainer = document.querySelector('.parent-con');
   if (storiesContainer.scrollLeft === 0) {
      navButtonLeft.style.display = 'none';
   } else { 
      navButtonLeft.style.display = 'block';
   }
   if (storiesContainer.scrollLeft >=910) {
      navButtonRight.style.display = 'none';
   } else {
      navButtonRight.style.display = 'block';
   }
});

function scrollStories(scrollAmount) {
   const navButtonLeft = document.getElementById('slideLeft');
   const storiesContainer = document.querySelector('.parent-con');
   storiesContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
   console.log(storiesContainer.scrollLeft);
}


var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
   settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function() {
   darkBtn.classList.toggle("dark-btn-on");
   document.body.classList.toggle("dark-theme");

   if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
   }
   else {
      localStorage.setItem("theme", "light");
   }
}

if(localStorage.getItem("theme") == "light") {
   darkBtn.classList.remove("dark-btn-on");
   document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark") {
   darkBtn.classList.add("dark-btn-on");
   document.body.classList.add("dark-theme");
}
else {
   localStorage.setItem("theme", "light");
}

