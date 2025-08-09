const slides = document.querySelectorAll(".slide");
let Login = document.querySelector(".log-btn");
let gayb =document.querySelector('.gayb');
let Close= document.querySelector('.close');

let Signuptxt= document.querySelector('.signuptxt');
let Name= document.querySelector('.my-name');
let SignupBody= document.querySelector('.signup-body');
let Signup= document.querySelector('.signup');
let Signin= document.querySelector('.signin');
let btn = document.querySelector('.btn')




/* close login page  */
Close.addEventListener('click',()=>{
    gayb.classList.add('gayb');

});
/* close login page ends  */


/* sign in and sign up start  */

Signin.addEventListener('click',()=>{
    Signuptxt.innerHTML='Sign In';
    Name.classList.add('name');
    SignupBody.style.marginTop ='50px';
    btn.style.marginTop ='98px';
});

Signup.addEventListener('click',()=>{
    Signuptxt.innerHTML='Sign Up';
    Name.classList.remove('name');
    SignupBody.style.marginTop ='30px';
    btn.style.marginTop ='50px';
});
/* sign in and sign up end */


/* login in   */

Login.addEventListener('click',()=>{
    gayb.classList.remove('gayb');
    
    
});
/* login in   ends */



/* slider  */


let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImages();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImages();
};

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

/* slider   end */

//for the card filtering 

  const input = document.querySelector('.input');
  const cards = document.querySelectorAll('.movie-card .card');

  // Elements to hide on search
  const allTrendingHeadings = document.querySelectorAll('h2.Trending');
  const allMoreLinks = document.querySelectorAll('a.watch-more');
  const headerSection = document.querySelector('.header-section');
  const zeeLinksSection = document.querySelector('.zee-links');
  const endInfoDiv = document.querySelector('.end-info');
  const footerSection = document.querySelector('.footer-section');
  const footerContentLinks = document.querySelector('.footer-content-links');

  input.addEventListener('keyup', () => {
    const filter = input.value.toLowerCase().trim();
       if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navActions.classList.remove('active');
    }
    // Close the login page if it's open when the user types
    if (loginPage && loginPage.style.display === 'block') {
        loginPage.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
    }

    // Filter movie cards
    cards.forEach(card => {
      const movieName = card.querySelector('.Movie-name').textContent.toLowerCase();
      const description = card.querySelector('.discription').textContent.toLowerCase();

      if (movieName.includes(filter) || description.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Toggle all sections based on input
    const shouldHide = filter !== '';

    allTrendingHeadings.forEach(h2 => h2.style.display = shouldHide ? 'none' : 'block');
    allMoreLinks.forEach(link => link.style.display = shouldHide ? 'none' : 'inline');
    if (headerSection) headerSection.style.display = shouldHide ? 'none' : 'block';
    if (zeeLinksSection) zeeLinksSection.style.display = shouldHide ? 'none' : 'block';
    if (endInfoDiv) endInfoDiv.style.display = shouldHide ? 'none' : 'block';
    if (footerSection) footerSection.style.display = shouldHide ? 'none' : 'block';
    if (footerContentLinks) footerContentLinks.style.display = shouldHide ? 'none' : 'block';
  });


  ////

  const loginBtn = document.querySelector('.log-btn');
  const mainContent = document.querySelector('.main-content');
  const loginPage = document.querySelector('.login-page');
   const closeBtn = document.querySelector('.close');

  loginBtn.addEventListener('click', () => {
    if (mainContent) mainContent.style.display = 'none';  // Hides all sections
    if (loginPage) loginPage.style.display = 'block'; // Shows the login page
    navLinks.classList.remove('active'); 
    navActions.classList.remove('active');
  });

   closeBtn.addEventListener('click', () => {
    if (mainContent) mainContent.style.display = 'block';
    if (loginPage) loginPage.style.display = 'none';
  });


  //if the nothig is found in the search field 
const noResults = document.getElementById("no-results");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  let anyVisible = false;

  cards.forEach((card) => {
    const movieName = card.querySelector(".Movie-name").textContent.toLowerCase();
    
    if (movieName.includes(value)) {
      card.style.display = "block";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show/hide "No content found"
  noResults.style.display = anyVisible ? "none" : "block";
});

//my toggle btn for the small size 
 const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links-list');
    const navActions = document.getElementById('nav-actions-list');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navActions.classList.toggle('active');

    });
    // To close the mobile navigation menu when a nav link is clicked
const navLinksList = document.querySelectorAll('.nav-links li a');
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navActions.classList.remove('active');
    });
});

