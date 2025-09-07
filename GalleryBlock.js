// Load data from json file
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;
    document.getElementById('captionTitle').textContent = data.captionTitle;
    document.getElementById('captionContent').textContent = data.captionContent;

    // Load images src
    document.querySelectorAll('.thumbnail').forEach((img, index) => {
        img.src = `./assets/${data.gelleryImageInfo[index].src}`;
        img.alt = data.gelleryImageInfo[index].alt;
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