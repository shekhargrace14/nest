import React, { useEffect, useState } from 'react'

const FeaturedCategory = () => {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch('./data/Data.jsx')
                const data = await response.json();
                setProducts(data)
            }catch(error){
                console.log("Error fetch data:", error)
            }
        }
        fetchData()
    },[])
    console.log(products)
  return (
    <section className='lg:container lg:mx-auto py-8 px-4'>
        <div className='row'>
            <div className='column'>
                <h2 className='lg:text-3xl sm:text-3xl text-2xl   font-primary-font font-black text-[#253d4e]'>Featured Category</h2>
            </div>
        </div>
        <div className='row'>
            <div className='column'>
                
            </div>
        </div>

    </section>
  )
}

export default FeaturedCategory