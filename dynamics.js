function galleryScroll() {
  console.log("galleryScroll");
  let currGal = document.getElementById("Gallery").value;
  console.log(currGal);

  let galOpts = document.querySelectorAll(".gallery-opt");

  if (currGal == "") {
    galOpts.forEach((opt) => {
      if (opt.classList.contains("hide") == true) {
        opt.classList.toggle("hide");
        console.log(opt.classList);
      }
    });
  } else {
    galOpts.forEach((opt) => {
      if (opt.classList.contains("hide") == false) {
        opt.classList.add("hide");
        console.log(opt.classList);
      }
    });
    document.querySelector(`#${currGal}`).classList.toggle("hide");
  }

  document.querySelector("#gallery").scrollIntoView();
}
function galleryScrollB() {
  console.log("galleryScroll");
  let currGal = document.getElementById("GalleryB").value;
  console.log(currGal);

  let galOpts = document.querySelectorAll(".gallery-opt");

  if (currGal == "") {
    galOpts.forEach((opt) => {
      if (opt.classList.contains("hide") == true) {
        opt.classList.toggle("hide");
        console.log(opt.classList);
      }
    });
  } else {
    galOpts.forEach((opt) => {
      if (opt.classList.contains("hide") == false) {
        opt.classList.add("hide");
        console.log(opt.classList);
      }
    });
    document.querySelector(`#${currGal}`).classList.toggle("hide");
  }

  document.querySelector("#gallery").scrollIntoView();
}

function viewCAT() {
  document.getElementById("cat_pack").classList.toggle("hide");
}

function viewKFP() {
  document.getElementById("kfp_pack").classList.toggle("hide");

}

// function checkSize() {
//   if (window.innerWidth < 600) {
//     alert("Mobile Site is currently under construction, please use desktop or laptop for best experience. I apologize for the inconvenience.");
//   }
// }

// checkSize();
// window.addEventListener("resize", checkSize);