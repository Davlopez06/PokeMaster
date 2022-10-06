import React from "react";
import css from "./Filter.module.css"
import { useDispatch, useSelector } from "react-redux";
import { filter, getAllTypes } from "../../redux/actions";
import { useEffect } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { sortAlpha } from "../../redux/actions";


const Filter=()=>{
    const dispatch = useDispatch();
  const allTypes= useSelector(state => state.types)
  useEffect(()=>{
    dispatch(getAllTypes());
  },[dispatch]);
  // console.log(allGenres)

  const handleAscAlpha = (type) => {
    // dispatch(sortRatings(type));
    // setPag(1)
    console.log(type)
    dispatch(sortAlpha(type))
  };

  const handleDesAlpha = (type) => {
    // dispatch(sortRatings(type));
    // setPag(1)
    console.log(type)
    dispatch(sortAlpha(type))
  };

  const handleCreate = (type) => {
    // dispatch(sortYears(type));
    // setPag(1)
    console.log(type)
  };

  const handleApi = (type) => {
    // dispatch(sortYears(type));
    // setPag(1)
    console.log(type)
  };
  const handleType = (e) => {
    // dispatch(filterGenre(e.target.innerText))
    // // console.log(e.target.innerText);
    // setPag(1)
    console.log(e)
    dispatch(filter(e))
  };
    return(
        <div className={css.content}>
            <List className={css.rating}
                sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader" className={css.red}>
                    Order by Alphanumeric
                </ListSubheader>
                }
            >
                <ListItemButton className={css.redH} onClick={() => handleAscAlpha("A-Z")}>
                <ListItemText primary={<p>A-Z</p>  } />
                </ListItemButton>
                <ListItemButton className={css.redH} onClick={() => handleDesAlpha("Z-A")}>
                 <ListItemText primary={<p>Z-A</p>  }/>
                </ListItemButton>
            </List>


        <List className={css.year}
        sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
        <ListSubheader component="div" id="nested-list-subheader" className={css.red}>
              Order by Create
        </ListSubheader>
        }
        >
        <ListItemButton className={css.redH} onClick={()=>handleCreate("Create")}>
         <ListItemText primary= " Create "  />
        </ListItemButton>
        <ListItemButton className={css.redH} onClick={()=>handleApi("Api")}>
          <ListItemText primary= " Api "/>
        </ListItemButton>
        </List>

        <List className={css.year}
        sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
        <ListSubheader component="div" id="nested-list-subheader" className={css.red}>
         Order by Types
        </ListSubheader>
        }>
            <ListItemButton className={css.redH} onClick={()=>handleType("All")}>
            <ListItemText primary={"All"}  />
            </ListItemButton>
        {
            allTypes?
            allTypes.map(type=>{

            return (<ListItemButton className={css.redH} onClick={()=>handleType(type.name)}>
            <ListItemText primary={type.name}  />
            </ListItemButton>)

            }):
            <p>loading...</p>
        }
        </List>
        </div>
    )
}

export default Filter;