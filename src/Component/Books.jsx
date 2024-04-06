import React, { useState } from "react"

import {books} from "../constants/mockData";
import BookCard from "./BookCard"
import SideCard from "./SideCard";

import styles from "./Books.module.css"

function Books(){
    const [liked,setLiked] = useState([])

    const handleLikedList = (book , status) => 
    {
        console.log(liked)
        if(status){
            const newlikedList = liked.filter((i) = i.id != book.id)
            setLiked(newlikedList)
        }
        else{
            setLiked(...liked,book)
            }
            
    }
        
    return(
        
            <div className = {styles.container}>
                <div className = {styles.cards}>
                    <h4>FAVORITE</h4>
                    {books.map((book) => (
                    <BookCard 
                    key={book.id} 
                    data={book} 
                    handleLikedList={handleLikedList}
                    />
                ))}
                </div>
            {
                !! liked.length && (
                <div 
                    className = {styles.favorite}>
                        {liked.map(book => <SideCard 
                            key={book.id} 
                            data={book}/>)}</div>)
            }
            </div>
       
    )
}

export default Books