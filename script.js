// ========================================================
// MENU MOBILE
// ========================================================

const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

if(menuToggle && navList){

  menuToggle.addEventListener("click", () => {

    navList.classList.toggle("active");

    // ALTERAR ÍCONE
    const icon = menuToggle.querySelector("i");

    if(navList.classList.contains("active")){

      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

    }else{

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });

}

// ========================================================
// FECHAR MENU AO CLICAR
// ========================================================

const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navList.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});

// ========================================================
// HEADER PREMIUM AO ROLAR
// ========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.classList.add("scroll");

  }else{

    header.classList.remove("scroll");

  }

});

// ========================================================
// SCROLL SUAVE
// ========================================================

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    const id = this.getAttribute("href");

    if(id === "#") return;

    const section = document.querySelector(id);

    if(section){

      e.preventDefault();

      const headerOffset = 80;

      const sectionPosition =
        section.offsetTop - headerOffset;

      window.scrollTo({

        top: sectionPosition,

        behavior: "smooth"

      });

    }

  });

});

// ========================================================
// ACTIVE LINK NAVBAR
// ========================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 140;

    const sectionHeight = section.clientHeight;

    if(scrollY >= sectionTop &&
       scrollY < sectionTop + sectionHeight){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active-link");

    if(link.getAttribute("href") === `#${current}`){

      link.classList.add("active-link");

    }

  });

});

// ========================================================
// REVEAL ANIMATION
// ========================================================

const revealElements = document.querySelectorAll(
  ".card, .service-card, .info-card, .stack-card, .why-card, .mini-card"
);

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.12
});

revealElements.forEach(el => {

  el.classList.add("hidden");

  revealObserver.observe(el);

});

// ========================================================
// EFEITO PREMIUM BOTÕES
// ========================================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

  button.addEventListener("mousemove", (e) => {

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);

  });

});

// ========================================================
// MICRO INTERAÇÃO CARDS
// ========================================================

const cards = document.querySelectorAll(
  ".card, .service-card, .stack-card, .why-card"
);

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 25) * -1;
    const rotateY = (x - centerX) / 25;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0)
      rotateY(0)
      translateY(0)
    `;

  });

});

// ========================================================
// PARALLAX HERO
// ========================================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  if(hero){

    const scrollY = window.scrollY;

    hero.style.transform =
      `translateY(${scrollY * 0.03}px)`;

  }

});

// ========================================================
// HERO TITLE ANIMATION
// ========================================================

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

  heroTitle.style.opacity = "0";
  heroTitle.style.transform = "translateY(30px)";

  setTimeout(() => {

    heroTitle.style.transition =
      "all .9s ease";

    heroTitle.style.opacity = "1";
    heroTitle.style.transform =
      "translateY(0)";

  },250);

}

// ========================================================
// HERO PARAGRAPH ANIMATION
// ========================================================

const heroParagraph = document.querySelector(".hero p");

if(heroParagraph){

  heroParagraph.style.opacity = "0";
  heroParagraph.style.transform =
    "translateY(20px)";

  setTimeout(() => {

    heroParagraph.style.transition =
      "all .9s ease";

    heroParagraph.style.opacity = "1";

    heroParagraph.style.transform =
      "translateY(0)";

  },450);

}

// ========================================================
// SCROLL PROGRESS
// ========================================================

const progressBar = document.createElement("div");

progressBar.classList.add("scroll-progress");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  progressBar.style.width = `${progress}%`;

});

// ========================================================
// CURSOR GLOW
// ========================================================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

// ========================================================
// DESATIVAR EFEITOS PESADOS NO MOBILE
// ========================================================

const isMobile = window.innerWidth < 768;

if(isMobile){

  glow.remove();

  cards.forEach(card => {

    card.addEventListener("mousemove", null);

    card.style.transform = "none";

  });

}

// ========================================================
// LOADING SUAVE DA PÁGINA
// ========================================================

window.addEventListener("load", () => {

  document.body.style.opacity = "0";

  setTimeout(() => {

    document.body.style.transition =
      "opacity .5s ease";

    document.body.style.opacity = "1";

  },50);

});