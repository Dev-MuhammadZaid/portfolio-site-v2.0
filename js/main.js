document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));

  const topButton = document.querySelector(".back-top");
  if (!topButton) return;
  window.addEventListener("scroll", () => topButton.classList.toggle("show", scrollY > 500));
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});


// Gallery
    const items = document.querySelectorAll('.gallery-item')

    items.forEach(item=>{
      item.addEventListener('mouseenter',()=>{
        item.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block:"nearest"
        })
      })
    })