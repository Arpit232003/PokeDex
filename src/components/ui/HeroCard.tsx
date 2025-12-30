"use client"

import React from 'react';

const styles = {
    heroImageContainer:{
        overflow:"hidden",
        width:"250px",
        border:"2px solid black"
    },
    haroCardContainer:{
        display:"flex",
        gap:"4",
        alignItems:"center",
        border:"2px solid yellow"
    }
}


const HeroImage = ({children}:{children:React.ReactNode}) => {
    return(
    <div className="heroimagecontainer" style={styles.heroImageContainer}>
        {children}
    </div>
    );
}

const HeroTitle = ({children}:{children:React.ReactNode}) => {
    return(
    <div className="herotitlecontainer">
        {children}
    </div>
    );
}

const HeroCard = ({children}:{children : React.ReactNode}) => {
    return(
    <div className="herocardcontainer" style={styles.haroCardContainer}>
        {children}
    </div>
    );
}

export { HeroCard,HeroImage,HeroTitle};