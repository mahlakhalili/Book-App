import React from "react";

import styles from "./SideCard.module.css"

function SideCard({data:{image , title}}){
    return(
        <>
        <h4>FAVORITE :</h4>
        <div className = {styles.card}>
            <img src={`/src/assets/${image}`} alt={title} />
            <p>{title}</p>
        </div>
        </>
    )
}

export default SideCard