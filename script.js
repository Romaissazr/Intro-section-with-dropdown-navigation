function toggleDropdown(dropdownId, arrowId) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(arrowId);
    
    // Toggle display of dropdown
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
        arrow.src = "images/icon-arrow-down.svg"; // Change to down arrow
    } else {
        dropdown.style.display = 'block';
        arrow.src = "images/icon-arrow-up.svg"; // Change to up arrow
    }
}

function toggleFeatures(event) {
    event.stopPropagation();
    toggleDropdown('features', 'downF'); // Include the arrow ID
}

function toggleCompany(event) {
    event.stopPropagation();
    toggleDropdown('company', 'downC'); // Include the arrow ID
}

function toggleFeaturesM(event) {
    event.stopPropagation();
    toggleDropdown('featuresm', 'downFm'); // Include the arrow ID
}

function toggleCompanyM(event) {
    event.stopPropagation();
    toggleDropdown('companym', 'downCm'); // Include the arrow ID
}

const div = document.getElementById("aside");
function moveDiv() {
    div.classList.add("move-right");
}

function moveDivBack() {
    div.classList.remove("move-right");
}

window.onclick = function(event) {
    if (!event.target.closest('nav')) {
        const dropdowns = document.querySelectorAll('.features, .company, #featuresm, #companym');
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
        // Reset all arrow images to down
        document.getElementById('downF').src = "images/icon-arrow-down.svg";
        document.getElementById('downC').src = "images/icon-arrow-down.svg";
        document.getElementById('downFm').src = "images/icon-arrow-down.svg";
        document.getElementById('downCm').src = "images/icon-arrow-down.svg";
    }
}
