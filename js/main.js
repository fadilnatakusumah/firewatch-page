const image1 = document.getElementById("parallax-1")
const image2 = document.getElementById("parallax-2")
const image3 = document.getElementById("parallax-3")
const image4 = document.getElementById("parallax-4")
const image5 = document.getElementById("parallax-5")
const image6 = document.getElementById("parallax-6")
const image7 = document.getElementById("parallax-7")
const image8 = document.getElementById("parallax-8")
const image9 = document.getElementById("parallax-9")

const onScrolling = ()=> {
  const offset =window.pageYOffset;
  image2.style.transform = `translateY(${(offset * .1)}px)`;
  image3.style.transform = `translateY(${(offset * .2)}px)`;
  image4.style.transform = `translateY(${(offset * .3)}px)`;
  image5.style.transform = `translateY(${(offset * .4)}px)`;
  image6.style.transform = `translateY(${(offset * .5)}px)`;
  image7.style.transform = `translateY(${(offset * .6)}px)`;
  image8.style.transform = `translateY(${(offset * .7)}px)`;
  image9.style.transform = `translateY(${(offset * .8)}px)`;
}

document.addEventListener("scroll", onScrolling)
