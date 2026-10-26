function showDetails(title, description) {

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalDescription").textContent = description;

    document.getElementById("detailsModal").style.display = "flex";

}



function closeDetails() {

    document.getElementById("detailsModal").style.display = "none";

}



window.addEventListener("click", function (event) {

    const modal = document.getElementById("detailsModal");

    if (event.target === modal) {
        closeDetails();
    }

});

