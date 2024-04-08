import React, { useState } from "react"

import {books as bookData} from "../constants/mockData";
import BookCard from "./BookCard"
import SideCard from "./SideCard";
import styles from "./Books.module.css"
import SearchBox from "./SearchBox";

function Books(){
    const [liked , setLiked] = useState([])
    const [search , setSearch] = useState([])
    const [books , setBooks] = useState([bookData])

    const handleLikedList = (book , status) => 
    {
        console.log(liked)
        if(status){
            const newlikedList = liked.filter((i) => i.id != book.id)
            setLiked(newlikedList)
        }
        else{
            setLiked([...liked,book])
            }
            
    }

    const SerarchHandler = () => {
        if(search){
            const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search))
            setBooks(newBooks)
        }

        else{
                setBooks(bookData)
        }
    }
        
    return(
            <>
            <SearchBox search = {search}  setSearch = {setSearch} SerarchHandler = {SerarchHandler}/> 
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
            </>
       
    )
}

export default Books