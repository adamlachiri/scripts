import Helpers from "./Helpers.js";

export default class Others extends Helpers {

    static accordion() {
        // check
        if (!document.getElementsByClassName("js-accordion")[0]) {
            return;
        }

        // html
        const accordions = document.getElementsByClassName("js-accordion");

        // loop
        for (let i = 0; i < accordions.length; i++) {
            // html
            const accordion = accordions[i];
            const accordion_btn = accordion.getElementsByClassName("js-accordion-btn")[0];
            const accordion_box = accordion.getElementsByClassName("js-accordion-box")[0];

            // events
            accordion_btn.addEventListener("click", function () {
                accordion_box.classList.toggle("a-accordion-open");
            })

            // init
            accordion_box.style.maxHeight = "0";
        }
    }

    static scroll_progress() {
        // check class
        if (!document.getElementsByClassName("js-scroll-progress")[0]) {
            return;
        }

        // chekc if mobile
        if (this.check_if_tablet()) {
            return;
        }

        // html
        const scroll_progress = document.getElementsByClassName("js-scroll-progress")[0];
        const half_circle_1 = scroll_progress.getElementsByClassName("js-half-circle-1")[0];
        const half_circle_2 = scroll_progress.getElementsByClassName("js-half-circle-2")[0];
        const half_circle_top = scroll_progress.getElementsByClassName("js-half-circle-top")[0];
        const progress_bar = scroll_progress.getElementsByClassName("js-progress-bar")[0];

        // functions
        function get_percentage() {
            // vars
            const page = document.documentElement || document.body;
            const page_height = page.scrollHeight;
            const scroll_level = page.scrollTop + window.innerHeight;
            let percentage = Math.ceil(scroll_level * 100 / page_height);
            percentage = percentage > 100 ? 100 : percentage;
            const degree = Math.ceil(percentage * 3.6);
            const degree_1 = degree > 180 ? 180 : degree;

            // css
            half_circle_1.style.transform = "rotate(" + degree_1 + "deg)";
            half_circle_2.style.transform = "rotate(" + degree + "deg)";
            half_circle_top.style.opacity = degree > 180 ? "0" : "1";

            // edit text
            progress_bar.innerHTML = percentage + "%";
        }

        function styling() {
            scroll_progress.style.width = "5rem";
            scroll_progress.style.height = "5rem";
            progress_bar.style.width = "4rem";
            progress_bar.style.height = "4rem";
            half_circle_1.style.transformOrigin = "right center";
            half_circle_1.style.transition = "transform linear 0.5s";
            half_circle_2.style.transformOrigin = "right center";
            half_circle_2.style.transition = "transform linear 1s";
            half_circle_top.style.transition = "opacity 0s 1s";
        }

        // events
        window.addEventListener("DOMContentLoaded", get_percentage);
        window.addEventListener("scroll", get_percentage);

        // init
        styling();
    }

    static counter() {
        // check
        if (!document.querySelector(".js-counter")) {
            return;
        }

        // vars
        const rules = {
            threshold: 0
        }

        // html
        const counters = document.querySelectorAll(".js-counter");

        // loop
        for (let i = 0; i < counters.length; i++) {
            // vars
            const counter = counters[i];
            const limit = parseInt(counter.dataset.limit);
            const speed = 2000 / limit;
            console.log(speed);
            counter.innerHTML = "0";

            // functions
            function counting() {
                let count = parseInt(counter.innerHTML);
                if (count < limit) {
                    setTimeout(() => {
                        count++;
                        counter.innerHTML = count;
                        counting();
                    }, speed)
                } else {
                    return;
                }
            }

            // define observer
            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                    // check
                    if (!entry.isIntersecting) {
                        return;
                    }

                    // counting
                    counting();

                    // unobserve
                    observer.unobserve(counter);
                })
            }, rules);

            // observe
            observer.observe(counter);

        }
    }

    static format() {
        // check
        if (!document.querySelector(".js-format")) {
            return;
        }

        // html 
        const ints = document.querySelectorAll(".js-format");

        // loop
        for (let i = 0; i < ints.length; i++) {
            // html
            const int = ints[i];

            // var
            const value = parseInt(int.innerHTML);
            let result;

            // format
            if (value >= 1000000) {
                result = (value / 1000000).toFixed(2) + "M";
            }
            else if (value >= 10000) {
                result = (value / 1000).toFixed(0) + "K";
            }
            else {
                result = value;
            }

            // exe
            int.innerHTML = result;
        }


    }

    static format_with_commas() {
        // check
        if (!document.querySelector(".js-format-commas")) {
            return;
        }

        // html 
        const ints = document.querySelectorAll(".js-format-commas");

        // loop
        for (let i = 0; i < ints.length; i++) {
            // html
            const int = ints[i];

            // var
            const value = parseInt(int.innerHTML);

            // format
            const result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            // exe
            int.innerHTML = result;
        }
    }

    static darkmode() {
        // check
        if (!document.querySelector(".js-darkmode")) {
            return;
        }

        // html
        const container = document.querySelector(".js-darkmode");
        const btn_day = container.querySelector(".js-day");
        const btn_night = container.querySelector(".js-night");
        const imgs = document.querySelectorAll(".js-darkmode-img");
        const bgs = document.querySelectorAll(".js-darkmode-bg");
        const class_elements = document.querySelectorAll(".js-darkmode-class");
        const toggler = container.querySelector(".js-toggler");

        // vars
        const initial = container.dataset.initial;
        const l = class_elements.length;

        // functions

        function day() {

            // alter image sources
            for (let i = 0; i < imgs.length; i++) {
                // vars
                const img = imgs[i];
                const src = img.dataset.day_src;

                // alter src
                img.src = src;
            }

            // alter background sources
            for (let i = 0; i < bgs.length; i++) {
                // vars
                const bg = bgs[i];
                const day_src = bg.dataset.day_src;

                // alter src
                bg.style.backgroundImage = "url(" + day_src + ")";
            }

            // alter classes
            for (let i = 0; i < l; i++) {

                // get element
                const element = class_elements[i];
                const night_classes = element.dataset.night_classes.split("/");
                const day_classes = element.dataset.day_classes.split("/");
                element.style.transition = "ease-out 0.3s";

                // loop
                for (let j = 0; j < night_classes.length; j++) {
                    // get the classes
                    const night_class = night_classes[j];
                    const day_class = day_classes[j];

                    // transformation
                    element.classList.remove(night_class);
                    element.classList.add(day_class);
                }
            }
        }

        function night() {

            // alter image sources
            for (let i = 0; i < imgs.length; i++) {
                // vars
                const img = imgs[i];
                const src = img.dataset.night_src;

                // alter src
                img.src = src;
            }

            // alter background sources
            for (let i = 0; i < bgs.length; i++) {
                // vars
                const bg = bgs[i];
                const night_src = bg.dataset.night_src;

                // alter src
                bg.style.backgroundImage = "url(" + night_src + ")";
            }

            // alter classes
            for (let i = 0; i < l; i++) {

                // get element
                const element = class_elements[i];
                const night_classes = element.dataset.night_classes.split("/");
                const day_classes = element.dataset.day_classes.split("/");
                element.style.transition = "ease-out 0.3s";

                // loop
                for (let j = 0; j < night_classes.length; j++) {
                    // get the classes
                    const night_class = night_classes[j];
                    const day_class = day_classes[j];

                    // transformation
                    element.classList.add(night_class);
                    element.classList.remove(day_class);
                }
            }
        }


        // events
        btn_day.addEventListener("click", day);
        btn_night.addEventListener("click", night);

        // starter
        initial === "night" ? night() : day();

    }

    static loading() {
        // check
        if (!document.querySelector(".js-loading")) {
            return;
        }

        // vars
        const loading = document.querySelector(".js-loading");
        const delay = 300;

        // styling
        loading.style.position = "fixed";
        loading.style.top = "0";
        loading.style.bottom = "0";
        loading.style.left = "0";
        loading.style.right = "0";
        loading.style.zIndex = 9999;

        // event
        window.addEventListener("load", function () {
            loading.style.animation = delay + "ms fade-out linear forwards";
            setTimeout(() => {
                loading.style.display = "none";
            }, delay);
        })
    }

    static translator() {
        // check
        if (!document.querySelector(".js-translator")) {
            return;
        }

        // html
        const container = document.querySelector(".js-translator");
        const btn_fre = container.querySelector(".js-btn-fre");
        const btn_eng = container.querySelector(".js-btn-eng");
        const fres = document.querySelectorAll(".js-fre");
        const engs = document.querySelectorAll(".js-eng");

        // vars
        const initial = container.dataset.initial;
        const l = fres.length;
        const delay = 300;

        // functions

        function english() {

            // alter image sources
            for (let i = 0; i < l; i++) {
                // vars
                const eng_box = engs[i];
                const fre_box = fres[i];

                // fade out in
                fre_box.style.animation = delay + "ms fade-out linear forwards";
                setTimeout(() => {
                    fre_box.style.display = "none";
                    // fade in
                    eng_box.style.display = "";
                    eng_box.style.animation = delay + "ms fade-in linear forwards";
                }, delay);
            }

            // styling
            btn_fre.style.opacity = 0.5;
            btn_eng.style.opacity = 1;
        }


        function french() {

            // alter image sources
            for (let i = 0; i < l; i++) {
                // vars
                const eng_box = engs[i];
                const fre_box = fres[i];

                // fade out in
                eng_box.style.animation = delay + "ms fade-out linear forwards";
                setTimeout(() => {
                    eng_box.style.display = "none";
                    // fade in
                    fre_box.style.display = "";
                    fre_box.style.animation = delay + "ms fade-in linear forwards";
                }, delay);
            }

            // styling
            btn_fre.style.opacity = 1;
            btn_eng.style.opacity = 0.5;
        }

        function init() {
            for (let i = 0; i < l; i++) {
                // vars
                const eng_box = engs[i];
                const fre_box = fres[i];

                eng_box.style.display = "none";
                fre_box.style.display = "none";
            }
        }

        // events
        btn_fre.addEventListener("click", french);
        btn_eng.addEventListener("click", english);

        // starter
        init();
        initial === "eng" ? english() : french();

    }

}
