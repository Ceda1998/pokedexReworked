//fetch Data:
let pokeSprite;
let pokeName;
let pokeType;
let pokeWeight;


async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const pokeData = await response.json();
      console.log(pokeData);
      pokeSprite = pokeData.sprites.front_shiny;
      pokeName = pokeData.species.name;
      pokeWeight = pokeData.weight;
      pokeType = pokeData.types[0].type.name;
    } catch (error) {
      console.error(error.message);
    }
    changeImg();
    changeName();
    changeWeight();
    changeType();
  }

  function changeImg() {
    let picture = document.getElementById('pokeSprite');
    picture.src = pokeSprite; 
}

  function changeDescription() {

  }

  function changeWeight() {
    let pokeWeightText = document.getElementById('pokeWeight');
    pokeWeightText.innerHTML = pokeWeight + 'kg';
  }

  function changeType() {
    let pokeTypetText = document.getElementById('pokeType');
    pokeTypetText.innerHTML = pokeType;
  }

  function changeName() {
    let pokeNameText = document.getElementById('pokeName');
    console.log(pokeNameText);
    pokeNameText.innerHTML = pokeName;
  }

