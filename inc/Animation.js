import Helpers from "./Helpers.js";

export default class Animation extends Helpers {

    static fade_up() {
        // check
        if (!document.querySelector(".js-fade-up")) {
            return;
        }

        // html
        const targets = document.querySelectorAll(".js-fade-up");

        // set rules
        const rules = {
            threshold: 0
        }

        // define observer
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                // select target
                const target = entry.target;

                // functions 
                function animate() {
                    const delay = target.dataset.delay ? target.dataset.delay : 0;
                    setTimeout(() => {
                        target.style.transition = "ease-out 1s";
                        target.style.transform = "translateY(0)";
                        target.style.opacity = "1";
                    }, delay);
                }

                function init() {
                    target.style.transform = "translateY(20%)";
                    target.style.opacity = "0";
                }

                // handle intersection
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(target);
                }

                // starter
                init();

            })
        }, rules);


        // exe
        targets.forEach(function (target) {
            // observe
            observer.observe(target);
        });
    }

    static fade_down() {
        // check
        if (!document.querySelector(".js-fade-down")) {
            return;
        }

        // html
        const targets = document.querySelectorAll(".js-fade-down");

        // set rules
        const rules = {
            threshold: 0
        }

        // define observer
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                // select target
                const target = entry.target;

                // functions 
                function animate() {
                    const delay = target.dataset.delay ? target.dataset.delay : 0;
                    setTimeout(() => {
                        target.style.transition = "ease-out 1s";
                        target.style.transform = "translateY(0)";
                        target.style.opacity = "1";
                    }, delay);
                }

                function init() {
                    target.style.transform = "translateY(-20%)";
                    target.style.opacity = "0";
                }

                // handle intersection
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(target);
                }

                // starter
                init();

            })
        }, rules);


        // exe
        targets.forEach(function (target) {
            // observe
            observer.observe(target);
        });
    }

    static fade_left() {
        // check
        if (!document.querySelector(".js-fade-left")) {
            return;
        }

        // html
        const targets = document.querySelectorAll(".js-fade-left");

        // set rules
        const rules = {
            threshold: 0
        }

        // define observer
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                // select target
                const target = entry.target;

                // functions 
                function animate() {
                    const delay = target.dataset.delay ? target.dataset.delay : 0;
                    setTimeout(() => {
                        target.style.transition = "ease-out 1s";
                        target.style.transform = "translateX(0)";
                        target.style.opacity = "1";
                    }, delay);
                }

                function init() {
                    target.style.transform = "translateX(-50%)";
                    target.style.opacity = "0";
                }

                // handle intersection
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(target);
                }

                // starter
                init();

            })
        }, rules);


        // exe
        targets.forEach(function (target) {
            // observe
            observer.observe(target);
        });

    }

    static fade_right() {
        // check
        if (!document.querySelector(".js-fade-right")) {
            return;
        }

        // html
        const targets = document.querySelectorAll(".js-fade-right");

        // set rules
        const rules = {
            threshold: 0
        }

        // define observer
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                // select target
                const target = entry.target;

                // functions 
                function animate() {
                    const delay = target.dataset.delay ? target.dataset.delay : 0;
                    setTimeout(() => {
                        target.style.transition = "ease-out 1s";
                        target.style.transform = "translateX(0)";
                        target.style.opacity = "1";
                    }, delay);
                }

                function init() {
                    target.style.transform = "translateX(50%)";
                    target.style.opacity = "0";
                }

                // handle intersection
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(target);
                }

                // starter
                init();

            })
        }, rules);


        // exe
        targets.forEach(function (target) {
            // observe
            observer.observe(target);
        });
    }

    static fade_in() {

        // check
        if (!document.querySelector(".js-fade-in")) {
            return;
        }

        // html
        const targets = document.querySelectorAll(".js-fade-in");

        // set rules
        const rules = {
            threshold: 0
        }

        // define observer
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                // select target
                const target = entry.target;

                // functions 
                function animate() {
                    const delay = target.dataset.delay ? target.dataset.delay : 0;
                    setTimeout(() => {
                        target.style.transition = "ease-out 1s";
                        target.style.opacity = "1";
                    }, delay);
                }

                function init() {
                    target.style.opacity = "0";
                }

                // handle intersection
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(target);
                }

                // starter
                init();

            })
        }, rules);


        // exe
        targets.forEach(function (target) {
            // observe
            observer.observe(target);
        });
    }

    // exe
    static exe() {
        if (this.check_if_tablet()) {
            return;
        }
        this.fade_in();
        this.fade_up();
        this.fade_down();
        this.fade_left();
        this.fade_right();
    }

}