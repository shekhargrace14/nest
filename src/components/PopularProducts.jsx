import { PiShoppingCartLight } from "react-icons/pi"
import { ProductContext} from "../context/productContext";
import { useContext } from "react";

const PopularProduct = () =>{
    const  products = useContext(ProductContext)

    return(
        <section className='lg:container lg:mx-auto py-8 px-4'>
        <div className='row mb-8'>
            <div className='column'>
                <h2 className='lg:text-3xl sm:text-3xl text-2xl font-primary-font font-black text-[#253d4e]'>Popular Products</h2>
            </div>
        </div>
        <div className='row grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4'>
            {   
                products.slice(18).map((item)=>(
                    <div className='column rounded-2xl border-gray-100 border-2 overflow-hidden' key={item.id}>
                        <div className='image flex justify-center relative '>
                            <span className="bg-red-600 text-white h-fit py-1 px-2 absolute top-0 left-0 rounded-br-2xl" >-15%</span>
                            <img className='w-[80%] hover:scale(105%)' src={item.productImage} />
                        </div>
                        <div className='info p-4'>
                            <p className='text-gray-400 mb-2 text-xs'>{item.category}</p>
                            <p className='text-primary-color text-sm'>In Stock</p>
                            <h3 className='text-lg'>{item.title}</h3>
                            <span className='text-sm text-gray-500 mt-3'>({item.rating})</span>
                            <div className="flex items-center gap-4 mt-4 ">
                                <p className='text-base text-primary-color font-semibold'>${item.price} </p>
                                <p className='text-gray-500 text-sm line-through'>${parseFloat(item.price)+5}</p>
                            </div>
                            
                            <button className="flex flex-cols items-center gap-2 bg-primary-color text-sm text-white mt-4 py-1 px-2 rounded "><PiShoppingCartLight/> Add To Cart </button>
                        </div>
                    </div>
                ))
            }

        </div>

    </section>
    )
}
export default PopularProduct