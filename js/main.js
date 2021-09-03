const image1 = document.getElementById("parallax-1");
const image2 = document.getElementById("parallax-2");
const image3 = document.getElementById("parallax-3");
const image4 = document.getElementById("parallax-4");
const image5 = document.getElementById("parallax-5");
const image6 = document.getElementById("parallax-6");
const image7 = document.getElementById("parallax-7");
const image8 = document.getElementById("parallax-8");
const image9 = document.getElementById("parallax-9");

const onScrolling = () => {
  const offset = window.pageYOffset;
  image2.style.transform = `translate3d(0,${offset * 0.1}px,0)`;
  image3.style.transform = `translate3d(0,${offset * 0.2}px,0)`;
  image4.style.transform = `translate3d(0,${offset * 0.3}px,0)`;
  image5.style.transform = `translate3d(0,${offset * 0.4}px,0)`;
  image6.style.transform = `translate3d(0,${offset * 0.5}px,0)`;
  image7.style.transform = `translate3d(0,${offset * 0.6}px,0)`;
  image8.style.transform = `translate3d(0,${offset * 0.7}px,0)`;
  image9.style.transform = `translate3d(0,${offset * 0.8}px,0)`;
};

document.addEventListener("scroll", onScrolling);
