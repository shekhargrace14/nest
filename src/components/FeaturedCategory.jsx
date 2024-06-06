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
        <div className='row grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
            {
                products.map((item)=>(
                    <div className='column rounded-2xl border-gray-100 border-2 p-2' key={item.id}>
                        <div className='image flex justify-center'>
                            <img className='w-[70%]' src={item.productImage} />
                        </div>
                        <div className='info text-center'>
                            <h3>{item.title}</h3>
                            <p className='text-gray-500'>{item.quantity} items</p>
                        </div>
                    </div>
                ))
            }

        </div>

    </section>
  )
}

export default FeaturedCategory