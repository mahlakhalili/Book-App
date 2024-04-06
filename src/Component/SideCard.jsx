import React from "react";

import styles from "./SideCard.module.css"

function SideCard({data:{image , title}}){
    return(
        <div className = {styles.card}>
            <img src={`/src/assets/${image}`} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default SideCard