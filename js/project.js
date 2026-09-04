const PROJECT_LINKS = {
    weather: "https://github.com/Dev-MuhammadZaid/Weather-App-v1.0",
    photo: "https://github.com/Dev-MuhammadZaid/Photo-Editor-App-v1.0",
    food: "https://github.com/Dev-MuhammadZaid/Food-Website-v1.0",
    ecommerce: "https://github.com/Dev-MuhammadZaid/E-commerce-v1.0"
};

const projects = {
  weather: { live: "#", github: PROJECT_LINKS.weather, title: "Weather App", type: "JAVASCRIPT + API", image: "assets/images/projects/weather-compressed.webp", description: "A responsive weather dashboard designed to turn changing API data into information that is easy to scan. The interface focuses on city search, readable current conditions, secondary weather details, responsive cards and clear visual hierarchy so the experience remains useful on both small and large screens.", overview: "This project explores how a frontend can consume external weather data and transform a structured API response into human-readable information. The implementation can be expanded with better loading states, error handling, forecast sections and additional locations while keeping the main interface simple and responsive.", tech: ["HTML5", "CSS3", "JavaScript", "Weather API"], features: ["Responsive layout", "API data", "City search", "Dynamic UI"] },
  food: { live: "#", github: PROJECT_LINKS.food, title: "Food Website", type: "FRONTEND UI", image: "assets/images/projects/food-website.webp", description: "A modern food website concept focused on presenting dishes, categories and calls to action in a visually organized interface. The project demonstrates responsive sections, reusable cards, navigation behavior and a layout that can be extended with menus, ordering flows or additional content.", overview: "The main goal is to create a food-focused interface where visitors can quickly understand the brand, browse highlighted items and move between important sections. The case study can later document the page hierarchy, card design, responsive behavior, JavaScript interactions and any improvements made after testing.", tech: ["HTML5", "CSS3", "JavaScript"], features: ["Food cards", "Responsive sections", "Interactive menu", "Clean navigation"] },
  photo: { live: "#", github: PROJECT_LINKS.photo, title: "Photo Editor", type: "JAVASCRIPT", image: "assets/images/projects/photo-editor.webp", description: "A browser-based photo editing concept that explores how image controls can be connected to a visual preview. It provides a practical direction for experimenting with sliders, buttons, image state and browser capabilities while keeping the interface understandable for users.", overview: "This project is useful for practicing the relationship between user controls and visual output. The final case study can explain how image input, editing controls, Canvas operations and responsive layout decisions work together, along with future improvements such as reset controls, export options and better mobile handling.", tech: ["HTML5", "CSS3", "JavaScript", "Canvas"], features: ["Image controls", "Interactive editing", "Canvas workflow", "Responsive UI"] },
  ecommerce: { live: "#", github: PROJECT_LINKS.ecommerce, title: "E-commerce Frontend", type: "FRONTEND UI", image: "assets/images/projects/ecommerce-compressed.webp", description: "A product-focused e-commerce frontend concept built around clear product presentation, category browsing and responsive card layouts. The interface is designed as a foundation that can later connect to real product data, filtering, cart behavior and checkout-related flows.", overview: "The project concentrates on making product information easy to scan while maintaining a consistent visual system across cards and sections. A complete case study can document the product hierarchy, category flow, responsive grid, interaction states and the JavaScript logic that would support a larger shopping experience.", tech: ["HTML5", "CSS3", "JavaScript"], features: ["Product cards", "Responsive grid", "Shopping UI", "Interactive components"] }
};
const key = new URLSearchParams(location.search).get("project") || "weather";
const project = projects[key] || projects.weather;
const setText = (selector, value) => { const element = document.querySelector(selector); if (element) element.textContent = value; };
setText("#project-type", project.type);
setText("#project-title", project.title);
setText("#project-description", project.description);
setText("#project-overview", project.overview);
const image = document.querySelector("#project-image");
if (image) image.src = project.image;
const tech = document.querySelector("#project-tech");
if (tech) tech.innerHTML = project.tech.map(item => `<span>${item}</span>`).join("");
const features = document.querySelector("#project-features");
if (features) features.innerHTML = project.features.map(item => `<div>✓ ${item}</div>`).join("");

const liveLink = document.querySelector("#live-link");
const githubLink = document.querySelector("#github-link");
if (liveLink) liveLink.href = project.live;
if (githubLink) githubLink.href = project.github;
