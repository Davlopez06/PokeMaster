const { Router } = require('express')
const axios = require('axios');
const router = Router()
const pokeSchema= require("../models/pokemon.js")
const typeSchema= require("../models/types.js")
const {getPokemons, getPokemonsDetail} = require("../controllers/pokemon.js");

router.get("/pokemons", getPokemons )
router.get("/pokemons/:id", getPokemonsDetail)
router.post("/pokemons", getPokemonsDetail)

module.exports = router 