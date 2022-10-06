import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { cleanPokemon, deletePokemon, getPokemon } from "../../redux/actions";
import NavbarDeCre from "../Navbar/NavbarDeCre";
import css from "./Detail.module.css"
import Grid from '@mui/material/Grid';


const Detail=()=>{
    const {id} =useParams();
    const navegate=useNavigate();
    const pokemon=useSelector(state=>state.pokemon)
    const [home,setHome]=useState(false)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getPokemon(id))
    },[])
    const handleDelete=()=>{
        dispatch(deletePokemon(pokemon._id))
        setHome(true);
    }
    useEffect(()=>{
        console.log(pokemon)
    },[pokemon])
    if(home){
        dispatch(cleanPokemon());
        return navegate("/home")
    }else{
    return(
        <div className="detail">
            <NavbarDeCre/>
            <div className={css.body}>
                <div className={css.container}>
                <div className={css.card}>
                    <div className={css.image}>
                    <img src={pokemon.img} alt={pokemon.img} />
                    </div>
                    <div className={css.content}>
                    <Grid container spacing={0}>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Name:</h3>
                                <p>{pokemon.name}</p>
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Types:</h3>
                                <div className={css.types}>
                                    {pokemon.types?.map((type)=>{
                                        return(
                                            <p className={css.type}>{type}</p>
                                        )
                                    })}
                                </div>  
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Health:</h3>
                                <p>{pokemon.vida}</p>
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Attack:</h3>
                                <p>{pokemon.ataque}</p>
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Defending:</h3>
                                <p>{pokemon.defensa}</p>
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Speed:</h3>
                                <p>{pokemon.velocidad}</p>
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Height:</h3>
                                <p>{pokemon.altura}</p>
                            </div>
                        </Grid>
                        <Grid className={css.filtroo} item xs={12} sm={12} md={4}>
                            <div className={css.filtro}>
                                <h3>Weight:</h3>
                                <p>{pokemon.peso}</p>
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                </div>  
                {pokemon.id >=1000?
                <button className={css.delete} onClick={()=>handleDelete()}>Delete</button>
                :null}  
                </div>
            </div>
    </div>
    )
    }
}

export default Detail;