import React from 'react'


//Components
import Header from "../Custom/Header"
import Products from "../Componentes/Products/Products"


//Styles
import "./StoreHome.styles.css"

const StoreHome = () => {

    
    return (
        <>
            <Header />
            <div className="main-home">
                    
            <Products />
                   
            </div>
        </>
    )
}

export default StoreHome