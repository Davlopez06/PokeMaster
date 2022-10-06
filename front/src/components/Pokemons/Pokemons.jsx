import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Pokemons.module.css"
import { getAllPokemons } from "../../redux/actions";
import Pokemon from "./Pokemon";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { setPage } from "../../redux/actions";

const Pokemons =()=>{
    const pokemons=useSelector(state=>state.pokemons)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllPokemons())
        dispatch(setPage(1))
    },[])
    if(pokemons.length===0){
        return(
            <div className={css.nofound}>
                <h2 className={css.message}>No found</h2>
            </div>
        )
    }else if(pokemons){
        return(
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>                  
                        {pokemons?.map((pokemon)=>{
                            return(
                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                    <Pokemon
                                    id={pokemon._id}
                                    name={pokemon.name}
                                    image={pokemon.img}
                                    types={pokemon.types}
                                    />
                                </Grid>
                            )
                        })}  
                </Grid>
                </Box>
        )
    }else{
        return(
            <div className={css.nofound}>
                <h2 className={css.message}> No found</h2>
            </div>
        )
    }
}

export default Pokemons;