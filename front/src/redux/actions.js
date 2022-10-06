import axios from "axios"
import swal from 'sweetalert';
export const GET_ALL_TYPES="GET_ALL_TYPES"
export const GET_ALL_POKEMONS="GET_ALL_POKEMONS"
export const SET_PAGE="SET_PAGE"
export const SORT="SORT"
export const FILTER="FILTER"
export const SEARCH="SEARCH"
export const GET_POKEMON="GET_POKEMON"
export const ELIMINATE="ELIMINATE"
export const CLEAN="CLEAN"

export const getAllTypes = () => (dispatch) => {
    // Tu código acá
    return axios.get(
      'https://pokemasterapi.onrender.com/types'
      )
      .then(res=>res.data)
      .then(json => {
      dispatch({type: GET_ALL_TYPES, payload: json})
    }
  )
}

export const getAllPokemons=()=>(dispatch)=>{
    return axios.get(
        'https://pokemasterapi.onrender.com/pokemons'
        )
        .then(res=>res.data)
        .then(json => {
        dispatch({type: GET_ALL_POKEMONS, payload: json})
      }
    )
}

export const setPage= (page)=>(dispatch)=>{
    return dispatch({type: SET_PAGE, payload: page})
}

export const sortAlpha=(alpha)=>(dispatch)=>{
    return dispatch({type: SORT, payload: alpha})
}

export const filter=(type)=>(dispatch)=>{
    return dispatch({type: FILTER, payload: type})
}

export const search=(name)=>(dispatch)=>{
  return axios.get(
    `https://pokemasterapi.onrender.com/pokemons?name=${name}`
    )
    .then(res=>res.data)
    .then(json => {
    dispatch({type: SEARCH, payload: json})
  }
)
}

export const getPokemon=(id)=>(dispatch)=>{
  return axios.get(
    `https://pokemasterapi.onrender.com/pokemons/${id}`
    )
    .then(res=>res.data)
    .then(json => {
    dispatch({type: GET_POKEMON, payload: json})
  })
}

export const cleanPokemon=()=>(dispatch)=>{
  console.log("Limpia")
  return dispatch({type: CLEAN, payload: {}})
}

export const deletePokemon=(id)=>(dispatch)=>{
  return axios.delete(
    `https://pokemasterapi.onrender.com/pokemons/${id}`
    )
    .then(()=>{
      swal({
        title: "Deleted",
        text: "You clicked the button!",
        icon: "success",
      });
      window.location.reload(false);
    })
    .then((res)=>{
      dispatch({type: ELIMINATE, payload: res.data})
    })
    .catch((error)=>{
      swal({
        title: "Deleted",
        text: "You clicked the button!",
        icon: "success",
      });
    })

}

export const createPokemon=(data)=>(dispatch)=>{
  console.log(data)
  axios.post(
    `https://pokemasterapi.onrender.com/pokemons`,data
    )
    .then(()=>{
      swal({
        title: "Created",
        text: "You clicked the button!",
        icon: "success",
      });
      window.location.reload(false);
    })
    .catch((error)=>{
      swal({
        title: error,
        text: "You clicked the button!",
        icon: "error",
      });
    })
}
      
    
  