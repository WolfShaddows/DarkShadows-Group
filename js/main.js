document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (!menuToggle || !navigation) {
        console.warn("Navigation elements were not found.");
        return;
    }

    function openMenu() {
        navigation.classList.add("open");
        menuToggle.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        navigation.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            closeMenu();
        }
    });

    menuToggle.setAttribute("aria-expanded", "false");
});

