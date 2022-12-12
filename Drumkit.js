const w = document.getElementById("w");
const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");
const drumkit = document.getElementById("drumkit");
const crashUrl = "https://res.cloudinary.com/daeetgsof/video/upload/v1670748247/crash_ijetsk.mp3";
const bassUrl = "https://res.cloudinary.com/daeetgsof/video/upload/v1670823250/kick-bass_ducbbd.mp3";
const snareUrl = "https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/snare_hv97le.mp3";
const tom1Url = "https://res.cloudinary.com/daeetgsof/video/upload/v1670823251/tom-1_aaxsfk.mp3";
const tom2Url = "https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/tom-2_bp107g.mp3";
const tom3Url = "https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/tom-3_r6ezr4.mp3";
const tom4Url = "https://res.cloudinary.com/daeetgsof/video/upload/v1670823252/tom-4_epc1yk.mp3";

w.addEventListener("click", function() {
    var crash = new Audio(crashUrl);
    crash.play();
    w.classList.add("pressed");
    setTimeout(function() {
        w.classList.remove("pressed");
    }, 100);
});
a.addEventListener("click", function() {
    var kick = new Audio(bassUrl);
    kick.play();
    a.classList.add("pressed");
    setTimeout(function() {
        a.classList.remove("pressed");
    }, 100);
});
s.addEventListener("click", function() {
    var snare = new Audio(snareUrl);
    snare.play();
    s.classList.add("pressed");
    setTimeout(function() {
        s.classList.remove("pressed");
    }, 100);
});
d.addEventListener("click", function() {
    var tom1 = new Audio(tom1Url);
    tom1.play();
    d.classList.add("pressed");
    setTimeout(function() {
        d.classList.remove("pressed");
    }, 100);
});
j.addEventListener("click", function() {
    var tom2 = new Audio(tom2Url);
    tom2.play();
    j.classList.add("pressed");
    setTimeout(function() {
        j.classList.remove("pressed");
    }, 100);
});
k.addEventListener("click", function() {
    var tom3 = new Audio(tom3Url);
    tom3.play();
    k.classList.add("pressed");
    setTimeout(function() {
        k.classList.remove("pressed");
    }, 100);
});
l.addEventListener("click", function() {
    var tom4 = new Audio(tom4Url);
    tom4.play();
    l.classList.add("pressed");
    setTimeout(function() {
        l.classList.remove("pressed");
    }, 100);
});

document.addEventListener("keypress", function(event) {
    switch (event.key) {
        case 'w':
            var crash = new Audio(crashUrl);
            crash.play();
            w.classList.add("pressed");
            setTimeout(function() {
                w.classList.remove("pressed");
            }, 100);
            break;
        case 'a':
            var kick = new Audio(bassUrl);
            kick.play();
            a.classList.add("pressed");
            setTimeout(function() {
                a.classList.remove("pressed");
            }, 100);
            break;
        case 's':
            var snare = new Audio(snareUrl);
            snare.play();
            s.classList.add("pressed");
            setTimeout(function() {
                s.classList.remove("pressed");
            }, 100);
            break;

        case 'd':
            var tom1 = new Audio(tom1Url);
            tom1.play();
            d.classList.add("pressed");
            setTimeout(function() {
                d.classList.remove("pressed");
            }, 100);
            break;

        case 'j':
            var tom2 = new Audio(tom2Url);
            tom2.play();
            j.classList.add("pressed");
            setTimeout(function() {
                j.classList.remove("pressed");
            }, 100);
            break;

        case 'k':
            var tom3 = new Audio(tom3Url);
            tom3.play();
            k.classList.add("pressed");
            setTimeout(function() {
                k.classList.remove("pressed");
            }, 100);
            break;
        case 'l':
            var tom4 = new Audio(tom4Url);
            tom4.play();
            l.classList.add("pressed");
            setTimeout(function() {
                l.classList.remove("pressed");
            }, 100);
            break;


        default:
            console.log(event.key)
    }
});
