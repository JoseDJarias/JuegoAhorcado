class PokeApi{

    constructor(){
        // delimitar el random a que comienze desde 1 hsta el 200;
        this.number = Math.floor(Math.random()* (200 -0));
        this.data = new Object();
        this.pokeName= '';
    }

    async getPokemonAsync(id){
        const endpoint = new URL( `https://pokeapi.co/api/v2/pokemon/${id}`);
        try {
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              
            const data = await response.json();
            return data;

        } catch (error) {
            console.error(error);
        }
       
    };
    
    fetchAllPokemon(){
        for (let index = 1; index < 201; index++) {
            this.getPokemonAsync(index)
        };
        
    };

}

export {PokeApi}