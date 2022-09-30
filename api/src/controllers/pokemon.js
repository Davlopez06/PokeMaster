const pokeSchema= require("../models/pokemon.js")

const getPokemons= async (req,res)=>{
    try {
        const {name} = req.query

        if(name){
            const pokemon = await pokeSchema.find({ name: name });
            return res.status(200).json(pokemon)
        }else{
            const pokemons = await pokeSchema.find()
            return res.status(200).json(pokemons)
        }
    }
    catch(error) {
        return res.status(404).json({error:error.message})
    }
}

const getPokemonsDetail = async(req,res) =>{
    try {
        const {id}= req.params;
        if(!id){
            return res.status(404).json({error: "No hay id"})
        }
        const pokemon = await pokeSchema.find({ id: id });
        return res.status(200).json(pokemon)
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

const postPokemons = async(req,res) =>{
    try {
        const {id,name,vida,ataque,defensa,velocidad,altura,peso, img, types}= req.body;
        if(!id || !name ||!vida || !ataque || !defensa ||!velocidad ||!altura ||!peso ||!img ||!types){
            return res.status(404).json({error: "No hay suficientes datos"})
        }

        const pokemon = await pokeSchema({id,name,vida,ataque,defensa,velocidad,altura,peso,img,types});
        const createPokemon = await pokemon.save()

        return res.status(200).json(createPokemon)
        
    } catch (error) {
        return res.status(404).json({error:error})
    }
}

module.exports={
    getPokemons,
    getPokemonsDetail
}