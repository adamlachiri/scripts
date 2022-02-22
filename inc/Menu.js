import Helpers from "./Helpers.js";

export default class Menu extends Helpers {

    static desktop_menu_fixed() {
        // check class
        if (!document.querySelector(".js-desktop-menu-fixed")) {
            return;
        }

        // html
        const menu = document.querySelector(".js-desktop-menu-fixed");
        const page = document.documentElement || document.body;
        const anti_menu = document.createElement("div");

        // functions

        function make_menu_fixed() {
            menu.style.color = "var(--dark)";
            menu.style.background = "var(--white)";
            menu.style.position = "fixed";
            menu.style.padding = "0.5rem 3rem";
            menu.style.boxShadow = "0 0 0.1rem black";
        }

        function make_menu_absolute() {
            menu.style.color = "var(--dark)";
            menu.style.background = "none";
            menu.style.position = "absolute";
            menu.style.top = "0";
            menu.style.left = "0";
            menu.style.right = "0";
            menu.style.zIndex = "9999";
            menu.style.padding = "3rem";
            menu.style.boxShadow = "none";
        }

        function create_anti_menu() {
            document.body.prepend(anti_menu);
            anti_menu.classList.add("js-anti-menu");
        }

        function get_anti_menu_size() {
            // html
            if (this.check_if_tablet()) {
                anti_menu.style.display = "none";
                return;
            }

            // exe
            anti_menu.style.display = "";
            anti_menu.style.height = menu.clientHeight + "px";
        }

        // event
        window.addEventListener("scroll", function () {
            if (page.scrollTop == 0) {
                make_menu_absolute();
            } else {
                make_menu_fixed();
            }
        });

        window.addEventListener("resize", get_anti_menu_size);

        // init
        window.addEventListener("load", function () {
            make_menu_absolute();
            create_anti_menu();
            get_anti_menu_size();
        })
    }

    static mobile_menu() {
        // check class
        if (!document.getElementsByClassName("js-mobile-menu")[0]) {
            return;
        }

        // html
        const mobile_menu = document.getElementsByClassName("js-mobile-menu")[0];
        const menu_box = mobile_menu.getElementsByClassName("js-menu-box")[0];
        const menu = mobile_menu.getElementsByClassName("js-menu")[0];
        const btn_toggle = mobile_menu.getElementsByClassName("js-toggle")[0];

        // functions
        function get_menu_box_size() {
            const menu_height = menu.clientHeight;
            menu_box.style.height = "calc(100vh - " + menu_height + "px)";
        }

        function styling() {
            menu_box.classList.add("d-none");
        }

        function open_menu_box() {
            menu_box.classList.remove("d-none");
            btn_toggle.classList.remove("icon-menu-box");
            btn_toggle.classList.add("icon-close");
        }

        function close_menu_box() {
            menu_box.classList.add("d-none");
            btn_toggle.classList.add("icon-menu-box");
            btn_toggle.classList.remove("icon-close");
        }

        // events
        btn_toggle.addEventListener("click", function () {
            if (menu_box.classList.contains("d-none")) {
                open_menu_box();
            } else {
                close_menu_box();
            }
        })

        window.addEventListener("resize", function () {
            get_menu_box_size();
            close_menu_box();
        })

        // init
        get_menu_box_size();
        styling();

    }

    static link() {
        // check
        if (!document.getElementsByClassName("js-link")[0]) {
            return;
        }

        // check screen size
        if (this.check_if_tablet()) {
            return;
        }

        // vars
        const links = document.getElementsByClassName("js-link");
        const page_link = window.location.href;


        // loop
        for (let i = 0; i < links.length; i++) {
            // vars
            const link = links[i];
            const link_class = link.dataset.class;

            // exe
            if (link.href === page_link) {
                link.classList.add(link_class);
            }
            else {
                link.classList.remove(link_class);
            }
        }

    }

    static web_menu_standard() {
        // check class
        if (!document.getElementsByClassName("js-web-menu-standard")[0]) {
            return;
        }

        // html
        const menu = document.getElementsByClassName("js-web-menu-standard")[0];

        // functions

        function make_menu_fixed() {
            menu.style.color = "var(--dark)";
            menu.style.background = "var(--white)";
            menu.style.position = "fixed";
            menu.style.top = "0";
            menu.style.left = "0";
            menu.style.right = "0";
            menu.style.zIndex = "9999";
            menu.style.padding = "0.5rem 3rem";
            menu.style.boxShadow = "0 0 0.1rem black";
        }

        function get_anti_menu_size() {
            // html
            if (!document.getElementsByClassName("js-anti-menu")[0] || this.check_if_tablet()) {
                return;
            }

            // exe
            const anti_menu = document.getElementsByClassName("js-anti-menu")[0];
            anti_menu.style.height = menu.clientHeight + "px";
        }

        // event
        window.addEventListener("scroll", function () {
            make_menu_fixed();
            get_anti_menu_size();
        });

        window.addEventListener("resize", get_anti_menu_size);
    }

}
