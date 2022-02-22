import Helpers from "./Helpers.js";

export default class Image extends Helpers {

    static zoom() {
        // check
        if (!document.getElementsByClassName("js-zoom-open")[0]) {
            return;
        }

        // html
        const zoom_opens = document.getElementsByClassName("js-zoom-open");
        const zoom_box = document.getElementsByClassName("js-zoom-box")[0];
        const zoom_close = document.getElementsByClassName("js-zoom-close")[0];
        const zoom_image = document.getElementsByClassName("js-zoom-image")[0];

        // loop
        for (let i = 0; i < zoom_opens.length; i++) {
            // html
            const zoom_open = zoom_opens[i];

            // events
            zoom_open.addEventListener("click", function () {
                zoom_image.src = zoom_open.src;
                zoom_box.style.display = "";
            })

            zoom_close.addEventListener("click", function () {
                zoom_box.style.display = "none";
            })
        }

        // init
        zoom_box.style.display = "none";
    }


}
