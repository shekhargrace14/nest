import { useEffect, useState } from "react"
import dealData from "../data/deal.json"
import { PiShoppingCartLight } from "react-icons/pi"

const PopularProduct = () =>{
    const[deal, setDeal]= useState([])
    useEffect(()=>{
        setDeal(dealData)
    },[])
    // console.log(deal)
    return(
        <section className='lg:container lg:mx-auto py-8 px-4'>
        <div className='row mb-8'>
            <div className='column'>
                <h2 className='lg:text-3xl sm:text-3xl text-2xl font-primary-font font-black text-[#253d4e]'>Deals Of The Day</h2>
            </div>
        </div>
        <div className='row grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
            {   
                deal.map((item)=>(
                    <div className='column rounded-2xl overflow-hidden' key={item.id}>
                        <div className='image flex justify-center '>
                            {/* <span className="bg-red-600 text-white h-fit py-1 px-2 absolute top-0 left-0 rounded-br-2xl" >-15%</span> */}
                            <img className='w-[100%] hover:scale(105%) rounded-2xl' src={item.productImage} />
                        </div>
                        <div className="info relative lg:h-[15vh] md:h-[37vh] sm:h-[40vh] h-[20vh] p-4 ">
                            <div className="absolute top-[-5rem] bg-white sm:w-[90%] w-[90%] m-auto p-4 rounded-2xl drop-shadow    ">

                                <p className='text-gray-400 mb-2 text-xs'>{item.category}</p>
                                <p className='text-primary-color text-sm'>In Stock</p>
                                <h3 className='text-lg'>{item.title}</h3>
                                <span className='text-sm text-gray-500 mt-3'>({item.rating})</span>
                                <div className="flex flex-wrap items-center justify-start gap-4 mt-4 ">
                                    <p className='text-base text-primary-color font-semibold'>${item.price} </p>
                                    <p className='text-gray-500 text-sm line-through'>${parseFloat(item.price)+5}</p>
                                    <button className="flex flex-cols items-center gap-2 bg-primary-color text-sm text-white  py-1 px-2 rounded "><PiShoppingCartLight/> Add To Cart </button>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>

    </section>
    )
}
export default PopularProduct