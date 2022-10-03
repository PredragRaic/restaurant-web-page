


// mobile first red hover menu


  // your page initialization code here
  // the DOM will be available here


  


document.querySelector('.fa-bars').addEventListener('click', displayMenu);
document.querySelector('.x-bar').addEventListener('click', clearDisplayMenu);
document.querySelector('#hovermeniClick').addEventListener('click', clearDisplayMenu);
document.querySelector('#hoverDichesClick').addEventListener('click', clearDisplayMenu);
document.querySelector('#hoverAboutUs').addEventListener('click', clearDisplayMenu);
document.querySelector('#hoverGallery').addEventListener('click', clearDisplayMenu);





const btn = document.getElementById('moj');
btn.addEventListener('click', ()=>{
  if(window.innerWidth > 989){
    document.querySelector('#slick').style.display = 'block';
  }else{
    document.querySelector('#slick').style.display = 'none';
  }
});

 
  


document.querySelector('.x_bar').addEventListener('click', clearGalleryIMG);


function displayMenu(){
    document.querySelector('.menuElementsMobileHover').style.display = 'flex';
    document.querySelector('.x-bar').style.display = 'block';
}

function clearDisplayMenu(){
    document.querySelector('.menuElementsMobileHover').style.display = 'none';
    document.querySelector('.x-bar').style.display = 'none';
    
}



// View all manu, expand part of 4 hidden div

document.querySelector('.chevronDown').addEventListener('click', expandMenuButton);
document.querySelector('.chevronUp').addEventListener('click', colapseMenuButton);


function expandMenuButton(){
    const showMenuElements = document.querySelectorAll('.hidden');
    for(let i = 0; i < showMenuElements.length; i++){
        showMenuElements[i].style.display = 'block';
    }
    
    document.querySelector('.chevronDown').style.display = 'none';
    document.querySelector('.chevronUp').style.display = 'block';
}

function colapseMenuButton(){
    const hiddeMenuElements = document.querySelectorAll('.hidden');
    for(let i = 0; i < hiddeMenuElements.length; i++){
        hiddeMenuElements[i].style.display = 'none';
    }
    document.querySelector('.chevronDown').style.display = 'block';
    document.querySelector('.chevronUp').style.display = 'none';
    
}

// white heart become red

document.querySelectorAll('.whiteHeart').forEach(function(hearth) {
    hearth.addEventListener('mouseover', mouseOver);
});
document.querySelectorAll('.redHeart').forEach(function(hearth) {
    hearth.addEventListener('mouseout', mouseOut);
});


function mouseOver(event){

    event.target.parentElement.parentElement.querySelector('.whiteHeart').style.display = 'none';
    event.target.parentElement.parentElement.querySelector('.redHeart').style.display = 'block';
    
}
function mouseOut(event){
   

    event.target.parentElement.parentElement.querySelector('.redHeart').style.display = 'none';
    event.target.parentElement.parentElement.querySelector('.whiteHeart').style.display = 'block';
}
    

// slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}


// last image block


function clearGalleryIMG(){
  document.querySelector('#slick').style.display = 'none';
}


// document.querySelectorAll('.gPsc').forEach(function(show) {
//   show.addEventListener('click', displayGalleryIMG);
// });
// document.querySelectorAll('.redHeart').forEach(function(hearth) {
//   hearth.addEventListener('mouseout', mouseOut);
// });

// function displayGalleryIMG(e){
//   e.target.parentElement.parentElement.querySelector('#slick').style.display = 'block';
// }
