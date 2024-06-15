
import { useEffect, useState } from "react";
import usps from "../data/usps.json"
const Usps = ()=>{
    const [uspsData, setUspsData]= useState([]);
    useEffect(()=>{
        setUspsData(usps)
    })
    // console.log(uspsData)
    
    return(
    <section className='py-8 px-4'>

        <div className='row grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {   
                uspsData.map((item,index)=>(
                    <div className='column bg-[#f4f6fa] rounded-2xl p-4 flex justify-center items-center gap-4 ' key={index}>
                        <div className='image flex justify-center '>
                            <img className='w-[80%] ' src={item.icon} />
                        </div>
                        
                        <div className="info ">
                            <p className='text-1xl font-semibold'>{item.title} </p>
                            <p className='text-gray-500 text-base '>{item.text}</p>
                        
                        </div>
                        
                    </div>
                ))
            }

        </div>

    </section>
    )
}

export default Usps;