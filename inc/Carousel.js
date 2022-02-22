import Helpers from "./Helpers.js";

export default class Carousel extends Helpers {

    static carousel_blocks() {
        // check
        if (!document.querySelector(".js-carousel-blocks")) {
            return;
        }

        // html
        const carousel = document.querySelector(".js-carousel-blocks");
        const blocks = carousel.querySelectorAll(".js-block");
        const slider_container = carousel.querySelector(".js-slider-container");
        const slider = carousel.querySelector(".js-slider");
        const next_btn = carousel.querySelector(".js-next");
        const prev_btn = carousel.querySelector(".js-prev");
        const pagination_btns = carousel.querySelectorAll(".js-pagination-btn");

        // vars
        const delay = 300;
        let can_click = true;
        let blocks_count = blocks.length;
        let unit;
        let index = 1;
        let move;
        let start;

        // functions 

        function get_dimensions() {
            unit = slider_container.clientWidth;
            blocks.forEach(node => node.style.width = unit + "px")
        }

        function check_index() {
            if (index == 0) {
                index = blocks_count - 2;
                slider.style.transition = "";
                scroll();
            }

            if (index == blocks_count - 1) {
                index = 1;
                slider.style.transition = "";
                scroll();
            }

        }

        function check_pagination() {
            for (let i = 0; i < pagination_btns.length; i++) {
                const pagination_btn = pagination_btns[i];
                if (i === index - 1) {
                    pagination_btn.classList.add("t-main");
                    pagination_btn.classList.remove("t-gray");
                }
                else {
                    pagination_btn.classList.add("t-gray");
                    pagination_btn.classList.remove("t-main");
                }

                // event
                pagination_btn.addEventListener("click", function () {
                    index = this.dataset.index;
                    scroll();
                })
            }
        }

        function scroll() {
            slider.style.transform = "translateX(-" + (index * unit) + "px)";
            setTimeout(() => {
                slider.style.transition = "ease-out " + delay + "ms"
            }, 100);
            move = false;
            can_click = false;
            setTimeout(() => {
                check_index();
                check_pagination();
                can_click = true;
            }, delay);

        }

        function next_block() {
            if (can_click) {
                index++;
                scroll();
            }
        }

        function prev_block() {
            if (can_click) {
                index--;
                scroll();
            }
        }

        // events
        next_btn.addEventListener("click", next_block);
        prev_btn.addEventListener("click", prev_block);
        window.addEventListener("resize", get_dimensions);
        slider.addEventListener("mousedown", function (e) {
            move = true;
            start = e.clientX;
        })
        slider.addEventListener("mousemove", function (e) {
            if (move) {
                let end = e.clientX;
                if (start - end > 0) {
                    next_block();
                } else {
                    prev_block();
                }
            }
        });

        // init
        get_dimensions();
        scroll();

    }

    static galery() {
        // check
        if (!document.querySelector(".js-galery")) {
            return;
        }

        // html
        const galery = document.querySelector(".js-galery");
        const main_image = galery.querySelector(".js-main-image");
        const images = galery.querySelectorAll(".js-image");
        const slider_container = galery.querySelector(".js-slider-container");
        const slider = galery.querySelector(".js-slider");
        const left_btn = galery.querySelector(".js-left");
        const right_btn = galery.querySelector(".js-right");
        const next_btn = galery.querySelector(".js-next");
        const prev_btn = galery.querySelector(".js-prev");
        const filter = galery.querySelector(".js-filter");

        // vars
        let images_count = images.length;
        let image_width;
        let slider_container_width;
        let slider_width;
        let limit;
        let position = 0;
        let index = 0;

        // functions 

        function calculate_dimensions() {
            image_width = images[0].clientWidth;
            slider_container_width = slider_container.clientWidth;
            slider_width = slider.clientWidth;
            limit = slider_width - slider_container_width;

            check_slider_size();
        }

        function check_slider_size() {
            if (slider_width <= slider_container_width) {
                right_btn.classList.add("d-none");
                left_btn.classList.add("d-none");
                slider_container.classList.add("d-center");
            } else {
                right_btn.classList.remove("d-none");
                left_btn.classList.remove("d-none");
                slider_container.classList.remove("d-center");
            }
        }

        function scroll_right() {
            calculate_dimensions();
            position = position + image_width > limit ? limit : position + image_width;
            scroll();
        }

        function scroll_left() {
            calculate_dimensions();
            position = position - image_width < 0 ? 0 : position - image_width;
            scroll();
        }

        function scroll() {
            slider.style.transform = "translateX(-" + position + "px)";
        }

        function check_image_src() {
            for (let i = 0; i < images_count; i++) {
                const image = images[i];
                if (image.src === main_image.src) {
                    image.classList.remove("o-inactive");
                } else {
                    image.classList.add("o-inactive");
                }
            }
        }

        function next_image() {
            index = index === images_count - 1 ? 0 : index + 1;
            display_image();
        }

        function prev_image() {
            index = index == 0 ? images_count - 1 : index - 1;
            display_image();
        }

        function display_image() {
            main_image.src = images[index].src;
            check_image_src();
        }

        // events
        right_btn.addEventListener("click", scroll_right);
        left_btn.addEventListener("click", scroll_left);
        next_btn.addEventListener("click", next_image);
        prev_btn.addEventListener("click", prev_image);
        window.addEventListener("resize", calculate_dimensions);
        filter.addEventListener("mouseenter", function () {
            filter.classList.remove("o-hidden")
        });
        filter.addEventListener("mouseleave", function () {
            filter.classList.add("o-hidden")
        });

        // loop events
        for (let i = 0; i < images_count; i++) {
            const image = images[i];
            image.addEventListener("click", function () {
                index = i;
                display_image();
            })
        }

        // init
        display_image();
        calculate_dimensions();

    }

    static presentation() {
        // check
        if (!document.querySelector(".js-presentation")) {
            return;
        }

        // html
        const container = document.querySelector(".js-presentation");
        const pages = container.querySelectorAll(".js-page");

        // vars
        const l = pages.length;
        const animation_delay = 300;

        // functions
        function fix_page_height() {
            const container_height = container.clientHeight;
            for (let i = 0; i < l; i++) {
                pages[i].style.height = container_height + "px";
            }
        }

        function init_display() {
            for (let i = 0; i < l; i++) {
                pages[i].style.display = "none";
            }
        }

        function scroll(i) {
            if (i === l) {
                return;
            }
            else {
                const page = pages[i];

                // fade in
                page.style.display = "block";
                page.style.animation = animation_delay + "ms fade-in linear forwards";

                // reading
                setTimeout(() => {
                    // fade out
                    setTimeout(() => {
                        page.style.animation = animation_delay + "ms fade-out linear forwards";
                        // display none
                        setTimeout(() => {
                            page.style.display = "none";
                            // next page
                            scroll(i + 1);
                        }, animation_delay);
                    }, page.dataset.delay);
                }, animation_delay);
            }
        }

        // starter
        init_display();
        fix_page_height();
        scroll(0);
    }

}