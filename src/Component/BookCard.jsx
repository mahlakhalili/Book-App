import React from "react"
function BookCard({data : {title , author , image , country ,language , link , pages , year}}){
    return(
        <div>
            <img src={`/src/assets/${image}`} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span> {pages} pages</span>
                </div>
            </div>
            <button>Like</button>
        </div>
    )
}

export default BookCard