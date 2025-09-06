//For JS functions
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('description').textContent = data.description;
    document.getElementById('captionTitle').textContent = data.captionTitle;
    document.getElementById('captionContent').textContent = data.captionContent;
  })
  .catch(error => console.error('Error loading JSON:', error));