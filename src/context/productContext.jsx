import data from '../data/data.json';
import { createContext, useContext, useEffect, useState } from "react";


const ProductContext = createContext();

const ProductProvider = ({children})=>{
    const [products, setProducts]= useState([]);
    console.log(products)
    useEffect(()=>{
        setProducts(data)
    },[])
    return(
        <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    )
}


export {ProductProvider,ProductContext}