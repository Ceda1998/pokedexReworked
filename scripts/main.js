//fetch Data:

async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const pokeData = await response.json();
      console.log(pokeData);
    } catch (error) {
      console.error(error.message);
    }
  }