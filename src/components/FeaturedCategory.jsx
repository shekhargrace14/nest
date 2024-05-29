import { useEffect, useState } from 'react'

import productData from './data'

const FeaturedCategory = () => {

    const [products, setProducts]= useState([])

    useEffect(()=>{
        setProducts(productData)
    },[])
    console.log(products)

    
  return (
    <section className='lg:container lg:mx-auto py-8 px-4'>
        <div className='row mb-8'>
            <div className='column'>
                <h2 className='lg:text-3xl sm:text-3xl text-2xl   font-primary-font font-black text-[#253d4e]'>Featured Category</h2>

            </div>
        </div>
        <div className='row flex flex-wrap justify-between gap-4'>
            {
                products.map((item)=>(
                    <div className='column lg:w-fit  w-[47%] bg-[#f1e9d5] rounded p-4 text-center' key={item.id}>
                        <div className='image h-[10vh] '>
                            <img src={item.productImage} />
                        </div>
                        <div className='info'>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))
            }

        </div>

    </section>
  )
}

export default FeaturedCategory