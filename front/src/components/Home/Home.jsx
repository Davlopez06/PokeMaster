import React from "react";
import Navbar from "../Navbar/Navbar";
import css from "./Home.module.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Filter from "../Filter/Filter";
import Pokemons from "../Pokemons/Pokemons";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/actions";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home=()=>{
    const dispatch=useDispatch()
    const pokemons=useSelector(state=>state.pokemons)
    const [page, setPages] = React.useState(1);
    const paginate=useSelector(state=>state.pages)
    const handleChange = (event, value) => {
      setPages(value);
      console.log(value)
    };
    useEffect(()=>{
        dispatch(setPage(page))
    },[page])
    useEffect(()=>{
        dispatch(setPage(1))
    },[])
    return(
        <div className={css.home}>
            <Navbar/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={3}>
                        <div className={css.filtro}>
                            <Filter/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={9}>
                        <Pokemons/>
                        {paginate ===1? null :pokemons.length!==0 ?
                        <Stack spacing={2} className={css.pagina}>
                            <Pagination count={paginate} page={page} onChange={handleChange} className={css.paginate}/>
                        </Stack>
                        : null}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Home;