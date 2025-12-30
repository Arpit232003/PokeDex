import MainSidebar from "@/components/Sidebar";
import { HeroCard, HeroImage, HeroTitle } from "@/components/ui/HeroCard";
import { Spinner } from "@/components/ui/spinner";
import { displayPokemons } from "@/Services/PokemonService";
import React, { useState, useEffect } from "react";


const Home = () => {
    const [displayPokemon, setDisplayPokemon] = useState<Object | null>(null);
    useEffect(() => {
        displayPokemons().then(res => {
            console.log(res.sprites.other.home.front_default);
            setDisplayPokemon(res);
        });
    }, [])

    return (
        <>
            {
                displayPokemon === null ? <HeroCard>
                    <Spinner className="size-18" />
                </HeroCard>
                    :
                    <HeroCard>
                        <HeroImage>
                            <img src={displayPokemon?.sprites.other.home.front_default} />
                        </HeroImage>
                        <HeroTitle>
                            <p className="ml-4 font-sans font-bold text-4xl capitalize">{displayPokemon?.name}</p>
                            {displayPokemon?.types.map(type => {
                                return <span className="mr-4 text-gray-400">{type.type.name}</span>
                            })}
                        </HeroTitle>
                    </HeroCard>
            }
        </>
    )

}

export default Home;

