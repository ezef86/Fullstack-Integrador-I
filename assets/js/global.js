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
					document.body.style.paddingTop = "0"; // Remueve el espacio que anteriormente ocupaba el encabezado
				} else {
					header.classList.remove("header-hidden");
					header.classList.remove("header-visible");
					document.body.style.paddingTop = "4rem"; // Añade espacio para el encabezado fijo
				}
    }

    window.addEventListener("resize", handleResize);
    handleResize();
});
