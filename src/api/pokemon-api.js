class PokeApi{

    constructor(){
        this.number = Math.floor(Math.random()* (200 -0),0);
        this.data = new Object();
        this.pokeName= '';
    }

    async getPokemonAsync(id){
        const endpoint = new URL( `https://pokeapi.co/api/v2/pokemon/${id}`);
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (response.status == 400) {
            console.log(('Bad Request'));
            return;
        }
        if (response.status === 404) {
            console.log(('Id not found'));
            return;
        }
        if (response.status ===200) {
            // this.data = data;
            // this.pokeName = data.name;
            return data;
            
        }
    };
    
    fetchAllPokemon(){
        for (let index = 1; index < 201; index++) {
            this.getPokemonAsync(index)
        };
        
    };

    // fetchRandomPokemonId(){
    //     this.getPokemonAsync(this.number);
    // }
   

}

export {PokeApi}