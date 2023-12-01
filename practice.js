// form alert code
function display() {

    // var name = document.getElementById("my_name");
    // console.log(name);
    // if (name) {
    //     alert("please enter your name");
    //     return false;
 if (document.getElementById("my_name").value == "") {
    alert("please enter your name");
    return false;
} else if (document.getElementById("my_password").value == "") {
    alert("please enter your password");
    return false;
} else if (document.getElementById("my_email").value == "") {
    alert("please enter your email");
    return false;
} else if (document.getElementById("my_number").value == "") {
    alert("please enter your number");
    return false;
} else if (document.getElementById("my_confirm").value == "") {
    alert("please enter your confirm");
    return false;
} else if (document.getElementById("my_in").value == "") {
    alert("please enter your in");
    return false;
}else{
    validation()
}
}

function validation() {
    swal("Good job!", "You success to login", "success")
}


//  slider image code

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});



//  footer icon
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function () {
  menu.classList.toggle('active');
}


// nevbar

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

//  active link

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav li a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav li a [href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };

