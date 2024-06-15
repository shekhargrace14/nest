// create useContext
// RouterProvider
// consumer

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API = "./src/data/data.json"
// const API = "https://api.pujakaitem.com/api/products";


const initialState={
    inLoading : false,
    isError: false,
    products : [],
    singleProduct:{}

}

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);


    const getProduct=async(url)=>{
        dispatch({type:"SET_LOADING"})            
        try{
            const res =await axios.get(url);
            const products = await res.data
            dispatch({type: "SET_API_DATA", payload:products});
            // console.log(products)
        }catch(error){
            dispatch({type:"API_ERROR"})            
        }
    }

    const singleProductAPI = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try{
            const res = await axios.get(url)
            const singleProduct = await res.data
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
        }
        catch(error){
            dispatch({type:"API_ERROR"})
        }
    }


    useEffect(()=>{
        getProduct(API)
    },[])
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const useProductContext = ()=>{
    return useContext(AppContext)
}

export {AppProvider,useProductContext }