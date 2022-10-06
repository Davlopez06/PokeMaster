import React, { useEffect, useState } from "react";
import css from "./Loading.module.css"
import img from "../../img/loading.gif"
import { useNavigate } from "react-router-dom";


export default function Loading(){
    const [loadin,setLoading]=useState(false)
    let navegate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        },3000)
    })
    if(loadin){
        return navegate("/home")
    }else{
        return(
            <div className={css.container}>
                <div className={css.image}>
                    <img className={css.ima} src={img} alt={img} />
                </div>
            </div>
        
        )
    }
}