const searchInput = document.querySelector("#project-search");
const projectItems = [...document.querySelectorAll(".project-item")];
const filterButtons = [...document.querySelectorAll(".filter")];
const emptyState = document.querySelector(".empty-state");

let activeFilter = "all";

function filterProjects() {
    const searchText = searchInput?.value.toLowerCase().trim() || "";

    let visibleCount = 0;

    projectItems.forEach(item => {
        const title = item.dataset.title?.toLowerCase() || "";
        const tags = item.dataset.tags?.toLowerCase().split(" ") || [];

        const searchMatch = title.includes(searchText);

        const filterMatch =
            activeFilter === "all" ||
            tags.includes(activeFilter);

        const shouldShow = searchMatch && filterMatch;

        item.classList.toggle("is-hidden", !shouldShow);

        if (shouldShow) {
            visibleCount++;
        }
    });

    if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
    }
}


// Search
searchInput?.addEventListener("input", filterProjects);


// Category filters
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        activeFilter = button.dataset.filter?.toLowerCase() || "all";

        filterProjects();
    });
});


// Initial filtering
filterProjects();