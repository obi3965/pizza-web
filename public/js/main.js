
// const navToggler = document.querySelector('.nav-toggler');
// const navMenu = document.querySelector('.site-navbar ul');
// const navLinks = document.querySelectorAll('.site-navbar a');


// allEventListners();


// function allEventListners() {
  
//   navToggler.addEventListener('click', togglerClick);
  
//   navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
// }


// function togglerClick() {
//   navToggler.classList.toggle('toggler-open');
//   navMenu.classList.toggle('open');
// }


// function navLinkClick() {
//   if(navMenu.classList.contains('open')) {
//     navToggler.click();
//   }
// }

const header1 = document.querySelector("header")
window.onscroll = function(){
    let top = window.scrollY;
    if(top >= 100){
        header1.classList.add('active')
    }else{
        header1.classList.remove('active')
    }
}


const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});


function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 3){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 20){
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}


//social icons in contact form
let checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach(function(item){
  item.addEventListener("click", function(){
    this.closest(".item").classList.toggle("active");
  });
});




