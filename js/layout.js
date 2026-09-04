document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";
  const links = SITE.nav.map(([name, href]) =>
    `<a class="${page === href ? "active" : ""}" href="${href}">${name}</a>`
  ).join("");

  document.querySelector("#site-header").innerHTML = `
    <nav class="container navbar">
      <a class="logo" href="index.html" aria-label="Muhammad Zaid home">M<span>Z</span><b>.</b></a>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">☰</button>
      <div class="nav-links">${links}<button class="theme-toggle" aria-label="Toggle theme">☾</button></div>
    </nav>`;

  document.querySelector("#site-footer").innerHTML = `
    <div class="container footer-grid">
      <div><a class="logo" href="index.html">M<span>Z</span><b>.</b></a><p>Frontend Developer focused on clean, responsive interfaces.</p></div>
      <div><h3>Navigation</h3><div class="footer-links">${links}</div></div>
      <div><h3>Connect</h3><a href="${SITE.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i>&nbsp;Github</a><a href="${SITE.linkedin}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i>&nbsp;LinkedIn</a><a href="mailto:${SITE.email}"><i class="fa-solid fa-envelope"></i>&nbsp;Gmail</a></div>
    </div>
    <div class="container footer-bottom"><p>© 2026 ${SITE.name}. All rights reserved.</p><p>Built with HTML, CSS & JavaScript.</p></div>`;

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
});
