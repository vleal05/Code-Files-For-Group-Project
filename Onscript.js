let username = "Username";
let password = "12345";
if (username === "Username" && password === "12345") {
console.log("Access granted.");
} else {
console.log("Access denied.");
}
let photos = [];
let filteredPhotos = [];
const photoInput = document.getElementById('photo-input');
const photoGrid = document.getElementById('photo-grid');
const addPhotosButton = document.getElementById('add-photos');
const filterLandscapeButton = document.getElementById('filter-landscape');
const showAllButton = document.getElementById('show-all');
function displayPhotos(photoArray) {
photoGrid.innerHTML = '';
photoArray.forEach((photoSrc) => {
let img = document.createElement('img');
img.src = photoSrc;
img.className = 'photo';
photoGrid.appendChild(img);
});
}
addPhotosButton.addEventListener('click', () => {
const files = photoInput.files;
if (files.length === 0) {
alert('Please select photos to add!');
} else {
for (let file of files) {
const reader = new FileReader();
reader.onload = (e) => {
photos.push(e.target.result);
displayPhotos(photos);
};
reader.readAsDataURL(file);
}
}
});
filterLandscapeButton.addEventListener('click', () => {
filteredPhotos = photos.filter(photoSrc => {
let img = new Image();
img.src = photoSrc;
return img.width > img.height;
});
if (filteredPhotos.length === 0) {
alert('No landscape photos found!');
} else {
displayPhotos(filteredPhotos);
}
});
showAllButton.addEventListener('click', () => {
displayPhotos(photos);
});