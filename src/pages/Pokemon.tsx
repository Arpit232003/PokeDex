import MainSidebar from "@/components/Sidebar";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const Pokemon = () => {
    const {id} = useParams();
    return(
        <>
        <div>
            <p>Pokemon {id}</p>
        </div>
        </>
    )
}


export default Pokemon;