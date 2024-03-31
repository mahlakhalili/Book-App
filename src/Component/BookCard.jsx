import React, { useState } from "react"
import { GoHeartFill } from "react-icons/go";

import styles from "./BookCard.module.css"

function BookCard({data  ,handleLikedList}){
    const  {title , author , image , country ,language , link , pages , year} = data
    const [like,setLike] = useState(false)

    const likeHandler = () => { 
        handleLikedList(data , like)
        setLike(like => !like)  
    }


    return(
        <div className={styles.card}>
            <img src={`/src/assets/${image}`} alt={title} />
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span> {pages} pages</span>
                </div>
            </div>
            <button onClick={likeHandler}><GoHeartFill color = {like ? "red " : "#e0e0e0"} font-size="1.8rem" /></button>
        </div>
    )
}

export default BookCard