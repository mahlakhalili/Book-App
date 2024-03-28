import {books} from "../constants/mockData";
import BookCard from "./BookCard"


import React from "react"

function Books(){
    return(
        <>
            <div>
                {books.map((book) => (
                <BookCard key={book.id} data={book} />
                ))}</div>
            <div></div>
        </>
    )
}

export default Books