// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const popup = document.createElement("div");

        popup.classList.add("image-popup");

        popup.innerHTML = `
            <span class="close-popup">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(popup);

        const closeButton = popup.querySelector(".close-popup");

        closeButton.addEventListener("click", function() {
            popup.remove();
        });

        popup.addEventListener("click", function(event) {
            if (event.target === popup) {
                popup.remove();
            }
        });

    });

});