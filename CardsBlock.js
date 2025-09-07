// Load data from json file
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
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