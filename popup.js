function getRandomCatFact() {
  fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.json())
    .then(data => {
      const randomCat = data[Math.floor(Math.random() * data.length)];
      const catNameElement = document.getElementById('catName');
      const catImageElement = document.getElementById('catImage');
      const weightElement = document.getElementById('weight');
      const idElement = document.getElementById('id');
      const temperamentElement = document.getElementById('temperament');
      const originElement = document.getElementById('origin');
      const countryCodesElement = document.getElementById('countryCodes');
      const descriptionElement = document.getElementById('description');
      const lifeSpanElement = document.getElementById('lifeSpan');

      catNameElement.textContent = randomCat.name;
      weightElement.textContent = 'Weight: ' + randomCat.weight.imperial + ' (imperial) / ' + randomCat.weight.metric + ' (metric)';
      idElement.textContent = 'ID: ' + randomCat.id;
      temperamentElement.textContent = 'Temperament: ' + randomCat.temperament;
      originElement.textContent = 'Origin: ' + randomCat.origin;
      countryCodesElement.textContent = 'Country Codes: ' + randomCat.country_codes;
      descriptionElement.textContent = 'Description: ' + randomCat.description;
      lifeSpanElement.textContent = 'Life Span: ' + randomCat.life_span;

      fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + randomCat.id)
        .then(response => response.json())
        .then(data => {
          const imageUrl = data[0].url;
          catImageElement.src = imageUrl;
        })
        .catch(error => {
          console.log('Failed to fetch cat image:', error);
        });
    })
    .catch(error => {
      console.log('Failed to fetch cat breeds:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  const randomButton = document.getElementById('randomButton');
  randomButton.addEventListener('click', getRandomCatFact);
});
