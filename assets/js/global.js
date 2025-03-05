document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const burgerIcon = document.createElement("div");
    burgerIcon.classList.add("burger-icon");
    burgerIcon.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.insertBefore(burgerIcon, header);

    burgerIcon.addEventListener("click", function() {
        header.classList.toggle("header-visible");
    });

    function handleResize() {
        if (window.innerWidth <= 768) {
            header.classList.add("header-hidden");
            document.body.style.paddingTop = "0"; // Remove space previously occupied by the header
        } else {
            header.classList.remove("header-hidden");
            header.classList.remove("header-visible");
            document.body.style.paddingTop = "4rem"; // Add space for the fixed header
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
});
