import React from "react";

import { RiSearch2Line } from "react-icons/ri";
import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch , searchHandler}){
    return(
        <div className = {styles.search}>
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