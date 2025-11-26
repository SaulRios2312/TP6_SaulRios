function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// SISTEMA DE LIKES (localStorage)
function darLike(id) {
    let actual = parseInt(localStorage.getItem(id) || "0");
    actual++;
    localStorage.setItem(id, actual);
    document.getElementById(id).textContent = actual;
}

window.onload = () => {
    document.querySelectorAll(".contador").forEach(elem => {
        let id = elem.id;
        elem.textContent = localStorage.getItem(id) || "0";
    });
};
