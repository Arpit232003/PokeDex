import axios from "axios";
import { HOME_PAGE_DATA } from "@/lib/consts";


const GET_HOME_PAGE_POKEMON = (randomIndex:Number):string => {
    return `https://pokeapi.co/api/v2/pokemon/${HOME_PAGE_DATA[randomIndex].id}`;
}
export const displayPokemons = async() => {
    const randomPokemon = Math.floor(Math.random() * 3);
    const URL:string = GET_HOME_PAGE_POKEMON(randomPokemon);
    console.log(URL);

    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(err){
        console.log(err);
        return null;
    }
}