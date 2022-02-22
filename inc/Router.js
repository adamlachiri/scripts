import Helpers from "./Helpers.js";

export default class Router extends Helpers {

    static router_sections() {
        // check
        if (!document.querySelector(".js-router-sections")) {
            return;
        }

        // vars
        const router = document.querySelector(".js-router-sections");
        const links = router.querySelectorAll(".js-section-link");
        const links_count = links.length;

        // loop
        for (let i = 0; i < links_count; i++) {

            // functions
            function handle_routing(index) {
                for (let i = 0; i < links_count; i++) {
                    // vars
                    const link = links[i];
                    const id = link.dataset.id;
                    const section = document.getElementById(id);
                    const condition = index === i;

                    // exe
                    section.style.display = condition ? "block" : "none";
                    link.style.opacity = condition ? "1" : "0.8";

                }
            }

            // init
            handle_routing(0);

            // event
            links[i].addEventListener("click", function () {
                handle_routing(i);
            })
        }
    }

    static router_sections_fade() {
        // check
        if (!document.querySelector(".js-router-sections-fade")) {
            return;
        }

        // vars
        const router = document.querySelector(".js-router-sections-fade");
        const links = router.querySelectorAll(".js-section-link");
        const links_count = links.length;
        const delay = 300;

        // loop
        for (let i = 0; i < links_count; i++) {

            // functions
            function handle_routing(index) {
                for (let i = 0; i < links_count; i++) {
                    // vars
                    const link = links[i];
                    const id = link.dataset.id;
                    const section = document.getElementById(id);
                    const condition = index === i;

                    // fade in
                    if (condition) {
                        setTimeout(() => {
                            section.style.display = "block";
                            section.style.animation = delay + "ms fade-in linear forwards";
                        }, delay);
                        link.style.opacity = 1;
                    }

                    // fade out 
                    else {
                        section.style.animation = delay + "ms fade-out linear forwards";
                        setTimeout(() => {
                            section.style.display = "none";
                        }, delay);
                        link.style.opacity = 0.5;
                    }
                }
            }

            // init
            handle_routing(0);

            // event
            links[i].addEventListener("click", function () {
                handle_routing(i);
            })
        }
    }

    static router_pages() {

        // check
        if (!document.querySelector(".js-router-pages")) {
            return;
        }

        // vars
        const router = document.querySelector(".js-router-pages");
        const links = router.querySelectorAll(".js-page-link");
        const links_count = links.length;
        let current_id = "home";
        let delay;

        // functions
        function handle_routing() {
            for (let i = 0; i < links_count; i++) {
                // vars
                const link = links[i];
                const page_id = link.dataset.id;
                const page = document.querySelector("#" + page_id);
                const current_page = current_id === page_id;


                // fade in
                if (current_page) {
                    setTimeout(() => {
                        page.style.display = "block";
                        page.style.animation = delay + "ms fade-in linear forwards";
                    }, delay);
                }

                // fade out
                else {
                    page.style.animation = delay + "ms fade-out linear forwards";
                    setTimeout(() => {
                        page.style.display = "none";
                    }, delay);
                }

                // init
                page.style.transition = "ease-out " + delay + "ms";
            }

            // push history
            const url = "./" + (current_id === "home" ? "" : current_id);
            history.pushState({ id: current_id }, "", url);
        }

        function init() {
            delay = 0;
            handle_routing();
            delay = 300
        }

        // loop
        for (let i = 0; i < links_count; i++) {

            // vars
            const link = links[i];
            const id = links[i].dataset.id;

            // event
            link.addEventListener("click", function () {
                current_id = id;
                handle_routing();
            })

        }

        // events
        window.addEventListener("popstate", function (event) {
            if (current_id !== "home") {
                current_id = event.state.id;
                handle_routing();
            }

        })

        // init
        init();
    }
}