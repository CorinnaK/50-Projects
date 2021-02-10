const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0;
let int = setInterval(blurring, 30);

function blurring () {
    load++
    if (load > 99) {
        clearInterval(int)
    }
loadText.innerText = `${load}%`
loadText.style.opacity = scale(load, 0, 100, 1, 0);
bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// This is taking the 0-100 range of the load and traslating it to a different range. In the case of the background(bg)- the num = load, in_min = the minimum of the load 0, in_max = the maximum of the load, out-min = 30 (we want the image to start at 30% blurred), and then the out_max = 0 (completely unblurred). Note this is working from 1 down to zero while the load increments 0-100  in the same amount of time. 

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }