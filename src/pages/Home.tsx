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
                    // Ref for designs: https://dribbble.com/shots/6175056-Pok-dex
                    //ref FIGMA : https://www.figma.com/community/file/1408359114495724061/pokedex-a-pokedex-website-design
                    //yet another ref: https://medium.com/@Skaoi/designing-a-pok%C3%A9mon-application-wireframes-ui-and-prototype-9cc6ec4de477
                    //sublte animated card : https://www.pinterest.com/pin/24488391720204295/
            }
        </>
    )

}

export default Home;

