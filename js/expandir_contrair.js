const expandButton = document.getElementById('expandButton');
const roundedbtn = document.getElementById('rounded-btn');
const sectionToToggle = document.getElementById('sectionToToggle');

function toggleSection() {
    if (sectionToToggle.classList.contains('max-width')) {
        sectionToToggle.classList.remove('max-width');
        expandButton.innerText = "Contrair";
        roundedbtn.innerText = "-";

    } else {
        sectionToToggle.classList.add('max-width');
        expandButton.innerText = "Expandir";
        roundedbtn.innerText = "+";
    }
}

expandButton.addEventListener('click', toggleSection);
roundedbtn.addEventListener('click', toggleSection);

document.addEventListener("DOMContentLoaded", function () {
    const plusButton = document.querySelector(".rounded-button");

    function togglePlusButton() {
        const rect = expandButton.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
            plusButton.style.display = "block";
        } else {
            plusButton.style.display = "none";
        }
    }

    togglePlusButton();
    window.addEventListener("scroll", togglePlusButton);
});
