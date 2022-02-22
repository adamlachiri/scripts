export default class Helpers {

    static check_if_tablet() {
        return window.screen.availWidth < 1024;
    }

    static copy() {
        // var
        const blocks = document.getElementsByClassName("js-copy");

        // loop
        for (let i = 0; i < blocks.length; i++) {
            // vars
            const block = blocks[i];

            // copy the html
            const html_btn = block.getElementsByClassName("js-copy-html-btn")[0];
            const html_content = block.getElementsByClassName("js-copy-html-content")[0];
            const html_textarea = block.getElementsByClassName("js-copy-html-textarea")[0];

            // event
            html_btn.addEventListener("click", function () {
                html_textarea.select();
                document.execCommand("copy");
            })

            // init
            html_textarea.style.position = "absolute";
            html_textarea.style.left = "-100%";
            html_textarea.value = html_content.innerHTML;

            // copy the javascript
            if (block.getElementsByClassName("js-copy-javascript-btn")[0]) {
                // vars
                const js_btn = block.getElementsByClassName("js-copy-javascript-btn")[0];
                const js_textarea = block.getElementsByClassName("js-copy-javascript-content")[0];

                // event
                js_btn.addEventListener("click", function () {
                    js_textarea.select();
                    document.execCommand("copy");
                })

                // init
                js_textarea.style.position = "absolute";
                js_textarea.style.left = "-100%";
            }

        }
    }
}
