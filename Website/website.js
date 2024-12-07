function changeButtonText(buttonId) {
    let button = InteriorButton.getElementById(buttonId);
    if (button.innerText === "FURNITURE") {
        button.innerText = "EXPLORE FURNITURE";
    } else if (button.innerText === "KITCHEN") {
        button.innerText = "EXPLORE KITCHEN";
    }
}

const hoverOver = {
    "furniture": "Explore a wide range of furniture to match your style. From modern to vintage, we have it all.",
    "kitchen": "Discover our latest kitchen designs and accessories. Customize your dream kitchen with us."
};