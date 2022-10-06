import React, {useState} from "react";
import css from "./LangingPage.module.css"
import Loading from "../Loading/Loading";

export default function LandingPage(){
    const [redirect,setRedirect]=useState(false)

    const handleOnClick=()=>{
        setRedirect(true)
        console.log("Entra")
    }

    if(redirect){
        return <Loading/>
    }else{
        return(
            <div className={css.fondo} onClick={handleOnClick}>
                <h1 className={css.title}>PokeMaster</h1>
                <button className={css.btn} onClick={handleOnClick}><h1 onClick={handleOnClick}>Go</h1></button>  
            </div>
        )
    }
}