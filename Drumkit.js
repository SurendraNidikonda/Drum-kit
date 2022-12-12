var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("https://res.cloudinary.com/daeetgsof/video/upload/v1670748247/crash_ijetsk.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("https://res.cloudinary.com/daeetgsof/video/upload/v1670823250/kick-bass_ducbbd.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/snare_hv97le.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('https://res.cloudinary.com/daeetgsof/video/upload/v1670823251/tom-1_aaxsfk.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/tom-2_bp107g.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/tom-3_r6ezr4.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/tom-4_epc1yk.mp3');
            kick.play();
            break;


        default:
            console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}