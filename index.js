function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.style.setProperty('display', 'flex', 'important');
    document.body.style.overflow = 'hidden'; // Prevents background scrolling
  }
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.style.setProperty('display', 'none', 'important');
    document.body.style.overflow = 'auto'; // Re-enables scrolling
  }
}

document.querySelectorAll('.sidebar .nav-item a').forEach(link => {
  link.addEventListener('click', () => {
    hideSidebar();
  });
});

function changeImage() {
  const img = document.getElementById('profileImage');

  const originalSrc = "Drawer/angelo.jpg";
  const newSrc = "Drawer/formal.jpg";

  if (img.src.includes(originalSrc)) {
    img.src = newSrc;
  } else {
    img.src = originalSrc;
  }
}

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar',
  offset: 100
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

const greetings = [
  "Hello!", "Kumusta!", "Hola!", "Bonjour!", "Ciao!",
  "Konnichiwa!", "Annyeong!", "Namaste!", "Olá!", "Hallo!"
];

let currentGreetingIndex = 0;

function sayHello() {
  const display = document.getElementById('helloDisplay');
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  display.style.opacity = 0;

  setTimeout(() => {
    display.innerText = greetings[currentGreetingIndex];
    display.style.opacity = 1;
    display.style.transition = "opacity 0.3s ease";
  }, 200);
}