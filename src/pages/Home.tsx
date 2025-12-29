import MainSidebar from "@/components/Sidebar";
import { displayPokemons } from "@/Services/PokemonService";
import React, { useState, useEffect } from "react";


const Home = () => {
    useEffect(() => {
        displayPokemons().then(res => console.log(res));
    }, [])

    return (
        <>
        </>
    )

}

export default Home;

