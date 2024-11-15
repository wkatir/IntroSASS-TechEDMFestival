document.addEventListener("DOMContentLoaded", function () {
  createGallery();
  setFixedNav();
  highlightLink();
});

function setFixedNav() {
  const header = document.querySelector(".header");
  const aboutFestival = document.querySelector(".about-festival");

  window.addEventListener("scroll", function () {
    if (aboutFestival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function createGallery() {
  const gallery = document.querySelector(".gallery-images");
  const imageUrls = [
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909190/TechFestival/img/gallery/full/gag6ac6mvohav02wc6kn.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909188/TechFestival/img/gallery/full/yrj3hqfwicwefgrzrssg.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909187/TechFestival/img/gallery/full/ditgo4h84yhhqxc5a51d.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909184/TechFestival/img/gallery/full/mzgxqfileirg7npcy2h0.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909179/TechFestival/img/gallery/full/n2sajkr2cpmpryygt7fz.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909179/TechFestival/img/gallery/full/yhczxfheqbb2lfmj1w6i.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909178/TechFestival/img/gallery/full/upcchufknsxv7kjdwray.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909167/TechFestival/img/gallery/full/r0ho2r12lgiluu68gkzy.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909154/TechFestival/img/gallery/full/ca6ch7cwakdkgympwefa.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909143/TechFestival/img/gallery/full/xxad2ilg3nht5udedszd.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909139/TechFestival/img/gallery/full/auw0vjgqkwiw9bf7lqrv.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909129/TechFestival/img/gallery/full/vp9l3bysiphy20pmoxxe.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909127/TechFestival/img/gallery/full/lefmy3qmupvfi691z0db.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909126/TechFestival/img/gallery/full/u7nfx04kddty4q6xzr4v.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909119/TechFestival/img/gallery/full/objilpzujesrnolocdjb.jpg",
    "https://res.cloudinary.com/di0cvbfdb/image/upload/v1730909118/TechFestival/img/gallery/full/xwbhpfyii3ofti81khgs.jpg",
  ];

  imageUrls.forEach((url) => {
    const img = document.createElement("IMG");
    img.src = url;
    img.alt = "Img Gallery";

    img.onclick = function () {
      showImg(url);
    };

    gallery.appendChild(img);
  });
}

function showImg(url) {
  const img = document.createElement("IMG");
  img.src = url;
  img.alt = "Img Gallery";

  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = closeModal;

  const closeModalBtn = document.createElement("BUTTON");
  closeModalBtn.textContent = "X";
  closeModalBtn.classList.add("btn-close");
  closeModalBtn.onclick = closeModal;

  modal.appendChild(img);
  modal.appendChild(closeModalBtn);

  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}

function highlightLink() {
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-navbar a");
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - sectionHeight / 3 &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}
