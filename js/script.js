
const hamburgerButton = document.getElementById("hamburgerButton");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerButton.addEventListener("click", () => {
  const isOpen = hamburgerMenu.classList.toggle("is-open");

  hamburgerButton.classList.toggle("is-open", isOpen);
  hamburgerButton.setAttribute("aria-expanded", String(isOpen));
  hamburgerButton.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く"
  );
});
// メニュー内のリンクを押したら閉じる
const menuLinks = hamburgerMenu.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("is-open");
    hamburgerButton.classList.remove("is-open");

    hamburgerButton.setAttribute("aria-expanded", "false");
    hamburgerButton.setAttribute("aria-label", "メニューを開く");
  });
});


/* GALLERY スクロールアニメーション */
const galleryImages = document.querySelectorAll(".gallery__image");

const galleryObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

galleryImages.forEach((image) => {
  galleryObserver.observe(image);
});

/* CONCEPT・CHEF 共通ズームアウトアニメーション */
const zoomElements = document.querySelectorAll(
  ".concept__title, .concept__text p, .chef__image, .chef__title, .chef__text p"
);

const zoomObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

zoomElements.forEach((element) => {
  zoomObserver.observe(element);
});

/* FV 英語テキスト スライドインアニメーション */
window.addEventListener("load", () => {
  const fvCopy = document.querySelector(".fv__copy");

  if (fvCopy) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fvCopy.classList.add("is-visible");
      });
    });
  }
});