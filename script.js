// Load data from json file
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Load Gallery Block data
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;
    document.getElementById('captionTitle').textContent = data.captionTitle;
    document.getElementById('captionContent').textContent = data.captionContent;

    // Load Gallery Block images
    document.querySelectorAll('.thumbnail').forEach((img, index) => {
        img.src = `./assets/${data.gelleryImageInfo[index].src}`;
        img.alt = data.gelleryImageInfo[index].alt;
    });

    // Load Cards Block Data
    document.getElementById("card-title").textContent = data.cardTitle;
    document.querySelectorAll('.card-image').forEach((img, index) => {
        img.src = `./assets/${data.cardsImageInfo[index].src}`;
        img.alt = data.gelleryImageInfo[index].alt;
    });
    document.querySelectorAll('.card-name').forEach((title, index) => {
        title.textContent = data.cardsImageInfo[index].title;
    });
    document.querySelectorAll('.card-description').forEach((description, index) => {
        description.textContent = data.cardsImageInfo[index].description;
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

// Image Modal functions
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src.replace("thumb", "large"); // optional logic
        caption.textContent = img.alt;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Card Block Click Events
const cards = document.querySelectorAll('.card-column');
const cardNames = document.querySelectorAll('.card-name');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    console.log(`${cardNames[index].textContent} Card is clicked`);
  });
});