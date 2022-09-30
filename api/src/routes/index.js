const { Router } = require('express')
const axios = require('axios');
const router = Router()
const pokeSchema= require("../models/pokemon.js")
const typeSchema= require("../models/types.js")
const {getPokemons, getPokemonsDetail,postPokemons,deletePokemons} = require("../controllers/pokemon.js");
const {getTypes} = require("../controllers/types.js")

router.get("/pokemons", getPokemons )
router.get("/pokemons/:id", getPokemonsDetail)
router.post("/pokemons", postPokemons)
router.delete("/pokemons/:id", deletePokemons )
router.get("/types", getTypes )

module.exports = router 