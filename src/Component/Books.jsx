import React, { useState } from "react"


import {books} from "../constants/mockData";
import BookCard from "./BookCard"

function Books(){
    const [liked,setLiked] = useState([])

    const handleLikedList = (book , status) => {
        if(status){
            const newlikedList = liked.filter((i) = i.id != book.id)
            setLiked(newlikedList)
        }
        else{
                setLiked(...liked,book)
            
        }
    }
        
    
    return(
        <>
            <div>
                {books.map((book) => (
                <BookCard 
                key={book.id} 
                data={book} 
                handleLikedList={handleLikedList}
                />
                ))}</div>
            {
                !!liked.length && (<div></div>)
            }
        </>
    )
}

export default Books