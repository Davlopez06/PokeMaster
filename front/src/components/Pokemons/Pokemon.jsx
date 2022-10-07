import React from "react";
import css from "./Pokemon.module.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Pokemon=(props)=>{
    return(
        <Link className={css.decoration} to={`/detail/${props.id}`}>
        <Card className={css.card}>
            <div className={css.ima}>
            <CardMedia
                component="img"
                image={props.image}
                alt={props.image}
                className={css.img}
            />
             </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.name}
                </Typography>
                <Typography className={css.types} variant="body2" color="text.secondary">
                    {props.types?.map((type)=>{
                        return(
                            <p className={css.type}>{type}</p>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
        </Link>
    )
}

export default Pokemon;