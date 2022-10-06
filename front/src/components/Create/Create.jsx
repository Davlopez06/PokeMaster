import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createPokemon, getAllTypes } from "../../redux/actions";
import NavbarDeCre from "../Navbar/NavbarDeCre";
import css from "./Create.module.css"
import imagee from "../../img/pokeball.png"
import swal from 'sweetalert';

const Create=()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const [input, setInput] = useState({
        name: "",
        vida: 0,
        ataque: 0,
        defensa: 0,
        velocidad: 0,
        altura: 0,
        peso: 0,
        img: "",
        types: []
    })

    useEffect(() => {       
        dispatch(getAllTypes())
    }, [dispatch])
    // console.log(genres)
    
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    function handleChangeType(e) {
        if(e.target.value !== "Select...") {
            if(!input.types.includes(e.target.value)) {
                setInput({
                    ...input,
                    types: [...input.types, e.target.value]
                })
            }
            console.log(input)
        }
    }

    function handleDeleteType(option) {
        setInput({
            ...input,
            types: input.types.filter(g => g !== option)
        })
        console.log(input)
    }


    function handleSubmit(e) {
        console.log("Entra")
        console.log(input)
        if(!input.name || !input.vida || !input.ataque || !input.defensa || !input.velocidad || !input.altura || !input.peso || ! input.types.length) {
            e.preventDefault()
            swal({
                icon: "error",
                title: "Ohhh!",
                text: "Plis check and complete all fields",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0b132b"
            });
            console.log("error")
        } 
        else {
            e.preventDefault()
            console.log(input)
            dispatch(createPokemon({
                name: input.name,
                vida: input.vida,
                ataque: input.ataque,
                defensa: input.defensa,
                velocidad: input.velocidad,
                altura: input.altura,
                peso: input.peso,
                img: imagee,
                types: input.types,
            }))
            swal({
                icon: "success",
                title: "Success",
                text: "Successfully created pokemon",
                confirmButtonText: "Ok",
                confirmButtonColor: "#0b132b"
            });
            setInput({
                name: "",
                vida: 0,
                ataque: 0,
                defensa: 0,
                velocidad: 0,
                altura: 0,
                peso: 0,
                img: "",
                types: []
            })
            dispatch(getAllTypes())
        }
    }
    return(
        <div className={css.create}>
            <NavbarDeCre/>
            <div className={css.create}>
            <div className={css.all}>
                    <form onSubmit={(e) => handleSubmit(e)} className={css.form}>
                        <h3>New Pokemon</h3>
                        <div className={css.containerInputs}>
                            <div>
                                <label>*Name: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's name"
                                    type="text" 
                                    value={input.name}
                                    name="name"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div className={css.order}>
                                <label> Health: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's health"
                                    type="text" 
                                    value={input.vida}
                                    name="vida"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Attack: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's Attack"
                                    type="text" 
                                    value={input.ataque}
                                    name="ataque"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div className={css.order}>
                                <label> Defending: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's Defending"
                                    type="text" 
                                    value={input.defensa}
                                    name="defensa"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div className={css.order}>
                                <label>Speed: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's Speed"
                                    type="text" 
                                    value={input.velocidad}
                                    name="velocidad"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div className={css.order}>
                                <label>Height: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's height"
                                    type="text" 
                                    value={input.altura}
                                    name="altura"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Weight: </label>
                                <input 
                                    className={css.input}
                                    placeholder="Pokemon's weight"
                                    type="text" 
                                    value={input.peso}
                                    name="peso"
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                            </div>
                            <div className={css.order}>
                                <label>Types: </label>
                                <select onChange={(e) => handleChangeType(e)} name="genres" className={css.select}>
                                    <option selected>Select...</option>
                                    {
                                        types?.map(g => {
                                            return(
                                                <option  value={g.name} key={g.name} className={css.option}>{g.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className={css.cast}>
                                    {
                                        input.types?.map(type => {
                                            return(
                                                <p onClick={() => handleDeleteType(type)} className={css.p}>{type}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <input className={css.btn} type={"submit"} value={"Create"}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;