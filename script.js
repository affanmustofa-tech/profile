// ============================
// TAHUN OTOMATIS
// ============================

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();


// ============================
// DARK / LIGHT MODE
// ============================

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


let lightMode =
    localStorage.getItem(
        "hilmi-theme"
    );


if (lightMode === "light") {

    document.body.classList.add(
        "light"
    );

    themeToggle.textContent = "☾";

}


themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        localStorage.setItem(
            "hilmi-theme",
            isLight
                ? "light"
                : "dark"
        );


        themeToggle.textContent =
            isLight
                ? "☾"
                : "☼";

    }
);


// ============================
// SMOOTH SCROLL
// ============================

const links =
    document.querySelectorAll(
        'a[href^="#"]'
    );


links.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    }
);
