function copyFontFamily(font) {
    navigator.clipboard.writeText(font).then(() => {
        alert(`Copied: ${font}`);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}



window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");
    loading.querySelector(".loading").classList.add(".loading--hidden");
    loading.querySelector(".loading").classList.add("transitioned", () => {
        document.body.removeChild(document.querySelector(".loading"));
    });
    
});
