import {CLEAN, ELIMINATE, FILTER, GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON, SEARCH, SET_PAGE, SORT} from "./actions"

const initialState = {
    allPokemons: [],
    auxPokemons:[],
    pokemons:[],
    types:[],
    pokemon:{},
    pages: 0
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Acá va tu código
        case GET_ALL_TYPES:
            console.log(action.payload)
            return{
                ...state,
                types: action.payload
            }
        case GET_ALL_POKEMONS:
            console.log(action.payload)
            let paginate=0;
            let pokemonsIni=[];
            if(action.payload.length % 9===0){
                paginate=action.payload.length/9
            }else{
                paginate=Math.floor(action.payload.length/9)+1
            }
            for (let i = 0; i < 9; i++) {
                if(action.payload[i]){
                    pokemonsIni.push(action.payload[i])
                }
            }
            return{
                ...state,
                allPokemons: action.payload,
                auxPokemons: action.payload,
                pokemons:pokemonsIni,
                pages: paginate
            }
        case SET_PAGE:
            console.log(action.payload)
            let inicio=0;
            let pokemonsInitial=[];
            for (let i = ((action.payload-1)*9); i < (action.payload*9); i++) {
                if(state.auxPokemons[i]){
                    pokemonsInitial.push(state.auxPokemons[i])
                }
            }
            return{
                ...state,
                pokemons:pokemonsInitial
            }
        case SORT:
            console.log(action.payload)
            let sortPokemons=[];
            let pokemonsIniti=[];
            let pag=0;
            if(action.payload==="A-Z"){
                sortPokemons=state.auxPokemons.sort(function(a, b){
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
                    return 0;
                })
            }else{
                sortPokemons=state.auxPokemons.sort(function(a, b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
                    if(a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
                    return 0;
                })
            }
            for (let i = 0; i < 9; i++) {
                if(sortPokemons[i]){
                    pokemonsIniti.push(sortPokemons[i])
                }
            }
            if(sortPokemons.length % 9===0){
                pag=sortPokemons.length/9
            }else{
                pag=Math.floor(sortPokemons.length/9)+1
            }
            return{
                ...state,
                pokemons:pokemonsIniti,
                allPokemons: sortPokemons,
                pages: pag
            }
        case FILTER:
            console.log(action.payload)
            let pokemonsFilter=[]
            let pokemonsInitia=[];
            let pagina=0;
            if(action.payload==="All"){
               pokemonsFilter=state.auxPokemons
            }else{
                for(let i=0;i<state.auxPokemons.length;i++){
                    console.log(state.auxPokemons[i])
                    for(let j=0;j<state.auxPokemons[i].types.length;j++){
                        if(state.auxPokemons[i].types[j]===action.payload){
                            pokemonsFilter.push(state.auxPokemons[i])
                        }
                    }
                  }
            }
            for (let i = 0; i < 9; i++) {
                if(pokemonsFilter[i]){
                    pokemonsInitia.push(pokemonsFilter[i])
                }
            }
            if(state.auxPokemons.length % 9===0){
                pagina=pokemonsFilter.length/9
            }else{
                pagina=Math.floor(pokemonsFilter.length/9)+1
            }
            return{
                ...state,
                pokemons:pokemonsInitia,
                allPokemons: pokemonsFilter,
                pages: pagina
            }
        case SEARCH:
            console.log(action.payload)
            let pokemonsInitiaa=[];
            let pagin=0;
            for (let i = 0; i < 9; i++) {
                if(action.payload[i]){
                    pokemonsInitiaa.push(action.payload[i])
                }
            }
            if(action.payload.length % 9===0){
                pagin=action.payload.length/9
            }else{
                pagin=Math.floor(action.payload.length/9)+1
            }
            return{
                ...state,
                pokemons:pokemonsInitiaa,
                allPokemons: action.payload,
                pages: pagin
            }
        case GET_POKEMON:
            console.log(action.payload)
            return{
                ...state,
                pokemon: action.payload[0]
            }
        case CLEAN:
            return{
                ...state,
                pokemon: action.payload
            }
        case ELIMINATE:
            let pokes= state.allPokemons.filter(pokemon=> pokemon._id !== action.payload);
            let pokemonsIn=[];
            let pa=0;
            for (let i = 0; i < 9; i++) {
                if(pokes[i]){
                    pokemonsIn.push(pokes[i])
                }
            }
            if(pokes.length % 9===0){
                pa=pokes.length/9
            }else{
                pa=Math.floor(pokes.length/9)+1
            }
            return{
                ...state,
                pokemons:pokemonsIn,
                allPokemons: pokes,
                pages: pa
            }
        default: return state
    }
  };
  
  export default rootReducer;