import React from "react";

import { RiSearch2Line } from "react-icons/ri";

function SearchBox({search , setSearch , searchHandler}){
    return(
        <div>
            <input 
                type = "text" 
                placeholder = "Search"
                value = {search}
                onChange={e => setSearch(e.target.value.toLowerCase())}
                onClick={searchHandler}
                />
            <button><RiSearch2Line /></button>
        </div>
    )
}

export default SearchBox