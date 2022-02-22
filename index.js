const scripts = [
    {
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
        type: "module"
    },
    {
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
        type: "nomodule"
    },
]

scripts.forEach(script => {
    let element = document.createElement("script");
    element.type = script.type;
    element.src = script.src;
    document.body.appendChild(element);
});
