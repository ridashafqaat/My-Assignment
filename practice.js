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


