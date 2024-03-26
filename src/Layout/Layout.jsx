import React  from "react"

import styles from "./Layout.module.css"

function Layout({children}){
    return(
       <>
        <header className = {styles.header}>
            <h1>Book App</h1>
            <p>React Project</p>
        </header>
        {children}
        <footer className = {styles.footer}>Developed By M.KH</footer>
       </>
    )
}

export default Layout